"use strict";
var car; //global variable
var errorAccount = 0;
//to show all information about new cars
var enterButton = document.getElementById("enter");
//buttons of cars & wheels
var btnCreateCar = document.getElementById("btnCreateCar");
var btnAddWheelsForm = document.getElementById("btnAddWheelsForm");
//FUNCTIONS
function createCar() {
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBrand");
    var color = document.getElementById("inputColor");
    var errorAccount = carValidate(plate, brand, color);
    if (errorAccount == false) {
        car = new Car(plate.value.toUpperCase(), color.value, brand.value);
        showInfoCar(plate, brand, color);
        //disabled from the form to avoid create more cars after we add wheels 
        //plate.disabled = true;
        //brand.disabled = true;
        //color.disabled = true;
        //btnCreateCar.disabled = true;
        //to show wheel form after car information
        //WheelsForm.classList.remove("d-none");
    }
}
//Car validation form
function carValidate(plate, brand, color) {
    var carForm = document.getElementById("createCarForm");
    var errorPlate = document.getElementById("errorPlate");
    var errorBrand = document.getElementById("errorBrand");
    var errorColor = document.getElementById("errorColor");
    carForm.classList.remove("is-invalid");
    if (plate.value == "") {
        plate.classList.add("is-invalid");
        errorPlate.textContent = "Please, License plate number required";
        errorAccount++;
    }
    else if (!plateValidation(plate)) {
        plate.classList.add("is-invalid");
        errorPlate.textContent = "Plate format error. The correct one is 0000XXX";
        errorAccount++;
    }
    if (brand.value == "") {
        brand.classList.add("is-invalid");
        errorBrand.textContent = "Please, Brand required";
        errorAccount++;
    }
    if (color.value == "") {
        color.classList.add("is-invalid");
        errorColor.textContent = "Please, Color required";
        errorAccount++;
    }
    if (errorAccount > 0) {
        return false;
    }
    else {
        return true;
    }
}
//validation plate number form
function plateValidation(plate) {
    var regex = /^[0-9]{4}[a-zA-Z]{3}$/;
    return regex.test(plate.value) ? true : false;
}
function addWheelsList() {
    var errorDiameter = false;
    if (errorAccount > 0 && errorDiameter == false) {
        errorDiameter = true;
    }
    for (var i = 1; i <= 4; i++) {
        var diameter = document.getElementById("inputDiameter" + [i]);
        var WheelBrand = document.getElementById("inputWheelBrand" + [i]);
        var errorAccount_1 = wheelValidate(diameter, i);
        if (errorAccount_1 == false) {
            var wheel = new Wheel(Number(diameter.value), WheelBrand.value);
            //car.addWheel(wheel);
            console.log(wheel);
            //btnAddWheels.disabled = true;
        }
    }
}
//let diameter = parseFloat(((<HTMLInputElement>document.getElementById("Diametro" + i)).value));
//let brand = document.getElementById("MarcaR" + i) as HTMLInputElement
function wheelValidate(diameter, i) {
    var addWheelsForm = document.getElementById("addWheelsForm");
    var errorDiameter = document.getElementById("errorDiameter" + [i]);
    var errorWheelBrand = document.getElementById("errorWheelBrand" + [i]);
    var wheelBrand = document.getElementById("inputWheelBrand" + [i]);
    addWheelsForm.classList.remove("is-invalid");
    if (diameter.value == "") {
        diameter.classList.add("is-invalid");
        errorDiameter.textContent = "Diameter " + [i] + " is required";
        errorAccount++;
    }
    else if (!diameterValidate(Number(diameter.value))) {
        diameter.classList.add("is-invalid");
        errorDiameter.textContent = "Diameter must be between 0.4 and 2 cm";
        errorAccount++;
    }
    //https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML#valor
    if (wheelBrand.value == "") {
        wheelBrand.classList.add("is-invalid");
        errorWheelBrand.textContent = "Brand " + [i] + " is required";
        errorAccount++;
    }
    if (errorAccount > 0) {
        return false;
    }
    else {
        return true;
    }
}
function diameterValidate(diameter) {
    return diameter > 0.4 || diameter < 2 ? true : false;
}
function showInfoCar(plate, brand, color) {
    var infoCar = document.getElementById("infoCar");
    if (!btnCreateCar) {
        infoCar.innerHTML = "<li>Plate: " + plate.value + "</li>\n                      <li>Brand: " + brand.value + "</li>\n                      <li>Color: " + color.value + "</li>";
    }
    for (var _i = 0, _a = car.wheels; _i < _a.length; _i++) {
        var wheel = _a[_i];
        var carResolt = '<ul>';
        carResolt += "<li>Diameter: - " + wheel.diameter + "</li>\n                  <li>Brand: - " + wheel.brand + "</li>";
        carResolt += '<ul>';
        return carResolt;
    }
    //EVENTS
    var carFormList = document.getElementById('infoCar');
    if (carFormList) {
        carFormList.addEventListener('change', function (event) {
            event.preventDefault();
            if (event.target.value.trim != "")
                event.target.classList.remove('is-invalid');
        }, true);
    }
    var wheelsFormList = document.getElementById('infoWheels');
    if (wheelsFormList) {
        wheelsFormList.addEventListener('change', function (event) {
            event.preventDefault();
            if (event.target.value.trim != "")
                event.target.classList.remove('is-invalid');
        }, true);
    }
}
/*function createCar(plate:string,brand:string,color:string){
  let car=new Car(plate,color,brand);
  car.addWheel(new Wheel(2,"SEAT"));
  document.body.innerText="CAR: PLATE: " + car.plate
  + " COLOR: " +car.color + " BRAND: " + brand
  + " WHEELS: " + JSON.stringify(car.wheels);
}*/ 

"use strict";
var car; //global variable
var errorAccount = 0;
var enterButton = document.getElementById('enter');
var ul = document.querySelector("ul");
var infoCar = document.getElementById('carFormId');
var wheelsFormId = document.getElementById("showInfoCar");
//FUNCTIONS
function createCar() {
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBrand");
    var color = document.getElementById("inputColor");
    var errorAccount = carValidate(plate, brand, color);
    if (errorAccount == false) {
        car = new Car(plate.value.toUpperCase(), color.value, brand.value);
        console.log(car);
        //to show wheel form after car information
        //(<HTMLFormElement>document.getElementById("createCarForm")).classList.add("d-none");
        // (<HTMLElement>document.getElementById("showCar")).classList.remove("d-none");
        document.getElementById("wheelsFormId").classList.remove("d-none");
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
            car.addWheel(wheel);
        }
        console.log(Wheel);
        console.log(car);
        //btnAddWheels.disabled = true;
    }
    generateCarDisplay();
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
        errorDiameter.textContent = "Diameter wheel " + [i] + " is required";
        errorAccount++;
    }
    else if (!diameterValidate(Number(diameter.value))) {
        diameter.classList.add("is-invalid");
        errorDiameter.textContent = "Diameter wheel must be between 0.4 and 2 cm";
        errorAccount++;
    }
    //https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML#valor
    if (wheelBrand.value == "") {
        wheelBrand.classList.add("is-invalid");
        errorWheelBrand.textContent = "Brand wheel " + [i] + " is required";
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
    return diameter > 0.4 && diameter < 2 ? true : false;
}
function generateCarDisplay() {
    deleteCarContainerFromView();
    generateWheelsContainerForView();
    showInfoCar();
}
function generateWheelsDisplay() {
    showInfoCar();
    disableWheelsButton();
}
function deleteCarContainerFromView() {
    var carContainer = document.getElementById("carFormId");
    carContainer.style.display = "none";
}
function generateWheelsContainerForView() {
    var wheelsContainer = document.getElementById("wheelsFormId");
    // wheelsContainer.style.display = "block";
}
function disableWheelsButton() {
    var button = document.getElementById("wheelsButton");
    button.disabled = true;
}
function showInfoCar() {
    var mensaje = "";
    for (var n = 0; n < car.wheels.length; n++) {
        mensaje += " \n          <li>diameter: " + car.wheels[n].diameter + ", brand: " + car.wheels[n].brand + "</li>\n      \n      ";
    }
    var carInfo = document.getElementById("showInfoCar");
    var element = document.createElement('ul');
    element.innerHTML = "\n      <div class=\"card-5 m-5\">\n        <h1 class=\"text-primary\">CAR's details</h1>\n          <div class=\"card-body\">\n              <h2 class=\"text-primary\">CAR:</h2>\n                  <ul class=\"text-white\" style = \"list-style:none;\">\n                      <li>Plate: " + car.plate + "</li>\n                      <li>Color: " + car.color + "</li>\n                      <li>Brand: " + car.brand + "</li>\n                  </ul>\n                  <h4 class=\"text-primary\">WHEELS: </h4>\n                  <ul> \n                      <ol class=\"text-white\">\n                      " + mensaje + "\n                      </ol>\n                      </li>\n                  </ul>\n          </div>\n      </div>\n  ";
    carInfo.appendChild(element);
}
//EVENTS
var carFormList = document.getElementById('createCarForm');
if (carFormList) {
    carFormList.addEventListener('blur', function (event) {
        event.preventDefault();
        if (event.target.value.trim != "")
            event.target.classList.remove('is-invalid');
    }, true);
}
var wheelsFormList = document.getElementById('addWheelsForm');
if (wheelsFormList) {
    wheelsFormList.addEventListener('blur', function (event) {
        event.preventDefault();
        if (event.target.value.trim != "")
            event.target.classList.remove('is-invalid');
    }, true);
}
/*function createCar(plate:string,brand:string,color:string){
  let car=new Car(plate,color,brand);
  car.addWheel(new Wheel(2,"SEAT"));
  document.body.innerText="CAR: PLATE: " + car.plate
  + " COLOR: " +car.color + " BRAND: " + brand
  + " WHEELS: " + JSON.stringify(car.wheels);
}*/ 

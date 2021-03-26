"use strict";
var car; //global variable
var carlist = [];
var errorAccount = 0;
var ul = document.querySelector("ul");
//car and whells forms
var infoCarForm = document.getElementById("createCarForm");
var infoWheelsForm = document.getElementById("addWheelsForm");
var btnCreateWheel = document.getElementById("wheelsButton");
var showCar = document.getElementById("showInfoCar");
//FUNCTIONS
function createCar() {
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBrand");
    var color = document.getElementById("inputColor");
    var errorPlate = document.getElementById("errorPlate");
    var errorBrand = document.getElementById("errorBrand");
    var errorColor = document.getElementById("errorColor");
    infoCarForm.classList.remove("is-invalid");
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
    else if (brand.value == "") {
        brand.classList.add("is-invalid");
        errorBrand.textContent = "Please, Brand required";
        errorAccount++;
    }
    else if (color.value == "") {
        color.classList.add("is-invalid");
        errorColor.textContent = "Please, Color required";
        errorAccount++;
    }
    else {
        car = new Car(plate.value.toUpperCase(), brand.value, color.value);
        carlist.push(car);
        //show me car information. 1st form
        alert("the car has been created correctly:  \n \n Plate:   " + plate.value + "\n Brand:  " + brand.value + "\n Color:   " + color.value);
        //console.log(car);
        //Hide the first form
        infoCarForm.classList.add("d-none");
        //Display second form
        infoWheelsForm.classList.remove('d-none');
        showInfoCar();
    }
}
//validation plate number form
function plateValidation(plate) {
    var regex = /^(\d{4}[a-zA-Z]{3})$/;
    return regex.test(plate.value) ? true : false;
}
function showInfoCar() {
    showCar.classList.remove('d-none');
    var elementList = document.createElement('ul');
    /*for(let n=0; n<car.wheels.length; n++){
      let mensaje:string = "";
    mensaje += `<li>diameter: ${car.wheels[n].diameter}, brand: ${car.wheels[n].brand}</li>`;
  }*/
    if (car.wheels.length < 1) {
        elementList.innerHTML =
            "<div class=\"row col-12 border-bottom border-warning m-0\">\n          <h1 class=\"text-primary\">CAR's details</h1>\n          <div class=\"card-body\">\n              <h2 class=\"text-primary\">CAR:</h2>\n                <ul class=\"text-white\" style = \"list-style:none;\">\n                  <li>Plate: " + car.plate + "</li>\n                  <li>Color: " + car.color + "</li>\n                  <li>Brand: " + car.brand + "</li>\n                </ul>\n          </div>\n        </div>";
    }
    else {
        elementList.innerHTML =
            "<div class=\"card-5 m-5 row col-12 border-bottom border-warning m-0\">\n          <h1 class=\"text-primary\">CAR's details</h1>\n          <div class=\"card-body\">\n              <h2 class=\"text-primary\">CAR:</h2>\n                <ul class=\"text-white\" style = \"list-style:none;\">\n                  <li>Plate: " + car.plate + "</li>\n                  <li>Color: " + car.color + "</li>\n                  <li>Brand: " + car.brand + "</li>\n                </ul>\n              <h2 class=\"text-primary\">WHEELS: </h2>\n                <ul> \n                <li>diameter: " + car.wheels[0].diameter + ",\n                 brand: " + car.wheels[0].brand + "</li>\n                 <li>diameter: " + car.wheels[1].diameter + ",\n                 brand: " + car.wheels[1].brand + "</li>\n                 <li>diameter: " + car.wheels[2].diameter + ",\n                 brand: " + car.wheels[2].brand + "</li>\n                 <li>diameter: " + car.wheels[3].diameter + ",\n                 brand: " + car.wheels[3].brand + "</li>\n                </ul>\n          </div>}\n        </div>";
        // showCar.appendChild(elementList);
    }
}
function addWheelsList() {
    var errorDiameter = false;
    if (errorAccount > 0 && errorDiameter == false) {
        errorDiameter = true;
    }
    for (var i = 1; i <= 4; i++) {
        var diameter = document.getElementById("inputDiameter" + [i]);
        var brand = document.getElementById("inputWheelBrand" + [i]);
        var errorAccount_1 = wheelValidate(diameter, i);
        if (errorAccount_1 == false) {
            var wheel = new Wheel(Number(diameter.value), brand.value);
            car.addWheel(wheel);
            btnCreateWheel.disabled = true;
        }
        console.log(Wheel);
        console.log(car);
        //Hide the first form
        infoWheelsForm.classList.add('d-none');
        infoWheelsForm.reset();
        showInfoCar();
    }
}
//Form wheels validation
function wheelValidate(diameter, i) {
    var errorDiameter = document.getElementById("errorDiameter" + [i]);
    var errorWheelBrand = document.getElementById("errorWheelBrand" + [i]);
    var brand = document.getElementById("inputWheelBrand" + [i]);
    infoWheelsForm.classList.remove("is-invalid");
    if (diameter.value == "") {
        diameter.classList.add("is-invalid");
        errorDiameter.textContent = "Diameter wheel " + [i] + " is required";
        errorAccount++;
    }
    else if (!diameterValidate(Number(diameter))) {
        diameter.classList.add("is-invalid");
        errorDiameter.textContent = "Diameter wheel must be between 0.4 and 2 cm";
        errorAccount++;
    }
    //https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML#valor
    if (brand.value == "") {
        brand.classList.add("is-invalid");
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
//EVENTS
//const carFormList:HTMLInputElement = document.getElementById('createCarForm') as HTMLInputElement;
if (infoCarForm) {
    infoCarForm.addEventListener('blur', function (event) {
        event.preventDefault();
        if (event.target.value.trim != "")
            event.target.classList.remove('is-invalid');
    }, true);
}
// const wheelsFormList:HTMLInputElement = document.getElementById('addWheelsForm') as HTMLInputElement;
if (infoWheelsForm) {
    infoWheelsForm.addEventListener('blur', function (event) {
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
/* function openForm1(){
   document.getElementById("carFormId").style.display = "block";
  }
 function openForm2(){
    document.getElementById("wheelsFormId").style.display = "block";
 }*/

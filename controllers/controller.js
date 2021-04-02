"use strict";
var car; //global variable
var carlist = [];
var errorAccount = 0;
var ul = document.querySelector("ul");
//car and wheels forms
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
//show result of form's car and wheels 
function showInfoCar() {
    showCar.classList.remove('d-none');
    var elementList = document.createElement('ul');
    //show firts car after full form validation
    //https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML#valor
    if (car.wheels.length < 1) {
        showCar.innerHTML =
            "<div class=\"row col-10 border-white\">\n          <div class=\"card-header text-center border-white col-12\">\n            <h2 class=\"text-white\">CAR's details</h2>\n          </div>\n          <div class=\"col-10 text-white\"></div>\n          <div class=\"card-body col-6\">\n            <h3 class=\"text-primary bg-white p-1\">CAR:</h3>\n            <ul class=\"text-white\" style = \"list-style:none;\">\n              <li>Plate: " + car.plate + "</li>\n              <li>Brand: " + car.brand + "</li>\n              <li>Color: " + car.color + "</li>\n            </ul>\n          </div>\n        </div>";
    }
    else {
        showCar.innerHTML =
            "<div class=\"col-10 border-white\">\n             <div class=\"card-header text-center border-white col-12\">\n               <h2 class=\"text-white\">CAR's details</h2>\n             </div>\n         </div>\n         <div class=\"row col-10\">\n             <div class=\"card-body col-6\">\n                 <h3 class=\"text-primary bg-white p-1\">CAR:</h3>\n                 <div class=\"text-white\">\n                     <span class=\"font-weight-bold text-white\">Plate: </span>" + car.plate + " \n                 </div>\n                 <div class=\"text-white\">\n                     <span class=\"font-weight-bold text-white\">Brand: </span>" + car.brand + " \n                 </div>\n                 <div class=\"text-white\">\n                     <span class=\"font-weight-bold text-white\">Color: </span>" + car.color + " \n                 </div>\n             </div> \n             <div class=\"card-body col-6\">\n                 <h3 class=\"text-primary bg-white p-2\">WHEELS:</h3>\n                 <div class=\"\">\n                     <div class=\"font-weight-bold text-white\">Wheel 1:</div> \n                     <div class=\"text-white\">\n                         brand: " + car.wheels[0].brand + " \n                         diameter: " + car.wheels[0].diameter + "\n                     </div>\n                 </div>\n                 <div class=\"\">\n                     <div class=\"font-weight-bold text-white\">Wheel 2:</div>\n                     <div class=\"text-white\">\n                         brand: " + car.wheels[1].brand + "\n                         diameter: " + car.wheels[1].diameter + " \n                     </div>\n                 </div>\n                 <div class=\"\">\n                     <div class=\"font-weight-bold text-white\">Wheel 3:</div>\n                     <div class=\"text-white\">\n                         brand: " + car.wheels[2].brand + "\n                         diameter: " + car.wheels[2].diameter + " \n                     </div>\n                 </div>\n                 <div class=\"\">\n                     <div class=\"font-weight-bold text-white\">Wheel 4:</div>\n                     <div class=\"text-white\">\n                         brand: " + car.wheels[3].brand + "\n                         diameter: " + car.wheels[3].diameter + " \n                     </div>\n                     \n                 </div>\n             </div>\n         </div>";
        showCar.appendChild(elementList);
    }
}
function addWheelsList() {
    if (wheelValidate()) {
        for (var i = 1; i <= 4; i++) {
            var brand = document.getElementById("inputWheelBrand" + i).value;
            var diameter = document.getElementById("inputDiameter" + i).value;
            car.addWheel(new Wheel(brand, diameter));
            // btnCreateWheel.disabled = true;
        }
        console.log(car.wheels);
        console.log(car);
        //Hide the first form
        infoWheelsForm.classList.add('d-none');
        infoWheelsForm.reset();
    }
    showInfoCar();
}
//Form wheels validation
function wheelValidate() {
    var errorAccount = 0;
    for (var j = 1; j <= 4; j++) {
        var diameter = document.getElementById("inputDiameter" + j);
        var diameterValue = document.getElementById("inputDiameter" + j).value;
        //infoWheelsForm.classList.remove("is-invalid");
        if (diameterValue < 0.4 || diameterValue > 2) {
            diameter.classList.add("is-invalid");
            errorAccount++;
        }
        else if (diameter.classList.contains('is-invalid')) {
            diameter.classList.add("is-invalid");
            errorAccount++;
        }
    }
    if (errorAccount > 0) {
        return false;
    }
    else {
        return true;
    }
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

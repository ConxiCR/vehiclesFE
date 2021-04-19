"use strict";
var car; //global variable
var carList = [];
var plate = document.getElementById("inputPlate");
var brand = document.getElementById("inputBrand");
var color = document.getElementById("inputColor");
//car and wheels forms
var infoCarForm = document.getElementById("createCarForm");
var infoWheelsForm = document.getElementById("addWheelsForm");
var btnCreateCar = document.querySelector("btnCreateCar");
var btnCreateWheel = document.querySelector("wheelsButton");
//elements to show cars
var showOnlyCar = document.getElementById("showOnlyCar");
var showCarWhithWheels = document.getElementById("showCarWhithWheels");
//FUNCTIONS
function createCar() {
    var validateCar = carValidate(plate, brand, color);
    if (validateCar == true) {
        car = new Car(plate.value.toUpperCase(), brand.value, color.value);
        carList.push(car);
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
function carValidate(plate, brand, color) {
    var errorPlate = document.getElementById('errorPlate');
    var errorBrand = document.getElementById("errorBrand");
    var errorColor = document.getElementById("errorColor");
    var errorAccount = 0;
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
//validation plate number formgdgfdgfgf
function plateValidation(plate) {
    var regex = /^(\d{4}[a-zA-Z]{3})$/;
    return regex.test(plate.value) ? true : false;
}
//show result of form's car and wheels 
function showInfoCar() {
    //show firts car after full form validation
    //https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML#valor
    if (car.wheels.length < 1) {
        showOnlyCar.classList.remove('d-none');
        //print a car
        var showPlate = document.getElementById("showPlate").innerHTML = ("Plate: " + plate.value);
        var showBrand = document.getElementById("showBrand").innerHTML = ("Brand: " + brand.value);
        var showColor = document.getElementById("showColor").innerHTML = ("Color: " + color.value);
        showOnlyCar;
        /*
        const appCar:any = document.querySelectorAll(".appCar");
        const template:any =document.getElementById("carPlate");
  
        template.outerHTML = `Plate: ${plate.value},  Brand: ${brand.value}, color: ${color.value}`;
        template.outerHTML;
      
        let li = document.createElement("li");
        let showCar = `Plate: ${plate.value},  Brand: ${brand.value}, color: ${color.value}`;
        li.innerHTML = showCar;
        appCar.appendChild(li);*/
        //let appCar = document.getElementById("appCar").lastChild.innerHTML;
        //document.getElementById("showOnlyCar").innerHTML = list;               
        //showPlate:Text = document.createTextNode('Car: ');
        /*showPlate.textContent =(`${car.plate}`);
        showBrand = document.createTextNode(`Brand: ${car.brand}`);
        showColor = document.createTextNode(`Color: ${car.color}`)
        */
        infoCarForm.reset();
    }
    else {
        // showOnlyCar.classList.add('d-none');
        showCarWhithWheels.classList.remove('d-none');
        var i = void 0;
        /* for(i = 1;i<4;i++){
           let brandWheel:HTMLInputElement= <HTMLInputElement>document.getElementById("inputWheelBrand" + [i]);
           let diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputDiameter" + [i]);
           
           //let showWheelBrand: any = (document.getElementById("showWheelBrand" + [i]) as HTMLSpanElement).textContent  = ("Brand: " + brandWheel);
           //let showDiameter:   any = (document.getElementById("showDiameter" + [i]) as HTMLSpanElement).innerHTML    = ("Diameter: " + diameter);
           
           let showCarWhithWheels:HTMLDivElement = <HTMLInputElement>document.getElementById("showCarWhithWheels");
           let showWheels:Text = document.createTextNode(`Brand: ${car.wheels[i].brand} Diameter: ${car.wheels[i].diameter.toString()}`);
                
           showCarWhithWheels;
         }*/
        for (var i_1 = 0; i_1 < 4; i_1++) {
            Wheel: var wheelNumber = 1;
            //let showCarWhithWheels:HTMLDivElement = <HTMLInputElement>document.getElementById("showCarWhithWheels");
            var showWheels = document.createTextNode("Brand: " + car.wheels[i_1].brand + " Diameter: " + car.wheels[i_1].diameter.toString());
            showCarWhithWheels.appendChild(showWheels);
            wheelNumber++;
        }
    }
}
function addWheelsList() {
    if (wheelValidate()) {
        for (var i = 1; i <= 4; i++) {
            var brand_1 = document.getElementById("inputWheelBrand" + i).value;
            var diameter = document.getElementById("inputDiameter" + i).value;
            car.addWheel(new Wheel(brand_1, diameter));
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

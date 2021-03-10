"use strict";
var car; //global variable
var plate = document.getElementById("inputPlate");
var brand = document.getElementById("inputBrand");
var color = document.getElementById("inputColor");
var errorAccount = 0;
//to show all information about new cars
var infoCar = document.getElementById("carFormId");
var enterButton = document.getElementById("enter");
var carForm = document.getElementById("createCarForm");
var wheelFormId = document.getElementById("wheelFormId");
//buttons of cars & wheels
var btnCreateCar = document.getElementById("btnCreateCar");
var btnAddWheels = document.getElementById("btnAddWheels");
//FUNCTIONS
function createCar() {
    var errorAccount = carValidate(plate, brand, color);
    if (errorAccount == false) {
        car = new Car(plate.value.toUpperCase(), color.value, brand.value);
        //disabled from the form to avoid create more cars after we add wheels 
        plate.disabled = true;
        brand.disabled = true;
        color.disabled = true;
        btnCreateCar.disabled = true;
        /to show wheel form after car information;
        wheelFormId.classList.remove("d-none");
    }
}
//Car validation form
function carValidate(plate, brand, color) {
    var errorPlate = document.getElementById("errorPlate");
    var errorBrand = document.getElementById("errorBrand");
    var errorColor = document.getElementById("errorColor");
    carForm.classList.remove("is-invalid");
    if (plate.value == "") {
        plate.classList.add("is-invalid");
        errorPlate.textContent = "License plate number required";
        errorAccount++;
    }
    else if (!plateValidation(plate)) {
        plate.classList.add("is-invalid");
        errorPlate.textContent = "Plate format error. The correct one is 0000XXX";
        errorAccount++;
    }
    if (brand.value == "") {
        brand.classList.add("is-invalid");
        errorBrand.textContent = "Brand required";
        errorAccount++;
    }
    if (color.value == "") {
        color.classList.add("is-invalid");
        errorColor.textContent = "Color required";
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
/* function addWheels(){
   let key:number = i;
   let brand = document.getElementById("MarcaR" + key) as HTMLElement;
   
    for (let i = 1; i <= 4; i++) {
     
     let diameter:HTMLInputElement = document.getElementById("inputBrandWheel" + [i]) as HTMLInputElement;
     errorAccount = wheelValidate(diameter, brand, i);
     if(errorAccount > 0 &&      == false){

   }
     //let diameter = parseFloat(((<HTMLInputElement>document.getElementById("Diametro" + i)).value));
   }

  /*if(errorAccount == 0){
     addWheel = new Wheels(brand.value, diameter.value, key.value );
  
   }*/
//}
function wheelValidate(diameter, brand, i) {
    var errorDiameter = document.getElementById("errorDiameter" + [i]);
    var errorWheelBrand = document.getElementById("errorWheelBrand" + [i]);
    wheelFormId.classList.remove("is-invalid");
    if (diameter.value == "") {
        diameter.classList.add("is-invalid");
        errorDiameter.textContent = "Diameter is required";
        errorAccount++;
    }
    else if (!Diametervalidate(Number(diameter.value))) {
        diameter.classList.add("is-invalid");
        errorDiameter.textContent = "Diameter must between 0.4 and 2 cm";
        errorAccount++;
    }
    //https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML#valor
    if (errorWheelBrand.innerHTML == "") {
        brand.classList.add("is-invalid");
        errorWheelBrand.textContent = "Brand is required";
        errorAccount++;
    }
    if (errorAccount > 0) {
        return false;
    }
    else {
        return true;
    }
}
function Diametervalidate(diameter) {
    return diameter > 0.4 || diameter < 2 ? true : false;
}
//EVENTS
/* if (carForm){
   carForm.addEventListener('change', (event:any) => {
   event.preventDefault()
   
   if (event.target.value.trim != "") event.target.classList.remove('is-invalid');
   },  true);
 }
/* enterButton.addEventListener("blur", createCar);
 createCar.innerHTML = `<p class="pt-3"><span class="font-weight-bold">Plate:</span> ${plate}</p>
 <p class="pt-3"><span class="font-weight-bold">Brand:</span> ${brand}</p>
 <p class="pt-3"><span class="font-weight-bold">Color:</span> ${color}</p>`;*/
/*InputPlate.addEventListener("blur", function(){
  WebGLTransformFeedback(this, validPlate(this.value));
});*/
/*let carDataValidation = carValidate(plate,brand,color);
if(carDataValidation){
  car = new Car(plate.value, brand.value, color.value);

  infoCar.innerHTML = `<p class="pt-3"><span class="font-weight-bold">Plate:</span> ${plate}</p>
      <p class="pt-3"><span class="font-weight-bold">Brand:</span> ${brand}</p>
      <p class="pt-3"><span class="font-weight-bold">Color:</span> ${color}</p>`;
}*/
/*function createCar(plate:string,brand:string,color:string){
  let car=new Car(plate,color,brand);
  car.addWheel(new Wheel(2,"SEAT"));
  document.body.innerText="CAR: PLATE: " + car.plate
  + " COLOR: " +car.color + " BRAND: " + brand
  + " WHEELS: " + JSON.stringify(car.wheels);
}*/ 

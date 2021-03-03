let car: Car;//car's collection
let showCar:HTMLElement = document.getElementById('showCar');

function createCar(){
  let plate:HTMLInputElement = <HTMLInputElement>document.getElementById("inputPlate");
  let brand:HTMLInputElement = <HTMLInputElement>document.getElementById("inputBrand");
  let color:HTMLInputElement = <HTMLInputElement>document.getElementById("inputColor");
 
  let errorAccount = carValidate(plate, brand, color);
  
  if(errorAccount == false){

  car = new Car(plate.value, color.value, brand.value);
    
  createCar();

  (document.getElementById('showCar') as HTMLInputElement).innerHTML;

  showCar.innerHTML = `<ul>Plate: ${plate}</ul>
                      <ul>Brand: ${brand}</ul>
                      <ul>Color: ${color}</ul>`;
  }
}
/*function addWheels(){
  let i: number;
  let brandW:HTMLInputElement = <HTMLInputElement>document.getElementById("inputBrandWheel");
  let diameter:HTMLInputElement = <HTMLInputElement>document.getElementById("inputDiameter");
  let wheelDataValidation = wheelsValidate(brandW, diameter, i);
  if(wheelDataValidation){

  new Wheel(brandW, diameter);
    Car.addWheel(brandW,diameter,i);

    
  }
}*/
/*
document.body.innerText="CAR: PLATE: " + car.plate + " COLOR: " +car.color + " BRAND: " + car.brand 
+ " WHEELS: " + JSON.stringify(car.wheel);  */


function openForm1(){
  document.getElementById("carFormId").style.display = "block";
 }
function openForm2(){
   document.getElementById("wheelFormId").style.display = "block";
}
function closeForm1(){
    document.getElementById("carFormId").style.display = "none";
}

function closeForm2(){
   document.getElementById("wheelFormId").style.display = "none";
}

//Form car validation
function carValidate(plate:HTMLInputElement,brand:HTMLInputElement,color:HTMLInputElement){
  const form:HTMLInputElement = <HTMLInputElement>document.getElementById('carFormId');

  let errorPlate: HTMLElement = <HTMLElement>document.getElementById("errorPlate");
  let errorBrand: HTMLElement = <HTMLElement>document.getElementById("errorBrand");
  let errorColor: HTMLElement = <HTMLElement>document.getElementById("errorColor");
  let errorAccount:number = 0;
  form.classList.remove('is-invalid');
  
  if (plate.value === ""){
    plate.classList.add("is-invalid");
    errorPlate.textContent = "License plate number required";
    errorAccount ++;
  }else if (!plateValidation(plate.value)){
    plate.classList.add("is-invalid");
    errorPlate.textContent = "Plate format error. The correct one is 0000XXX";
    errorAccount ++;
  }
  if (brand.value == ""){
		brand.classList.add("is-invalid");
    errorBrand.textContent = "Brand required";
		errorAccount ++;
  }
  if (color.value == ""){
		color.classList.add("is-invalid");
    errorColor.textContent = "Color required";
		errorAccount ++;
  }
  if (errorAccount> 0){
    return false;
  }else{
		return true;
	}
}
//plate validation
function plateValidation(plate:string){
  var regex = /^[0-9]{4}[a-zA-Z]{3}$/;
  return regex.test(plate) ? true : false;
}
//Form wheels validation
/*function wheelsValidate(brandW:HTMLInputElement, diameter:HTMLInputElement, i:number){

    const form:HTMLInputElement = <HTMLInputElement>document.getElementById('wheelFormId');
    let errorWheelBrand:HTMLInputElement = <HTMLInputElement>document.getElementById('errorWheelBrand');
    let errorDiameter:HTMLInputElement = <HTMLInputElement>document.getElementById('errorDiameter'+[i]);
    let errorAccount = 0;

    form.classList.remove('is-invalid');

	if (brandW.value == ""){
		brandW.classList.add("is-invalid");
    errorWheelBrand.textContent = "Wheel brand required";
		errorAccount ++;
    }
  	
  if (diameter.value == ""){
      diameter.classList.add("is-invalid");
      errorDiameter.textContent = "Diameter required";
      errorAccount++;
  }else if (diameter <= 0.4 || diameter.value > 2) {
      diameter.classList.add("is-invalid");
      errorDiameter.textContent = "Invalid diameter. The correct is > 0.4 and < 2 cm";
      errorAccount++;
  }

  if (errorAccount > 0) {
    return false;
  }else{
    return true;
  }
}*/

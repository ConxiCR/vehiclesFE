  let car:Car;//global variable
          
    let errorAccount = 0;

    //to show all information about new cars
    let enterButton = document.getElementById("enter") as HTMLElement;

    //buttons of cars & wheels
    let btnCreateCar = document.getElementById("btnCreateCar") as HTMLInputElement;
    let btnAddWheelsForm = document.getElementById("btnAddWheelsForm") as HTMLInputElement;
 
  //FUNCTIONS
  function createCar(){
    let plate:HTMLInputElement = document.getElementById("inputPlate") as HTMLInputElement;
    let brand:HTMLInputElement = document.getElementById("inputBrand") as HTMLInputElement;
    let color:HTMLInputElement = document.getElementById("inputColor") as HTMLInputElement;

    let errorAccount:boolean = carValidate(plate, brand, color);
    
     if(errorAccount == false){
      car = new Car(plate.value.toUpperCase(), color.value, brand.value);
     showInfoCar(plate,brand,color);
      
      
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
 function carValidate(plate: HTMLInputElement, brand: HTMLInputElement, color: HTMLInputElement){
    const carForm =  document.getElementById("createCarForm") as HTMLInputElement;  
    let errorPlate: HTMLElement = document.getElementById("errorPlate") as HTMLElement;
    let errorBrand: HTMLElement = document.getElementById("errorBrand") as HTMLElement;
    let errorColor: HTMLElement = document.getElementById("errorColor") as HTMLElement;
    
    carForm.classList.remove("is-invalid");
    
    if (plate.value == ""){
      plate.classList.add("is-invalid");
      errorPlate.textContent = "Please, License plate number required";
      errorAccount ++;
    
    }else if (!plateValidation(plate)){
      plate.classList.add("is-invalid");
      errorPlate.textContent = "Plate format error. The correct one is 0000XXX";
      errorAccount ++;
    }
    if (brand.value == ""){
      brand.classList.add("is-invalid");
      errorBrand.textContent = "Please, Brand required";
      errorAccount ++;
    }
    if (color.value == ""){
      color.classList.add("is-invalid");
      errorColor.textContent = "Please, Color required";
      errorAccount ++;
    }
    if (errorAccount > 0){
      return false;
    }else{
    return true;
    }
    
}
  //validation plate number form
function plateValidation(plate:HTMLInputElement): boolean{
  var regex = /^[0-9]{4}[a-zA-Z]{3}$/;
  return regex.test(plate.value) ? true : false;
}

function addWheelsList(){
  
  let errorDiameter:boolean = false;
  if(errorAccount > 0 && errorDiameter == false){
      errorDiameter = true;
  }
  for(let i = 1; i <= 4; i++) {
      let diameter = document.getElementById("inputDiameter" + [i]) as HTMLInputElement;
      let WheelBrand = document.getElementById("inputWheelBrand" + [i]) as HTMLInputElement;
        let errorAccount = wheelValidate(diameter, i);
        if(errorAccount == false){
          let wheel:Wheel = new Wheel(Number(diameter.value), WheelBrand.value);
         //car.addWheel(wheel);
         console.log(wheel);
        //btnAddWheels.disabled = true;
        } 
  }
}
//let diameter = parseFloat(((<HTMLInputElement>document.getElementById("Diametro" + i)).value));
//let brand = document.getElementById("MarcaR" + i) as HTMLInputElement
  
function wheelValidate(diameter:HTMLInputElement, i:number){   
  const addWheelsForm = document.getElementById("addWheelsForm") as HTMLInputElement; 
  let errorDiameter: HTMLInputElement = document.getElementById("errorDiameter" + [i]) as HTMLInputElement;    
  let errorWheelBrand: HTMLInputElement= document.getElementById("errorWheelBrand"+ [i]) as HTMLInputElement;
  let wheelBrand:HTMLInputElement = document.getElementById("inputWheelBrand" + [i]) as HTMLInputElement;

  addWheelsForm.classList.remove("is-invalid");

  if (diameter.value == "") {
    diameter.classList.add("is-invalid");
    errorDiameter.textContent = `Diameter ${[i]} is required`;
    errorAccount++;
  } else if (!diameterValidate(Number(diameter.value))) {
    diameter.classList.add("is-invalid");
    errorDiameter.textContent = "Diameter must be between 0.4 and 2 cm";
    errorAccount++;
  }
  //https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML#valor
 if (wheelBrand.value == ""){
    wheelBrand.classList.add("is-invalid");
    errorWheelBrand.textContent = `Brand ${[i]} is required`;
    errorAccount ++;
  }
  if (errorAccount > 0){
    return false;
  }else{
    return true;
  }
}
function diameterValidate(diameter:number) {
  return diameter > 0.4 || diameter < 2 ? true : false;
}

function showInfoCar(plate:HTMLInputElement, brand:HTMLInputElement, color:HTMLInputElement){
  let infoCar = document.getElementById("infoCar") as HTMLElement;
  if(!btnCreateCar){
  console.log(car);
  infoCar.innerHTML= `<li>Plate: ${plate.value}</li>
                      <li>Brand: ${brand.value}</li>
                      <li>Color: ${color.value}</li>`;
  }
 
 for(let wheel of car.wheels){
  let carResolt = '<ul>';

    carResolt += `<li>Diameter: - ${wheel.diameter}</li>
                  <li>Brand: - ${wheel.brand}</li>`
    carResolt += '<ul>';
    return carResolt;

  }
}
    
  //EVENTS
  const carFormList:HTMLInputElement = document.getElementById('infoCar') as HTMLInputElement;
  if (carFormList){
    carFormList.addEventListener('change', (event:any) => {
   event.preventDefault()
    
    if (event.target.value.trim != "") event.target.classList.remove('is-invalid');
    },  true); 
  }
  const wheelsFormList:HTMLInputElement = document.getElementById('infoWheels') as HTMLInputElement;
  if (wheelsFormList){
    wheelsFormList.addEventListener('change', (event:any) => {
    event.preventDefault()
    
    if (event.target.value.trim != "") event.target.classList.remove('is-invalid');
    },  true); 
  }


  /*function createCar(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    document.body.innerText="CAR: PLATE: " + car.plate 
    + " COLOR: " +car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels);
  }*/
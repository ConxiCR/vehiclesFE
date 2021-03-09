
 
  let car:Car;//global variable
  
  /*let infoCar = document.getElementById("carFormId") as HTMLElement;
  

    
    let errorWheelBrand: HTMLElement = document.getElementById("errorWheelBrand") as HTMLElement;
    let errorDiameter: HTMLElement = document.getElementById("errorDiameter") as HTMLElement;
    
    
    let enterButton = document.getElementById("enter") as HTMLElement;*/

  
  
  //FUNCTIONS
  function createCar(){
    let plate:HTMLInputElement = document.getElementById("inputPlate") as HTMLInputElement;
    let brand:HTMLInputElement = document.getElementById("inputBrand") as HTMLInputElement;
    let color:HTMLInputElement = document.getElementById("inputColor") as HTMLInputElement;
    let errorAccount = carValidate(plate, brand, color);
      
    if(errorAccount == false){
    car = new Car(plate.value.toUpperCase(), color.value, brand.value);

    /*btnCreateCar.disabled = true;*/
    
    }
  }

  /*let carDataValidation = carValidate(plate,brand,color);
  if(carDataValidation){
    car = new Car(plate.value, brand.value, color.value);

    infoCar.innerHTML = `<p class="pt-3"><span class="font-weight-bold">Plate:</span> ${plate}</p>
        <p class="pt-3"><span class="font-weight-bold">Brand:</span> ${brand}</p>
        <p class="pt-3"><span class="font-weight-bold">Color:</span> ${color}</p>`;
  }*/
    
  function addWheels(){
    
  }
  
  //validation form
 
 function carValidate(plate: HTMLInputElement, brand: HTMLInputElement, color: HTMLInputElement){
  const carForm =  document.getElementById("createCarForm") as HTMLInputElement;
  const btnCreateCar = document.getElementById("btnCreateCar") as HTMLInputElement;
  let errorPlate: HTMLElement = document.getElementById("errorPlate") as HTMLElement;
  let errorBrand: HTMLElement = document.getElementById("errorBrand") as HTMLElement;
  let errorColor: HTMLElement = document.getElementById("errorColor") as HTMLElement;




    let errorAccount:number = 0;
    carForm.classList.remove("is-invalid");
    
    if (plate.value == ""){
      plate.classList.add("is-invalid");
      errorPlate.textContent = "License plate number required";
      errorAccount ++;
           
    }else if (!plateValidation(plate)){
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
  function wheelValidate(diameter:any, i:number){
    var errorAccount:number = 0;
        
   let errorDiameter: HTMLElement = <HTMLElement>document.getElementById("errorDiameter"+[i]);
           
   if (diameter.value == "") {
       diameter.classList.add("is-invalid");
       errorDiameter.textContent = "Diameter is required";
       errorAccount++;
   } else if (diameter.value <= 0.4 || diameter.value >= 2) {
       diameter.classList.add = ("is-invalid");
       errorDiameter.textContent = "Invalid diameter. The correct is > 0.4 and < 2 cm";
       errorAccount++;
   }
   
   return errorAccount;
  }
  //EVENTS

 /* if (carForm){
    carForm.addEventListener('submit', (event:any) => {
    event.preventDefault()
    if (event.target.value.trim != "") event.target.classList.remove('is-invalid');
    },  true); 
  }
  enterButton.addEventListener("click", createCar);*/
  
  



  /*function createCar(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    document.body.innerText="CAR: PLATE: " + car.plate 
    + " COLOR: " +car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels);
  }*/
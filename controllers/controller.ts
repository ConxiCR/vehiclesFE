  let car:Car;//global variable
  let carlist = [];
          
    let errorAccount:number = 0;
    let ul = document.querySelector("ul"); 

    //car and wheels forms
    let infoCarForm:any      = document.getElementById("createCarForm");
    let infoWheelsForm:any   = document.getElementById("addWheelsForm");
    let btnCreateWheel:any   = document.getElementById("wheelsButton");
    
    let showCar= document.getElementById("showInfoCar") as HTMLInputElement;
 
  //FUNCTIONS
  function createCar(){
    let plate = document.getElementById("inputPlate") as HTMLInputElement;
    let brand = document.getElementById("inputBrand") as HTMLInputElement;
    let color = document.getElementById("inputColor") as HTMLInputElement;

    let errorPlate: HTMLElement = document.getElementById("errorPlate") as HTMLElement;
    let errorBrand: HTMLElement = document.getElementById("errorBrand") as HTMLElement;
    let errorColor: HTMLElement = document.getElementById("errorColor") as HTMLElement;

    infoCarForm.classList.remove("is-invalid");
    if (plate.value == ""){
      plate.classList.add("is-invalid");
      errorPlate.textContent = "Please, License plate number required";
      errorAccount ++;
    }else if (!plateValidation(plate)){
      plate.classList.add("is-invalid");
      errorPlate.textContent = "Plate format error. The correct one is 0000XXX";
      errorAccount ++;
    }
    else if (brand.value == ""){
      brand.classList.add("is-invalid");
      errorBrand.textContent = "Please, Brand required";
      errorAccount ++;
    }
    else if (color.value == ""){
      color.classList.add("is-invalid");
      errorColor.textContent = "Please, Color required";
      errorAccount ++;
    }else{
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
  function plateValidation(plate:HTMLInputElement): boolean{
    var regex = /^(\d{4}[a-zA-Z]{3})$/;
    return regex.test(plate.value) ? true : false;
  }
 //show result of form's car and wheels 
  function showInfoCar():void{
    showCar.classList.remove('d-none');
    const elementList= (<HTMLElement>document.createElement('ul')); 
    //show firts car after full form validation
    //https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML#valor
    if(car.wheels.length < 1){
      showCar.innerHTML=
       `<div class="row col-10 border-white">
          <div class="card-header text-center border-white col-12">
            <h2 class="text-white">CAR's details</h2>
          </div>
          <div class="col-10 text-white"></div>
          <div class="card-body col-6">
            <h3 class="text-primary bg-white p-1">CAR:</h3>
            <ul class="text-white" style = "list-style:none;">
              <li>Plate: ${car.plate}</li>
              <li>Brand: ${car.brand}</li>
              <li>Color: ${car.color}</li>
            </ul>
          </div>
        </div>`;
    }else{
      showCar.innerHTML=       
        `<div class="col-10 border-white">
             <div class="card-header text-center border-white col-12">
               <h2 class="text-white">CAR's details</h2>
             </div>
         </div>
         <div class="row col-10">
             <div class="card-body col-6">
                 <h3 class="text-primary bg-white p-1">CAR:</h3>
                 <div class="text-white">
                     <span class="font-weight-bold text-white">Plate: </span>${car.plate} 
                 </div>
                 <div class="text-white">
                     <span class="font-weight-bold text-white">Brand: </span>${car.brand} 
                 </div>
                 <div class="text-white">
                     <span class="font-weight-bold text-white">Color: </span>${car.color} 
                 </div>
             </div> 
             <div class="card-body col-6">
                 <h3 class="text-primary bg-white p-2">WHEELS:</h3>
                 <div class="">
                     <div class="font-weight-bold text-white">Wheel 1:</div> 
                     <div class="text-white">
                         brand: ${car.wheels[0].brand} 
                         diameter: ${car.wheels[0].diameter}
                     </div>
                 </div>
                 <div class="">
                     <div class="font-weight-bold text-white">Wheel 2:</div>
                     <div class="text-white">
                         brand: ${car.wheels[1].brand}
                         diameter: ${car.wheels[1].diameter} 
                     </div>
                 </div>
                 <div class="">
                     <div class="font-weight-bold text-white">Wheel 3:</div>
                     <div class="text-white">
                         brand: ${car.wheels[2].brand}
                         diameter: ${car.wheels[2].diameter} 
                     </div>
                 </div>
                 <div class="">
                     <div class="font-weight-bold text-white">Wheel 4:</div>
                     <div class="text-white">
                         brand: ${car.wheels[3].brand}
                         diameter: ${car.wheels[3].diameter} 
                     </div>
                     
                 </div>
             </div>
         </div>`;
        showCar.appendChild(elementList);
      }
  }
  function addWheelsList(){
    if (wheelValidate()){
      for (let i = 1; i<=4; i++) {
          
          let brand:any = (<HTMLInputElement>document.getElementById("inputWheelBrand" + i)).value;
          let diameter:any = (<HTMLInputElement>document.getElementById("inputDiameter" + i)).value;
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
  function wheelValidate(){ 
    let errorAccount:number = 0;
    for(let j=1;  j<=4;  j++){
      let diameter:any = document.getElementById("inputDiameter" + j);
      let diameterValue:any = (<HTMLInputElement>document.getElementById("inputDiameter" + j)).value;
        
     //infoWheelsForm.classList.remove("is-invalid");
      if (diameterValue<0.4 || diameterValue>2){
        diameter.classList.add("is-invalid");
        errorAccount++;
      }else if(diameter.classList.contains('is-invalid')){
        diameter.classList.add("is-invalid");
        errorAccount++;
      }
    }  
    if (errorAccount > 0){
      return false;
    }else{
      return true;  
    }
  } 
   
  //EVENTS
  //const carFormList:HTMLInputElement = document.getElementById('createCarForm') as HTMLInputElement;
  if (infoCarForm){
    infoCarForm.addEventListener('blur', (event:any) => {
    event.preventDefault();
    
    if (event.target.value.trim != "") event.target.classList.remove('is-invalid');
    },  true); 
  }
 // const wheelsFormList:HTMLInputElement = document.getElementById('addWheelsForm') as HTMLInputElement;
  if (infoWheelsForm){
    infoWheelsForm.addEventListener('blur', (event:any) => {
    event.preventDefault();
    
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
 /* function openForm1(){
    document.getElementById("carFormId").style.display = "block";
   }
  function openForm2(){
     document.getElementById("wheelsFormId").style.display = "block";
  }*/
 
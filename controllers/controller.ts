"use strict";
let car:Car;//global variable
let carList = [];
    let plate:any = document.getElementById("inputPlate") as HTMLInputElement;
    let brand:any = document.getElementById("inputBrand") as HTMLInputElement;
    let color:any = document.getElementById("inputColor") as HTMLInputElement;  
    let j:number = 0;
    let diameter:any = document.getElementById("inputDiameter" + j);
    //car and wheels forms
    let infoCarForm:any      = document.getElementById("createCarForm") as HTMLFormElement;
    let infoWheelsForm:any   = document.getElementById("addWheelsForm") as HTMLFormElement;

    let btnCreateCar:any     = document.querySelector("btnCreateCar") as HTMLButtonElement;
    let btnCreateWheel:any   = document.querySelector("wheelsButton") as HTMLButtonElement;

    //elements to show cars
    let showOnlyCar:HTMLElement = document.getElementById("showOnlyCar") as HTMLElement;
    
    let showCarWhithWheels:HTMLDivElement = document.getElementById("showCarWhithWheels") as HTMLInputElement;
      
  //FUNCTIONS
  function createCar():void{
    let validateCar:boolean = carValidate(plate, brand, color);
    
    if(validateCar == true){
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
  function carValidate(plate:HTMLInputElement, brand:HTMLInputElement, color:HTMLInputElement){
    let errorPlate:HTMLElement = <HTMLElement>document.getElementById('errorPlate');
    let errorBrand: HTMLElement = document.getElementById("errorBrand") as HTMLElement;
    let errorColor: HTMLElement = document.getElementById("errorColor") as HTMLElement;
    let errorAccount:number = 0;

    infoCarForm.classList.remove("is-invalid");
    if (plate.value == ""){
      plate.classList.add("is-invalid");
      errorPlate.textContent = "Please, License plate number required";
      errorAccount ++;
    } else if (!plateValidation(plate)){
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
  //validation plate number formgdgfdgfgf
  function plateValidation(plate:HTMLInputElement): boolean{
    var regex = /^(\d{4}[a-zA-Z]{3})$/;
    return regex.test(plate.value) ? true : false;
  }
 //show result of form's car and wheels 
  function showInfoCar():void{
    //show firts car after full form validation
    //https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML#valor
    if(car.wheels.length < 1){
      showOnlyCar.classList.remove('d-none');
      //print a car
      let showPlate: any = (document.getElementById("showPlate") as HTMLSpanElement).innerHTML = ("Plate: " + plate.value);
      let showBrand: any = (document.getElementById("showBrand") as HTMLSpanElement).innerHTML = ("Brand: " + brand.value);
      let showColor: any = (document.getElementById("showColor") as HTMLSpanElement).innerHTML = ("Color: " + color.value);
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
    }else{
     // showOnlyCar.classList.add('d-none');
      showCarWhithWheels.classList.remove('d-none');
      let i:number;
     
      for(let i=0; i<4; i++)    {
        //let wheelNumber:number = 1;
        console.log(car.wheels[i]);
        //Create a new element to show information
        let node:HTMLHeadingElement = document.createElement("h6");
        let textNode:Text = document.createTextNode("Wheel " + [i+1]);
        node.appendChild(textNode);
        showCarWhithWheels.appendChild(node);
        let showWheels:Text = document.createTextNode(`Brand: ${car.wheels[i].brand} Diameter: ${car.wheels[i].diameter.toString()}`);
        showCarWhithWheels.appendChild(showWheels);
        //wheelNumber++;
        showWheels;
      }
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
 
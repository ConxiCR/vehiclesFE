VEHICLES 

 we want to make a software for a vehicle workshop

 // 1. DEFINE WHAT WE WANT??
  // Ask the user for information on registration (plate number,brand,color), through a form and display the result
  //Proces:
  //form car
  // - User fill out form
  // - Form marks erros as (plate number, brand, color is required) && plate number format error. The correct one is 0000XXX
  // - After creating the car, the system has to give us the option to add 4 wheels 

  //form wheels
  // - Form marks erros as (wheel, diameter is required) && Invalid diameter. The correct is > 0.4 and < 2 cm
  // - validate the four wheels

  // We need a website with two buttons for each form. One to send the form and the other to close it.
  // We need inputs for all elements of the form
  // Display the list of results

  // - validate the forms using the class "is-invalid" from Boostrap

  // - modifies the program to store more than one vehicle

  
  // 2. TASK
  // - FILL HTML(commit/git)
  // - BASE MOUNT typescript/javascript
  // - FILL FUNCTIONS
  
  
  //VARIABLES
  //what HTHML elements I'm going to interact with
  //Button
  //Input
  //List of items to add -> ul

Per compilar el projecte abans d’executar tsc -w, a la carpeta on està el fitxer tsconfig.json 

##nivell 1## 
1) Ens donen un codi parcialment desenvolupat. És capaç de crear un cotxe i mostrar la informació a pantalla. Únicament caldrà modificar el fitxer index.html i el controller.ts

Modifica el projecte anterior perquè li demani a l’usuari la informació del cotxe (matrícula, la marca i el seu color) a través d’un formulari i mostri en pantalla el resultat d’una forma més elegant.

Pista: Es recomana crear una variable car global, fora de les funcions (i si pot ser a la línia 1 del nostre controller.ts) com per exemple let car: Car; per tal que sigui accessible des de qualsevol funció.
		
2) Un cop afegit el cotxe, ocultarem el fomulari i mostrarem un per afegir les quatre rodes al cotxe.
3) Millorar el codi anterior revisant que la matrícula té 4 números i 3 lletres. Cada roda té un diàmetre entre 0.4 i 2. No es podrà afegir cap roda al coche si prèviament no han estat validades les 4 rodes.

##nivell 2## 
Valida els formularis utilitzant la classe 'is-invalid' de bootstrap.
		

##nivell 3## (fitxer ex3.html)
Modifica el programa per poder emmagatzemar més d'un vehicle (pista: utilitza un array de Car) 
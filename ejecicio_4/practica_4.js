let miNombre = "Jonathan";
let miApellido = "Briceño";

let estudiante = `  El estudiante es: ${miNombre} ${miApellido}     `;
console.log(estudiante);

//letras mayusculas
const estudianteMayus = estudiante.toUpperCase(); 
console.log(estudianteMayus);

//letras minusculas
const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);


//numeros de letras de la variable estudiante
console.log("Estudiante tiene " + estudiante.length + " caracteres");


//primera letra de variable nombre
console.log("La primera letra de miNombre es: " + miNombre[0]);


//ultima letra de variable apellido
const ultimaLetra = miApellido
console.log("La ultima letra de miApellido es: " + miApellido[6]);


//eliminando los espacios en la variable estudiante
const eliminaEspacios = estudiante.trim();
console.log(eliminaEspacios);


//verificando si nombre esta dentro de la varibale estuadiante
const nombreBoolean = estudiante.includes("Jonathan");
console.log(nombreBoolean);









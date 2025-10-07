// Ejercicios de estructuras de control, bucles, funciones y forEach y map

// ==============================
// EJERCICIOS JAVASCRIPT OCTUBRE
// ==============================

// ------------------------------
// CONDICIONALES
// ------------------------------
/*
console.log("Ejercicio 1: if simple");
// Escribe una función llamada 'esAdultoMayor' que reciba una edad y devuelva true si es mayor de 65, false en caso contrario.
// Datos de prueba:

function esAdultoMayor(edad){

  if (edad > 65){
    return true;
  }

  return false
}

console.log(esAdultoMayor(70)); // Debería mostrar: true
console.log(esAdultoMayor(50)); // Debería mostrar: false


console.log("\nEjercicio 2: if-else");
// Escribe una función llamada 'verificarTemperatura' que reciba una temperatura (°C) y devuelva 'Hace calor' si es ≥30, 'Hace frío' si es <30.
// Datos de prueba:
console.log(verificarTemperatura(32)); // Debería mostrar: 'Hace calor'
console.log(verificarTemperatura(20)); // Debería mostrar: 'Hace frío'


function verificarTemperatura(temp){
  if (temp >= 30){
    console.log("Hace calor");
  }else if (temp < 30){
    console.log("Hace frio")
  }
}


console.log("\nEjercicio 3: if-else if");
// Escribe una función llamada 'clasificarEdad' que reciba una edad y devuelva:
// 'Niño' si ≤12, 'Adolescente' si 13-17, 'Adulto' si 18-64, 'Adulto mayor' si ≥65

function clasificarEdad(edad){
  if (edad <= 12){return 'Niño'}
  else if (edad > 12 && edad <= 17) {return 'Adolescente'}
  else if (edad > 17 && edad <= 64) {return'Adulto'}
  else if (edad > 64 && edad <= 110) {return 'Adulto mayor'}
  else {return 'Demasiado mayor para ser cierto'}
}
// Datos de prueba:
console.log(clasificarEdad(10)); // Debería mostrar: 'Niño'
console.log(clasificarEdad(15)); // Debería mostrar: 'Adolescente'
console.log(clasificarEdad(30)); // Debería mostrar: 'Adulto'
console.log(clasificarEdad(70)); // Debería mostrar: 'Adulto mayor'
console.log(clasificarEdad(170));



console.log("\nEjercicio 4: switch");
// Escribe una función llamada 'obtenerColor' que reciba un número del 1 al 3 y devuelva: 1 → 'Rojo', 2 → 'Verde', 3 → 'Azul', otro → 'Color desconocido'
// Datos de prueba:
function obtenerColor(color){
  switch(color){

    case 1:
      return 'Rojo'
    break;
    case 2:
      return 'Verde'
    break;
    case 3:
      return 'Azul'
    return;
    default:
      return 'Color desconocido'
}
}


console.log(obtenerColor(1)); // Debería mostrar: 'Rojo'
console.log(obtenerColor(3)); // Debería mostrar: 'Azul'
console.log(obtenerColor(5)); // Debería mostrar: 'Color desconocido'



console.log("\nEjercicio 5: Condicional ternario");
// Escribe una función llamada 'esPositivo' que reciba un número y devuelva 'Positivo' si ≥0, 'Negativo' si <0

function esPositivo(Positivo){
  return Positivo < 0 ? 'Negativo' : 'Positivo'
}

// Datos de prueba:
console.log(esPositivo(5));  // Debería mostrar: 'Positivo'
console.log(esPositivo(-3)); // Debería mostrar: 'Negativo'



console.log("\nEjercicio 6: Combinación de condicionales");
// Escribe una función llamada 'puedeVotar' que reciba edad y nacionalidad ('sí' o 'no') y devuelva true si edad ≥18 y nacionalidad 'sí', false en caso contrario

function puedeVotar(edad, nac){

  if (edad >=18){

    return nac == 'sí' ? 'true' : 'false'
  }

  return false
}

// Datos de prueba:
console.log(puedeVotar(20, 'sí'));  // Debería mostrar: true
console.log(puedeVotar(16, 'sí'));  // Debería mostrar: false
console.log(puedeVotar(25, 'no'));  // Debería mostrar: false




// ------------------------------
// BUCLES
// ------------------------------

console.log("\nEjercicio 7: Bucle for");
// Escribe una función llamada 'imprimirPares' que imprima los números pares del 2 al 20
function imprimirPares() {
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
}
// Datos de prueba:
imprimirPares();
// Debería imprimir: 2 4 6 8 10 12 14 16 18 20

console.log("\nEjercicio 8: Bucle for (suma)");
// Escribe una función llamada 'sumarPares' que sume todos los números pares hasta n

function sumarPares(n) {
  let suma = 0;
  for (let i = 2; i <= n; i += 2) {
    suma += i;
  }
  return suma;
}
// Datos de prueba:
console.log(sumarPares(10)); // Debería mostrar: 30

console.log("\nEjercicio 9: Bucle while");
// Escribe una función llamada 'contarImpares' que cuente de 1 hasta n solo los números impares
function contarImpares(n) {
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i++;
  }
}
// Datos de prueba:
contarImpares(10);
// Debería imprimir: 1 3 5 7 9

console.log("\nEjercicio 10: Bucle do-while");
// Escribe una función llamada 'pedirContraseña' que simule pedir contraseña hasta que sea 'admin' usando un array de intentos
function pedirContraseña(intentos) {
  let i = 0;
  let contraseña = '';
  do {
    contraseña = intentos[i];
    console.log(`Intento ${i + 1}: ${contraseña}`);
    i++;
  } while (contraseña !== 'admin' && i < intentos.length);
  if (contraseña === 'admin') {
    console.log('¡Contraseña correcta!');
  } else {
    console.log('No se encontró la contraseña correcta.');
  }
}
// Datos de prueba:
const intentos = ['1234', 'qwerty', 'admin'];
pedirContraseña(intentos);
// Ejemplo de salida:
// Intento 1: 1234
// Intento 2: qwerty
// Intento 3: admin
// ¡Contraseña correcta!

console.log("\nEjercicio 11: Bucle for (array)");
// Escribe una función llamada 'multiplicarArray' que reciba un array de números y devuelva el producto de todos ellos
function multiplicarArray(arr) {
  let producto = 1;
  for (let i = 0; i < arr.length; i++) {
    producto *= arr[i];
  }
  return producto;
}

// Datos de prueba:
console.log(multiplicarArray([1, 2, 3, 4])); // Debería mostrar: 24

console.log("\nEjercicio 12: Bucle while (factorial)");
// Escribe una función llamada 'factorial' que reciba un número n y devuelva su factorial usando while
function factorial(n) {
  let resultado = 1;
  let i = 1;
  while (i <= n) {
    resultado *= i;
    i++;
  }
  return resultado;
}

// forEach y map
// ------------------------------

console.log("\nEjercicio 13: forEach básico");
// Utiliza forEach para imprimir cada número del array 'numeros' al cuadrado
// Datos de prueba:
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(n => console.log(n*n));
// Debería imprimir: 1 4 9 16 25

console.log("\nEjercicio 14: forEach con índice");
// Utiliza forEach para imprimir cada nombre del array 'nombres' con su índice
// Datos de prueba:
const nombres = ['Ana', 'Juan', 'María'];
nombres.forEach((nombre,i) => console.log(`Nombre en índice ${i}: ${nombre}`));
// Debería imprimir:
// Nombre en índice 0: Ana
// Nombre en índice 1: Juan
// Nombre en índice 2: María

console.log("\nEjercicio 15: forEach con objetos");
// Utiliza forEach para imprimir el nombre y salario de cada empleado en el array 'empleados'
// Datos de prueba:
const empleados = [
  { nombre: 'Luis', salario: 1200 },
  { nombre: 'Eva', salario: 1500 },
];
empleados.forEach(e => console.log(`${e.nombre} gana ${e.salario} euros`));
// Debería imprimir:
// Luis gana 1200 euros
// Eva gana 1500 euros

console.log("\nEjercicio 16: map básico");
// Utiliza map para crear un nuevo array con el cubo de cada número del array 'numeros'
// Datos de prueba:
console.log(cubos);
// Debería mostrar: [1, 8, 27, 64, 125]

console.log("\nEjercicio 17: map con strings");
// Utiliza map para crear un nuevo array con las palabras en mayúsculas
// Datos de prueba:
console.log(mayus);
// Debería mostrar: ['HOLA', 'MUNDO', 'JS']

console.log("\nEjercicio 18: map con objetos");
// Utiliza map para crear un array con los salarios de los empleados
// Datos de prueba:
console.log(edades);
// Debería mostrar: [1200, 1500]

console.log("\nEjercicio 19: Combinación map + forEach");
// Primero usa map para obtener salarios y luego forEach para sumarlos

const personas = [
  { nombre: 'Ana', salario: 1200 },
  { nombre: 'Luis', salario: 1500 }
];
const salarios = personas.map(persona => persona.salario);
console.log('Las edades son:', salarios);
let suma = 0;
salarios.forEach(salario => {
  suma += salario;
});
console.log('La suma de todas las edades es:', suma);

// ------------------------------
// FUNCIONES
// ------------------------------

console.log("\nEjercicio 20: Tipos de funciones");
// Crear función declarativa 'restar' y expresión 'modulo'
// Función declarativa
function restar(a, b) {
  return a - b;
}

// Función de expresión
const modulo = function(a, b) {
  return a % b;
};

// Datos de prueba:
console.log(restar(10,3)); // Debería mostrar: 7
console.log(modulo(10,3)); // Debería mostrar: 1

console.log("\nEjercicio 21: Métodos");
// Crear objeto 'banco' con métodos depositar, retirar y consultarSaldo
const banco = {
  saldo: 1000,
  depositar: function(cantidad) {
    this.saldo += cantidad;
    return this.saldo;
  },
  retirar: function(cantidad) {
    this.saldo -= cantidad;
    return this.saldo;
  },
  consultarSaldo: function() {
    return this.saldo;
  }
};
// Datos de prueba:
console.log(banco.depositar(500)); // Debería mostrar: 1500
console.log(banco.retirar(200));   // Debería mostrar: 1300
console.log(banco.consultarSaldo());// Debería mostrar: 1300

console.log("\nEjercicio 22: Parámetros por defecto");
// Crear función 'multiplicarPor' con factor por defecto = 2
function multiplicarPor(numero, factor = 2) {
  return numero * factor;
}
// Datos de prueba:
console.log(multiplicarPor(5));    // Debería mostrar: 10
console.log(multiplicarPor(5,3));  // Debería mostrar: 15

console.log("\nEjercicio 23: Funciones que retornan valores");
// Crear función 'esMultiploDe5'
function esMultiploDe5(numero) {
  return numero % 5 === 0;
}
// Datos de prueba:
console.log(esMultiploDe5(10)); // Debería mostrar: true
console.log(esMultiploDe5(7));  // Debería mostrar: false

console.log("\nEjercicio 24: Arrow functions");
// Convertir función tradicional en arrow function 'sumarDos'
const sumarDos = (a, b) => a + b;
// Datos de prueba:
console.log(sumarDos(5)); // Debería mostrar: 7

console.log("\nEjercicio 25: Funciones como argumentos");
// Crear función 'aplicarOperacionAvanzada' que reciba dos números y una función
// Datos de prueba:
console.log(aplicarOperacionAvanzada(3,4,multiplicar)); // Debería mostrar: 12

console.log("\nEjercicio 26: Closure simple");
// Crear función 'generadorDeID' que devuelva IDs incrementales
// Datos de prueba:
console.log(nuevoID()); // Debería mostrar: 1
console.log(nuevoID()); // Debería mostrar: 2
console.log(nuevoID()); // Debería mostrar: 3

console.log("\nEjercicio 27: Closure con configuración");
// Crear función 'contadorInicial' que empiece desde un número inicial
// Datos de prueba:
console.log(contarDesde5()); // Debería mostrar: 6
console.log(contarDesde5()); // Debería mostrar: 7

// ------------------------------
// EJERCICIOS COMBINADOS
// ------------------------------

console.log("\nEjercicio 28: Condicional + bucle");
// Crear función 'imprimirMultiplos' que reciba n y límite e imprima múltiplos de n
// Datos de prueba:
imprimirMultiplos(3,15);
// Debería imprimir: 3 6 9 12 15

console.log("\nEjercicio 29: Array + condicional");
// Crear función 'filtrarPares' que devuelva solo los números pares de un array
// Datos de prueba:
console.log(filtrarPares([1,2,3,4,5,6])); // Debería mostrar: [2,4,6]

console.log("\nEjercicio 30: Objeto + map + función");
// Crear función 'promediarEdades' que devuelva el promedio de edades de un array de personas
// Datos de prueba:
console.log(promediarEdades(grupo)); // Debería mostrar: 28.333333333333332
*/
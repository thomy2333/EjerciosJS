// 1 Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function esPar (numero) {
    if (numero % 2 === 0) {
      console.log("El número " + numero + " es par.");
    } else {
      console.log("El número " + numero + " es impar.");
    }
}
  
let numero = 17;
esPar(numero);

// 2  Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function comparar(numero1, numero2) {
    if (numero1 > numero2) {
      console.log(numero1 + " es mayor que " + numero2);
    } else if (numero2 > numero1) {
      console.log(numero2 + " es mayor que " + numero1);
    } else {
      console.log("Los números son iguales");
    }
}

comparar(5, 8);
comparar(12, 7);
comparar(3, 3);
  
// 3 Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function esMultiplo(numero) {
    if (numero % 5 === 0) {
      console.log(numero + " es múltiplo de 5.");
    } else {
      console.log(numero + " no es múltiplo de 5.");
    }
}
  
esMultiplo(15);
esMultiplo(7);
  
// 4 Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function contador(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
}
  
contador(5);

// 5 Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
}

imprimirPalabra("JavaScript", 5);
  
// 6 Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
}
  
let array = [1, 2, 3, 4, 5];
imprimirArray(array);
  
// 7  Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo

function imprimirArrayDos(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
}
  
// Ejemplo de uso
let arrayDos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArrayDos(arrayDos);

// 8 Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function imprimirArrayMulti(array, numero) {
    for (let i = 0; i < array.length; i++) {
      let resultado = array[i] * numero;
      console.log(resultado);
    }
}
  
let arrayTres = [1, 2, 3, 4, 5];
let multiplicador = 2;
imprimirArrayMulti(arrayTres, multiplicador);
  
  
// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
<<<<<<< HEAD
const nuevaString = "Estiven Mayhuay";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 8;
=======
const nuevaString = 'cualquiera';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
<<<<<<< HEAD
const nuevaMultiplicacion = 10 * 4 === 40;
=======
const nuevaMultiplicacion = 10 * 4 === 40 ;
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

<<<<<<< HEAD
=======

>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
<<<<<<< HEAD
  return str;
=======
    return str;
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x + y;
=======
  return x+y;
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x - y;
=======
  return x-y;
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x * y;
=======
  return x*y;
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x / y;
}

function sonIguales(x, y){
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) {
  return true;
  } else {
    return false;
=======
  return x/y;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x===y) {
    return true;
}else{
  return false;
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (str1.length===str2.length)
  {
  return str1.length===str2.length;
  } else {
    return false;
  }
=======
  return str1.length===str2.length
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (num <90) {
    return true;
  }else{
=======
  if (num<90) {
    return true;
  } else {
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
    return false;
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (num>50) {
    return true;
  } else {
    return false;
  }
=======
return num>50;
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
if (num%2 === 0) {
  return true;
} else {
  return false;
=======
  if (num%2===0) {
    return true;
  }else{
    return false;
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
 if (num%2===1) {
 return true;
} else {
=======
  if(num%2===1) {
  return true;
}else{
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
  return false;
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
<<<<<<< HEAD
return Math.pow(num,2);
=======
  return Math.pow (num, 2);
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
<<<<<<< HEAD

=======
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
  return num*num*num;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
<<<<<<< HEAD
  return Math.pow(num, exponent);
=======
  return Math.pow(num, exponent)
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

<<<<<<< HEAD
function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
=======

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random(0,1);
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

<<<<<<< HEAD
  if (numero > 0) return "Es positivo";
  else if (numero < 0) return "Es negativo";
  else if (numero == 0) return false;
=======
  if (numero===0) {
    return false;
  }
  else if (numero>0) {
  return "Es positivo";
  }
  else {
    return "Es negativo";
  }
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
<<<<<<< HEAD
  return str+'!';
}

=======
return str+'!';
}






>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
<<<<<<< HEAD
var combinado=nombre + '' + apellido;
return combinado;
}

=======
 var combinado = nombre + '' + apellido;
return combinado
}


>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
<<<<<<< HEAD
  return `Hola ' + ${nombre} + '!`;
=======
  return 'Hola '+ nombre + '!';
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
<<<<<<< HEAD
  return alto * ancho;
}

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4;
}

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

  return (base * altura) / 2;
}

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.2
}

function esVocal(letra) {
=======
  return alto*ancho;
}

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
return lado*4
}
function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base*altura)/2
}



function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro*1.2;
}

function esVocal(letra){
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
<<<<<<< HEAD

  if (letra.length > 1) return "Dato incorrecto";

  if (letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u") return "Es vocal"
  else return "Dato incorrecto"
}

// No modificar nada debajo de esta línea
// --------------------------------

=======
  if(letra.length>1){
    return "Dato incorrecto"
  }
  if (letra === 'a' || letra === 'e' || letra === 'i'|| letra === 'o'|| letra === 'u')
    return "Es vocal"
  }
  return "Dato incorrecto"


// No modificar nada debajo de esta línea
// --------------------------------
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b
module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
<<<<<<< HEAD
}
=======
};
>>>>>>> 2f2184e5055919d5e959039977c3c2e96843dd5b

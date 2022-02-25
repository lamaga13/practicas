// TIPOS DE DATOS:
// STRING (CADENAS DE CARACTERES)
// CHAR (CARACTERES)
// INT O INTEGER (NUMEROS ENTEROS)
// FLOAT (NUMEROS DECIMALES)
// DOUBLE (NUMEROS DECIMALES DE DOBLE PRECISION)
// BOOL O BOOLEAN (BOOLEANOS, VERDADERO O FALSO)

var ejemploString = "Una cadena de texto.";
var ejemploChar = "A";
var ejemploInt = 24;
var ejemploFloat = 12.4;
var ejemploDouble = 242342342.42312423;
var ejemploBoolean = true;

function sumar(x, y) {
  var resultadoSuma = x + y;
  console.log(resultadoSuma);

  return resultadoSuma;
}

sumar(2, 6);

function resta(x, y) {
  var resultadoResta = x - y;
  console.log(resultadoResta);
  return resultadoResta;
}
resta(5, 3);

function multiplicar(x, y) {
  var resultadoMultiplicar = x * y;
  console.log(resultadoMultiplicar);
  return resultadoMultiplicar;
}
multiplicar(20, 10);

function dividir(x, y) {
  var resultadoDividir = x / y;
  console.log(resultadoDividir);
  return resultadoDividir;
}
dividir(30, 3);

function modulo(x, y) {
  var resultadoModulo = x % y;
  console.log(resultadoModulo);
  return resultadoModulo;
}
modulo(25, 5);

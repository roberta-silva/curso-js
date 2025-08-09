var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
//Precisão para até 15 digitos

//Operadores Aritméticos

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//Operadores Aritméticos (Strings)
var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
var divisao = "Comprei 10" / 2; // NaN (Not a Number)
//É possível verificar se uma variável é NaN ou não com a função isNaN()

var total = 10 + 5 + 10;
var divisao1 = 200 / 5;
var modul1 = 3872982391 % 3;

//Operadores Aritméticos Unários outros
var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

//exercicio
// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; //35
console.log(total);
// Crie duas expressões que retornem NaN
var testeNaN = "i10" / 20;
console.log(testeNaN);
// Somar a string '200' com o número 50 e retornar 250
var somaS = +"200" + 50;
console.log(somaS);
// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(++incremento);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

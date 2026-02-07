let idade = 28;
let gols = 1000;
let pi = 3.14; // ponto para decimal
let exp = 2e10; // 20000000000
//Precisão para até 15 digitos

//Operadores Aritméticos
let soma = 100 + 50; // 150
let subtracao = 100 - 50; // 50
let multiplicacao = 100 * 2; // 200
let divisao = 100 / 2; // 50
let expoente = 2 ** 4; // 16
let modulo = 14 % 5; // 4

//Operadores Aritméticos (Strings)
let somaString = "100" + 50; // 10050
let subtracaoString = "100" - 50; // 50
let multiplicacaoString = "100" * "2"; // 200
let divisaoString = "Comprei 10" / 2; // NaN (Not a Number)
//É possível verificar se uma variável é NaN ou não com a função isNaN()

let total = 10 + 5 + 10;
let divisao2 = 200 / 5;
let modul1 = 3872982391 % 3;

//Operadores Aritméticos Unários outros
let frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

let idade1 = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

let possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

//exercicio
// Qual o resultado da seguinte expressão?
let total1 = 10 + (5 * 2) / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
let testeNaN = "i10" / 20;
console.log(testeNaN);

// Somar a string '200' com o número 50 e retornar 250
let somaS = +"200" + 50;
console.log(somaS);

// Incremente o número 5 e retorne o seu valor incrementado
let incremento = 5;
console.log(++incremento);

// Como dividir o peso por 2?
let numero = "80";
let unidade = "kg";
let peso = numero + unidade; // '80kg'
let pesoPorDois = peso / 2; // NaN (Not a Number)
let pesoPorDois1 = Number.parseInt(peso) / 2; //40

let idade = 28;
let pi = 3.14; //ponto para decimal
let exp = 2e10; //20000000000 (notação científica)
let negativo = -15;
//javascript tem precisão para até 15 digitos
console.log(typeof idade); // number

//Operadores Aritméticos
let soma = 100 + 50; // 150
let subtracao = 100 - 50; // 50
let multiplicacao = 100 * 2; // 200
let divisao = 100 / 2; // 50
let expoente = 2 ** 4; // 16
let modulo = 14 % 5; // 4 (resto da divisão)

//Operadores com strings
let somaString = "100" + 50; // 10050 - string
let subtracaoString = "100" - 50; // 50 - number
let multiplicacaoString = "100" * "2"; // 200 - number
let divisaoString = "100" / 2; // 50

// Se não conseguir converter = NaN - Not a Number
let divisaoInvalida = "Comprei 10" / 2; // NaN
console.log(isNaN(divisaoInvalida)); // true
//É possível verificar se uma variável é NaN ou não com a função isNaN()

//Operadores Aritméticos Unários outros
let frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

let idade1 = "28";
+idade1; // 28 (número)
-idade1; // -28 (número)
console.log(+idade1 + 5); // 33

let preco = "19.90";
console.log(+preco); // 19.9 (number)

let possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
console.log(+false); // 0

//incremento e decremento
let contador = 5;
// Incremento pós-fixado (retorna valor antigo, depois incrementa)
console.log(contador++); // 5
console.log(contador); // 6

// Incremento pré-fixado (incrementa primeiro, depois retorna)
let contador2 = 5;
console.log(++contador2); // 6
console.log(contador2); // 6

//decremento
let contador3 = 10;
console.log(contador3--); // 10
console.log(--contador3); // 8

//métodos
//conversão de strings para números
let numeroString = "80";
console.log(Number(numeroString)); // 80
console.log(parseInt(numeroString)); // 80 (inteiro)
console.log(parseFloat("3.14")); // 3.14 (decimal)

//parseInt ignora texto depois do número
let peso = "80kg";
console.log(parseInt(peso)); // 80
console.log(Number(peso)); // NaN

//arredondamento
console.log(Math.round(3.7)); // 4 arredonda
console.log(Math.floor(3.9)); // 3 arredonda pra baixo
console.log(Math.ceil(3.1)); // 4 arredonda pra cima

//casas decimais
let preco2 = 19.999;
console.log(preco2.toFixed(2)); // "20.00" - retorna string

//máximo e mínimo
console.log(Math.max(10, 5, 20, 8)); // 20
console.log(Math.min(10, 5, 20, 8)); // 5

//número aleatório
console.log(Math.random()); // entre 0 e 1

//exercicio
// Qual o resultado da seguinte expressão?
let total1 = 10 + (5 * 2) / 2 + 20; //35
console.log(total1);

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
// let peso = numero + unidade; // '80kg'
let pesoPorDois = peso / 2; // NaN (Not a Number)
let pesoPorDois1 = Number.parseInt(peso) / 2; //40

// Mostar na página
document.getElementById("resultados").textContent = `NUMBERS EM JAVASCRIPT:

Tipos de números:
  Inteiro: ${idade}
  Decimal: ${pi}
  Exponencial: ${exp}
  Negativo: ${negativo}

Operadores:
  100 + 50 = ${soma}
  100 - 50 = ${subtracao}
  100 * 2 = ${multiplicacao}
  100 / 2 = ${divisao}
  2 ** 4 = ${expoente}
  14 % 5 = ${modulo}

Coerção com strings:
  "100" + 50 = ${somaString}
  "100" - 50 = ${subtracaoString}
  "Comprei 10" / 2 = ${divisaoInvalida}

Conversão:
  +"28" = ${+idade1} (número)
  parseInt("80kg") = ${parseInt(peso)}`;

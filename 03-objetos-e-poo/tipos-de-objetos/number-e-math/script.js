//Number
const ano = 2025;
const preco1 = new Number(99);

//verifica se o valor que está siando é NaN - Not a Number
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

// verifica se o valor é um número inteiro - sem decimais
Number.isInteger(20); // true
Number.isInteger(23.6); // false
Number.isInteger("20"); // false  -string não é numero

//converte para numero decimal - retorna um número a partir de uma string
parseFloat("99.50"); // Mesma função sem o Number
Number.parseFloat("99.50"); // 99.5
Number.parseFloat("100 Reais"); // 100
Number.parseFloat("R$ 100"); // NaN

//converte para numero inteiro - corta valores deciamis
parseInt("99.50", 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt("100 Reais", 10); // 100

//arredonda o número com base no total de casas decimais do argumento
//n.toFixed(decimais)
const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // 1499

//transforma o numero em string
// n.toString(radix)
const preco4 = 2.99;
preco.toString(10); // '2.99'

//formata o número de acordo com a lingua e opcoes passadas
//n.toLocaleString(lang, options);
const preco5 = 59.49;
preco.toLocaleString("en-US", { style: "currency", currency: "USD" }); // $59.49
preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); // R$ 59,49

//Math ------------
//É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns
Math.PI; // 3.14159
Math.E; // 2.718
Math.LN10; // 2.303
//
Math.abs(-5.5); // 5.5 - abs() retorna o valor absoluto, ou seja, transforma negativo em positivo
Math.ceil(4.8334); // 5 - ceil() arredonda para cima, retornando sempre uma integral e
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4 - floor para baixo
Math.floor(4.3); // 4
Math.round(4.8334); // 5 - round() arredonda para o número integral mais próximo
Math.round(4.3); // 4

//max() retorna o maior número de uma lista de argumentos
Math.max(5, 3, 10, 42, 2); // 42

//min() o menor número
Math.min(5, 3, 10, 42, 2); // 2

//random() um número ALEATORIO entre 0 e 1
Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
// Math.floor(Math.random() * (max - min + 1)) + min;

const aleatorio = Math.floor(Math.random() * 10); // 0 a 10 - arredondando p/baixo
console.log(aleatorio);

// um numero aleatorio de 20 a 40
const aleatorio1 = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
console.log(aleatorio1);

//exercicios
// Retorne um número aleatório
// entre 1050 e 2000
const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(numeroAleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(", ");
console.log(arrayNumeros);
const max = Math.max(...arrayNumeros);
console.log(max);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((item) => {
  soma += limparPreco(item);
});
console.log(soma);
console.log(
  soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

limparPreco(listaPrecos[0]);

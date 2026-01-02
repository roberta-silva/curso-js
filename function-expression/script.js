//function declaration
function somar(a, b) {
  return a + b;
}
somar(2, 2); //4

//vs
//function expression = é criada a partir da declaração de uma variável
const dividir = function (a, b) {
  return a / b;
};
dividir(8, 2); //4

//hoisting = function declarations sao completamente definidas no momento do hoisting
//function expresion só é definida no momento da execução
//por isso a ordem da declaracao de uma function expression possui importancia
// testeFunctionExpression(); //erro Cannot access 'testeFunctionDeclaration' before initialization
testeFunctionDeclaration();

const testeFunctionExpression = function () {
  console.log("function expression");
};
function testeFunctionDeclaration() {
  console.log("function declaration");
}

//arrow function
const subtrair = (a, b) => a - b;
subtrair(5, 1); //4

//com apenas um parametro
const quadrado = (a) => a * a;
quadrado(2); //4

//IIFE - Immediately Invoked Function Expression
//Antes da introdução de modules e da implementação do escopo de bloco,
//a forma mais comum utilizada para isolarmos o escopo de um cód JS era através das IIFE's
//assim que declarada já é executada
const instrumento = "violão";

(function () {
  const instrumento = "guitarra";
  console.log(instrumento);
})();

console.log(instrumento);

// IIFE - arrow function
(() => {
  const instrumento = "guitarra";
  console.log(instrumento);
})();
//nem todos navegadores tem a funcionalidade de module ainda

//exercicios
// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function () {
  let nome = "Roberta";
})();

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(function () {
  console.log("teste active");
});

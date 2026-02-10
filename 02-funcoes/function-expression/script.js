// Existem diferentes formas de declarar funções em JavaScript
// Cada uma tem suas características e casos de uso

//function declaration
function somar(a, b) {
  return a + b;
}
somar(2, 2); //4
// Características:
// - Sofre HOISTING (pode ser chamada antes da declaração)
// - Sempre tem nome
// - Cria uma variável no escopo atual

//vs
//function expression 
//é criada a partir da declaração de uma variável
const dividir = function (a, b) {
  return a / b;
};
dividir(8, 2); //4

// Características:
// - NÃO sofre hoisting completo (só a variável é içada)
// - Pode ser anônima (sem nome)
// - É atribuída a uma variável
//por isso a ordem da declaracao de uma function expression possui importancia

// Function expression com nome (útil para recursão e debug)
const fatorial = function calcularFatorial(n) {
  if (n <= 1) return 1;
  return n * calcularFatorial(n - 1); // usa o próprio nome
};
console.log(fatorial(5)); // 120

// HOISTING - DIFERENÇA CRÍTICA
// testeFunctionExpression(); //erro Cannot access 'testeFunctionDeclaration' before initialization
testeFunctionDeclaration();

const testeFunctionExpression = function () {
  console.log("function expression");
};
function testeFunctionDeclaration() {
  console.log("function declaration");
}

//ARROW FUNCTION
// Sintaxe completa
const multiplicar = (a, b) => {
  return a * b;
};

// Return implícito (sem chaves)
const subtrair = (a, b) => a - b;
subtrair(5, 1); //4

//com apenas um parametro
const quadrado = (a) => a * a;
quadrado(2); //4

// Sem parâmetros
const saudar = () => "Olá!";
console.log(saudar()); // "Olá!"

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

// QUANDO USAR CADA UMA

//FUNCTION DECLARATION:
// - Precisar chamar antes da declaração
// - Função top-level no escopo global
// - Preferir hoisting

function inicializar() {
  console.log("App iniciado");
}

//FUNCTION EXPRESSION:
// - Atribuir função a variável/propriedade
// - Passar função como argumento
// - Criar função dentro de outra função

const handleClick = function (event) {
  console.log("Clicou");
};

// ARROW FUNCTION:
// - Funções curtas e simples
// - Callbacks
// - Não precisar de "this" próprio
// - Métodos de array (map, filter, etc)

const numeros = [1, 2, 3];
const dobrados = numeros.map((n) => n * 2);
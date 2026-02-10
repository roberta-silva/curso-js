//FOREACH E ARROW FUNCTIONS

// forEach é um método de arrays que executa uma função
// para cada item do array

// querySelectorAll retorna NodeList (tem forEach)
const imgs = document.querySelectorAll("img");
console.log(imgs); // NodeList [img, img, img]
console.log(imgs.constructor.name); // NodeList

// getElementsByClassName retorna HTMLCollection (NÃO tem forEach)
const titulos = document.getElementsByClassName("titulo");
console.log(titulos); // HTMLCollection [h1.titulo, h1.titulo]
console.log(titulos.constructor.name); // "HTMLCollection"

// Convertendo HTMLCollection para Array
const titulosArray = Array.from(titulos);
console.log(titulosArray); // Array [h1.titulo, h1.titulo]
console.log(titulosArray.constructor.name); // "Array"

// Agora pode usar forEach
titulosArray.forEach(function (item, index, array) {
  console.log(item); // elemento atual
  console.log(index); // posição (0, 1, 2...)
  console.log(array); // array completo
});

//FOREACH - SINTAXE COMPLETA
//parametros do foreach: item, index, array
imgs.forEach(function (item, index, array) {
  console.log("Item:", item); // elemento atual
  console.log("Índice:", index); // posição
  console.log("Array:", array); // lista completa
  console.log("---");
});

//pode usar qualquer nome para os parâmetros
imgs.forEach(function (elemento, posicao, lista) {
  console.log(elemento, posicao);
});

////////////////////////

//ARROW FUNCTIONS - SINTAXE
//função tradicional
imgs.forEach(function (item) {
  console.log(item);
});

//arrow function (ES6) - mais concisa
imgs.forEach((item) => {
  console.log(item);
});

//se tem apenas 1 parametro, pode omitir parenteses
imgs.forEach((item) => {
  console.log(item);
});

// se tem apenas 1 linha, pode omitir chaves
imgs.forEach((item) => console.log(item));

// Com multiplos parametros
imgs.forEach((item, index) => {
  console.log(`Imagem ${index}:`, item);
});

//ARROW FUNCTION - RETURN IMPLICITO
//com chaves, precisa de return
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(function (numero) {
  return numero * 2;
});

//sem chaves, return é implicito
const dobradosArrow = numeros.map((numero) => numero * 2);

console.log(dobrados); // [2, 4, 6, 8, 10]
console.log(dobradosArrow); // [2, 4, 6, 8, 10]

//DIFERENÇAS: FUNCTION x ARROW
// 1. arrow function não tem this próprio
const pessoa = {
  nome: "Maria",
  dizerOi: function () {
    console.log("Oi, " + this.nome); // Oi, Maria
  },
  dizerOiArrow: () => {
    console.log("Oi, " + this.nome); // Oi, undefined
    // Arrow não tem this próprio, pega do contexto externo
  },
};
pessoa.dizerOi(); // funciona
pessoa.dizerOiArrow(); // não funciona como esperado

// 2. arrow function não pode ser constructor
function Carro(marca) {
  this.marca = marca;
}
const CarroArrow = (marca) => {
  this.marca = marca;
};

const carro1 = new Carro("VW"); // funciona
// const carro2 = new CarroArrow("VW"); // ERRO!

//FOREACH - CASOS DE USO
//modificar propriedades dos elementos
const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((paragrafo) => {
  console.log(paragrafo.innerText); // texto de cada parágrafo
});

// adicionar classes
imgs.forEach((img) => {
  img.classList.add("ativa");
});

// adicionar event listeners
imgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    console.log(`Clicou na imagem ${index}`);
  });
});

// mdificar estilos
const botoes = document.querySelectorAll("button");
botoes.forEach((botao) => {
  botao.style.backgroundColor = "blue";
  botao.style.color = "white";
});

// contador externo
let contador = 0;
imgs.forEach(() => {
  console.log(contador);
  contador++;
});

// ou de forma mais simples com index
imgs.forEach((item, index) => {
  console.log(index); // 0, 1, 2, 3...
});

//ARROW FUNCTIONS - VARIAÇÕES DE SINTAXE
//sem parâmetros
const saudar = () => console.log("Olá!");
saudar(); // Olá!

//um parâmetro (parênteses opcional)
const dobrar = (num) => num * 2;
const dobrar2 = (num) => num * 2; // mesma coisa
dobrar(5); // 10

//multiplos parâmetros (parênteses obrigatório)
const somar = (a, b) => a + b;
somar(3, 7); // 10

//retornar objeto (precisa de parênteses)
const criarPessoa = (nome, idade) => ({ nome: nome, idade: idade });
criarPessoa("Ana", 25); // { nome: "Ana", idade: 25 }

//mltiplas linhas (precisa de chaves e return)
const calcular = (a, b) => {
  const soma = a + b;
  const multiplicacao = a * b;
  return { soma, multiplicacao };
};
calcular(3, 4); // { soma: 7, multiplicacao: 12 }

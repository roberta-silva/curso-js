//Destructuring
//permite desestruturaçao de arrays e objetos
const carro = {
  marca: "honda",
  ano: 2018,
};

// const marca = carro.marca;
// const ano = carro.ano;

const { marca, ano } = carro;

console.log(carro.marca);
console.log(marca, ano);
//
const cliente = {
  nome: "Andre",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

// const {livros, videos} = cliente.compras.digitais;

// console.log(livros);
// console.log(videos);

//nesting
//aninhar uma desestruturação dentro de outra
const {
  fisicas,
  digitais,
  digitais: { livros, videos },
} = cliente.compras;

//é necessário que o nome da variável seja o nome da propriedade
// é possível anterar:
const cliente1 = {
  nome: "Roberta",
  compras: 10,
  email: "roberta@email.com",
};
const { nome: nomeRoberta, email = "email@email.com" } = cliente1;

console.log(nomeRoberta, email);

//destructuring Arrays
//colocar as variáveis entre []
const frutas = ["uva", "maça", "pessego"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

const [primeira, segunda, terceira] = frutas;
console.log(primeira);
console.log(segunda);
console.log(terceira);

//declaração de variáveis
//A desestruturação pode servir para declararmos uma sequência de variáveis

// const primeiro = 'Item 1';
// const segundo = 'Item 2';
// const terceiro = 'Item 3';

// ou
const [primeiro, segundo, terceiro] = ["Item 1", "Item 2", "Item 3"];
console.log(primeiro, segundo, terceiro);

//argumento desestruturado
function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}
document.addEventListener("keyup", handleKeyboard);

//exercicio
// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

const { backgroundColor, color, margin } = btnStyles;
console.log(backgroundColor, color, margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo",
};

const { cor: bobCor } = cachorro;
console.log(bobCor);

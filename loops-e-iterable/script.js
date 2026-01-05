//Loops e Iterable

//Iterable
//São objetos que possuem o método [Symbol.iterator]
//geralmente no prototipo
//é dentro dele que a função que lida com a iteração será definida
//se sim - podemos usar for ... of

const cores = ["azul", "amarelo", "vermelho"];
const frase = "Cores primárias";

for (const cor of cores) {
  console.log(cor);
}

for (const char of frase) {
  console.log(char);
}
// fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
//   console.log(headers)
// );

//spread e for...of
const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
  btn.style.color = "blue";
}
console.log(buttons);
console.log(...buttons);

//for...in - objeto qualquer
//retorna a chave de todas as propriedades enumaraveis de um objeto - que não sejam simbolos
const carro = {
  marca: "honda",
  ano: 2018,
};
// for (const chave of carro) {
//   console.log(chave); }
//Uncaught TypeError: carro is not iterable

for (const key in carro) {
  console.log(key, carro[key]);
}
//marca honda
//ano 2018

for (const c in cores) {
  console.log(c, cores[c]);
}

const btnUnico = document.querySelector("button");
const btnStyles = getComputedStyle(btnUnico);

for (const style in btnStyles) {
  console.log(`${style} ${btnStyles[style]}`);
}

//para conhecimento
//do while
let i = 0;
do {
  console.log(i++);
} while (i <= 5);

//exercicio
// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const itens = document.querySelectorAll("li");
for (const item of itens) {
  item.classList.add("ativo");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (const windowKey in window) {
  console.log(windowKey + ': ' + window[windowKey]);
}

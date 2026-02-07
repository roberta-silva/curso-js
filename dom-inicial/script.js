// window.alert("alo");
const nome = prompt("qual seu nome?");
alert(`olá ${nome}`);

const h1Selected = document.querySelector("h1");
const h1Classes = h1Selected.classList;
console.log(h1Classes);

function callback() {
  console.log("Clicou em", h1Selected.innerText);
}
h1Selected.addEventListener("click", callback);

// Retorne o url da página atual utilizando o objeto window
const href = location.href;

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector(".ativo");

// Retorne a linguagem do navegador
const linguagem = navigator.language;

// Retorne a largura da janela
const largura = outerWidth;
window.outerWidth;

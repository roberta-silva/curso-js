const img = document.querySelector("img");

img.addEventListener("click", function () {
  console.log("clicou");
});

//boa prática: declarar a funcao - separar do addEventListener
//primeiro parametro é ref ao evento que ocorreu:
function callback(event) {
  console.log(event);
}
img.addEventListener("click", callback);

const animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  console.log(event.path);
}

animaisLista.addEventListener("click", callbackLista);

//previne o comportamento padrao do evento do browser
const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  //palavra chave 'this'
  console.log(this);
  console.log(event.currentTarget);
}

linkExterno.addEventListener("click", handleLinkExterno);

//mais eventos
const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", handleEvent);
h1.addEventListener("mouseenter", handleEvent); // ao passar o mouse por cima
// h1.addEventListener("mousemove", handleEvent); // ao mover o mouse por cima - cada micromovimento!

window.addEventListener("scroll", handleEvent); //scroll na página
window.addEventListener("resize", handleEvent);
window.addEventListener("keydown", handleEvent); //tecla clicada
// window.addEventListener("keyup", handleEvent);

//verificar qual tecla foi clicada com event.key
function handleKeyboard(event) {
  if (event.key === "a") {
    document.body.classList.toggle("azul");
  }
  // console.log(event.key);
}
window.addEventListener("keydown", handleKeyboard);

//em listas
const imgs = document.querySelectorAll("img");

function handleImg(event) {
  console.log(event.currentTarget.getAttribute("src"));
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linkInterno.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linkInterno.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll("body *");

function handleElement(event) {
  console.log(event.currentTarget);
  //event.currentTarget.remove();
}
allElements.forEach((element) => {
  element.addEventListener("click", handleElement);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);

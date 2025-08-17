const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
const animaisLeft = listaAnimais.offsetLeft;

console.log(height);
console.log(animaisTop);
console.log(animaisLeft);

const primeiroh2 = document.querySelector("h2");
const h2Left = primeiroh2.offsetLeft;
console.log(h2Left);

const rect = primeiroh2.getBoundingClientRect();
console.log(rect.height);
console.log(rect.top);

if (rect.top < 0) {
  console.log("passou do elemento");
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageXOffset,
  window.pageYOffset
);

const small = window.matchMedia("(max-width: 600px)");

if (small) {
  console.log("tela menor que 600px");
} else {
  console.log("tela maior que 600px");
}

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");
const img1Top = primeiraImagem.offsetTop;
console.log(img1Top);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgs = document.querySelectorAll("img");
  let soma = 0;
  imgs.forEach((img) => {
    soma += img.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui acessibildade");
  } else {
    console.log(link, "Não possui acessibildade");
  }
});
console.log(links);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const smallBrowser = window.matchMedia("(max-width:720px)").matches;

if (smallBrowser) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}

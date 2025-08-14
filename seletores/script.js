const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[0]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

// [href^="#"] --> href que começa com #
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[1]);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

//console.log(gridSectionHTML[0])
//console.log(gridSectionNode[0])

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});

console.log(document.querySelectorAll("img"));

console.log(document.querySelectorAll('img[src^="./img/imagem"]'));

const pH2 = document.querySelector(".animais-descricao h2");
console.log(pH2);

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
console.log(paragrafos[--paragrafos.length]);

//HTMLElement
//Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement

const h1 = document.querySelector("h1");
Object.prototype.toString.call(h1); // [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

//Dataset
//dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-
console.log(h1.dataset); // DOMStringMap {}

const div = document.querySelector("div");
console.log(div.dataset);
console.log(div.dataset.cor);

//dataset acessa atributas data- de um elemento
//guarda informações personalizadas no HTML
//dataset permite ler e escrever atributos data-* do HTML usando JavaScript

const divAtributo = document.querySelector("[data-cor]"); //seleciona pelo atributo
const divAtributoValor = document.querySelector('[data-cor="azul"]'); //seleciona o atributo com o valor "azul"

div.dataset.height = 1000; //adiciona nova propriedade
div.dataset.nova = "valorNovo";
console.log(div.dataset);

delete div.dataset.width; //deleta a propriedade
console.log(div.dataset);

//Data Atributes
//Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS
const divs = document.querySelectorAll("[data-anima]");
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});
// adiciona em cada div uma classe com o mesmo nome que o valor de data

//Data vs Class
//A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada

//Nomeclatura
//Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula

//Exercicios
console.log("--------exercicios----------");
// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.



// descricao.dataset.anime = "show-down";

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

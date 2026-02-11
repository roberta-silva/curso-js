const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");

//innerHTML = dentro
h1.innerHTML = "<p>Novo título</p>";

//outerHTML = tudo

// innerText = só texto
console.log(animaisLista.innerText);

//transversing
const lista = document.querySelector(".animais-lista");
console.log(lista.parentElement.parentElement.parentElement);
console.log(lista.nextElementSibling); // proximo elemento no mesmo nível
console.log(lista.previousElementSibling); // elemento anterior

console.log(lista.children[0]); //HTML collection - acessa itens como array
console.log(lista.children[lista.children.length - 1]); //ultimo item
console.log(lista.children[--lista.children.length]); //mesma coisa

lista.querySelectorAll("li"); // todas as lis
lista.querySelector("li:last-child"); //ultimo filho

console.log(lista.childNodes); //filhos node
console.log(lista.previousSibling); // node acima

lista.firstChild; //primeiro node childe

//mover
const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

animais.appendChild(titulo);

//onde quer inserir -  o que quer mover, elemento que quero antes
contato.insertBefore(animais, mapa);

//remover o filho
// contato.removeChild();

//modificar/substituir
// contato.replaceChild(lista, titulo); //substitui o titulo pela lista

//novos elementos
const novoh1 = document.createElement("h1");
novoh1.innerText = "novo h1111";
novoh1.classList.add("titulo");

mapa.appendChild(novoh1);

//clonar elemento
const cloneTitulo = titulo.cloneNode(true); // true clona os filhos também

// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);
// Selecione o primeiro DT da dl de Faq
const dt = document.querySelector(".faq dl dt");
console.log(dt);
// Selecione o DD referente ao primeiro DT
const dd = dt.nextElementSibling;
console.log(dd);
// Substitua o conteúdo html de .faq pelo de .animais
const animaisCont = document.querySelector(".animais");

faq.innerHTML = animaisCont.innerHTML;

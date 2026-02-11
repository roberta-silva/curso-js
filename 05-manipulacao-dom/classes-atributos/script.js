const menu = document.querySelector(".menu");
menu.classList.add("ativo", "teste");
menu.classList.remove("azul");
menu.classList.toggle("azul");

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

console.log(menu.classList);

//attributes
const animais = document.querySelector(".animais");
console.log(animais.attributes);

const img = document.querySelector("img");

const srcImg = img.getAttribute("alt");

img.setAttribute("alt", "É uma raposa");

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);
console.log(srcImg);

const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});

itensMenu[0].classList.add("ativo");

const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  console.log(img.hasAttribute("alt"));
});

const link = document.querySelector("a[href^=http]");
link.setAttribute("href", "https://github.com/roberta-silva");

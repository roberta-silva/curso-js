var nome = "roberta";

console.log(nome.length);
console.log(nome.charAt(0));
console.log(nome.charAt(1));
console.log(nome.replace("ta", "to"));

var nomeMinusculo = nome.toLocaleLowerCase();
var nomeMaiusculo = nome.toLocaleUpperCase();
console.log(nomeMinusculo, nomeMaiusculo);

//numeros
var altura = 1.6;
console.log(altura.toString());
console.log(altura.toFixed()); //zero casas decimasi, então arredonda

//funcoes
console.log(addEventListener.length); // 2 parametros

//elementos do DOM
var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("clicou");
});
btn.innerText;
btn.classList.add("azul");

//exercicio
// nomeie 3 propriedades ou métodos de strings
var nome = "Roberta";
nome.length;
nome.charAt;
nome.match;

// nomeie 5 propriedades ou métodos de elementos do DOM
btn.addEventListener;
btn.appendChild;
btn.id;
btn.innerHTML;
btn.outerHTML;

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
//navigator.clipboard
function copiarTexto(texto) {
  navigator.clipboard.writeText(texto);
}
document.querySelector("button").addEventListener("click", () => {
  copiarTexto("texto copiado");
});

// Toda variável em JavaScript é um objeto (exceto null e undefined)
// Objetos possuem propriedades (valores) e métodos (funções)var nome = "roberta";

//DIFERENÇA: PROPRIEDADE x METODO
var texto = "JavaScript";

//PROPRIEDADE - sem parênteses (acessa valor)
console.log(texto.length); //10

//METODO - com parênteses (executa ação)
console.log(texto.toUpperCase()); //JAVASCRIPT

//Erro comum: esquecer os parênteses
console.log(texto.toUpperCase); // retorna a função - não executa

//--------------------------------------------------------
//STRINGS - PROPRIEDADES E METODOS

var nome = "Roberta";

//PROPRIEDADE - acessa um valor
console.log(nome.length);

//METODOS - executam uma ação (sempre com parênteses)
console.log(nome.charAt(0)); // R (caractere na posição 0)
console.log(nome.charAt(1)); // o (caractere na posição 1)
console.log(nome[0]); // R (forma alternativa)

//transformações
var nomeMinusculo = nome.toLocaleLowerCase();
var nomeMaiusculo = nome.toLocaleUpperCase();
console.log(nomeMinusculo, nomeMaiusculo);

//substituição - não altera o original
console.log(nome.replace("ta", "to")); // Roberto
console.log(nome); // roberta - (original não mudou)

//outros metodos uteis
console.log(nome.trim()); // remove espaços das pontas
console.log(nome.slice(0, 3)); // rob (extrai parte)
console.log(nome.includes("ber")); // true (contém?)
console.log(nome.indexOf("ta")); // 5 (posição de 'ta')
console.log(nome.split("")); // ["R","o","b","e","r","t","a"] (vira array)

var frase = "Olá, tudo bem?";
console.log(frase.split(" ")); // ["Olá,", "tudo", "bem?"]
console.log(frase.startsWith("Olá")); // true - começa com
console.log(frase.endsWith("?")); // true - termina com

//NUMBERS - PROPRIEDADES E MÉTODOS
var altura = 1.6;
var preco = 19.999;

//convertendo para string
console.log(altura.toString()); // "1.6"
console.log(typeof altura.toString()); // string
console.log(altura.toFixed()); //zero casas decimasi, então arredonda

//arredondamento
console.log(altura.toFixed()); // 2 - 0 casas decimais, arredonda
console.log(altura.toFixed(1)); // 1.6 - 1 casa decimal
console.log(altura.toFixed(2)); // 1.60 - 2 casas decimais
console.log(preco.toFixed(2)); // 20.00

//mtodos do objeto Math
console.log(Math.round(1.6)); // 2 - arredonda
console.log(Math.floor(1.9)); // 1 - arredonda pra baixo
console.log(Math.ceil(1.1)); // 2 - arredonda pra cima
console.log(Math.random()); // número aleatório entre 0 e 1
console.log(Math.max(10, 5, 20)); // 20 - maior número
console.log(Math.min(10, 5, 20)); // 5 - menor número

//ARRAYS - PROPRIEDADES E MÉTODOS
var frutas = ["maçã", "banana", "laranja"];

//propriedade
console.log(frutas.length); // 3 - quantidade de itens

//mtodos
frutas.push("uva"); // adiciona no final
console.log(frutas); // ["maçã", "banana", "laranja", "uva"]

frutas.pop(); // remove do final
console.log(frutas); // ["maçã", "banana", "laranja"]

frutas.unshift("morango"); // adiciona no início
console.log(frutas); // ["morango", "maçã", "banana", "laranja"]

console.log(frutas.includes("banana")); // true
console.log(frutas.indexOf("banana")); // 2 (posição)
console.log(frutas.join(", ")); // "morango, maçã, banana, laranja"

//FUNCOES - PROPRIEDADES
function somar(a, b) {
  return a + b;
}

console.log(somar.length); // 2 - quantidade de parâmetros
console.log(somar.name); // somar - nome da função

console.log(addEventListener.length); // 2 - parâmetros esperados

//ELEMENTOS DO DOM - PROPRIEDADES E MÉTODOS
var btn = document.querySelector(".btn");

//METODOS - açõEes
btn.addEventListener("click", function () {
  console.log("clicou");
});
btn.classList.add("azul"); // adiciona classe
btn.classList.remove("ativo"); // remove classe
btn.classList.toggle("ativo"); // adiciona/remove alternadamente
btn.setAttribute("disabled", "true"); // adiciona atributo
btn.removeAttribute("disabled"); // remove atributo

//PROPRIEDADES - valores
btn.innerText;
console.log(btn.innerText); // texto dentro do elemento
console.log(btn.innerHTML); // HTML dentro do elemento
console.log(btn.id); // id do elemento
console.log(btn.className); // classes do elemento

//modificando propriedades
btn.innerText = "Clique aqui";
btn.id = "meu-botao";
btn.style.backgroundColor = "blue";
btn.style.color = "white";

//OBJETOS NATIVOS DO NAVEGADOR
// Window (janela do navegador)
console.log(window.innerWidth); // largura da janela
console.log(window.innerHeight); // altura da janela
console.log(window.location.href); // URL atual

// Document (página HTML)
console.log(document.title); // título da página
console.log(document.body); // elemento body
console.log(document.URL); // URL do documento

// Navigator (informações do navegador)
console.log(navigator.userAgent); // navegador usado
console.log(navigator.language); // idioma
console.log(navigator.onLine); // está online?

// Clipboard (área de transferência)
function copiarTexto(texto) {
  navigator.clipboard.writeText(texto).then(function () {
    console.log("Texto copiado!");
  });
}

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

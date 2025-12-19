const perimetro = new Function("lado", "return lado * 4");
//mesma coisa que
function areaQuadrado(lado) {
  return lado * lado;
}

function somar(n1, n2) {
  //n1 e n2 sao PARAMETROS
  return n1 + n2;
}

somar(2, 3);
// 2 e 3 são ARGUMENTOS

//total de argumentos
console.log(areaQuadrado.length); // 1
console.log(somar.length); // 2

//string com o nome da funcao
console.log(areaQuadrado.name); // areaQuadrado

//METODOS

//function.call(this, arg1, arg2, ...)
//function.call({this}, arg1, arg2, ...)
//executa a função, sendo possível passarmos uma nova referência ao this
function darOi(nome, idade) {
  console.log("Oi pra você " + nome + " " + idade);
}
darOi();
darOi.call({}, "joao", 22);

const carro = {
  marca: "ford",
  ano: 2018,
};
function descricaoCarro(velocidade) {
  console.log(this.marca + " " + this.ano + " " + velocidade);
} // this = objeto window

descricaoCarro(); // undefined undefined undefined
descricaoCarro.call(); // undefined undefined undefined
descricaoCarro.call(carro, 100); // ford 2018 100
descricaoCarro.call({ marca: "honda", ano: 2000 }, 200); // substituindo o objeto window

//THIS
//O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call()
const carros = ["ford", "fiat", "VW"];
const frutas = ["banana", "uva", "pera"];

//substituindo o this do forEach com call para carros
frutas.forEach.call(carros, (item) => {
  console.log(item);
});

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  console.log(this);
  this.element.classList.add(classe);
};
//this = Dom {elemnt: ul}
// const ul = new Dom("ul");

const li = {
  element: document.querySelector("li"),
};

Dom.prototype.ativo.call(li, "ativar");

// ul.ativo("ativar"); // adicionou a classe
// ul.ativo.call(null, "ativar"); // this se torna o objeto window
// ul.ativo.call(li, "ativar"); // this agora é element:li - por causa do const li...
// // o objeto tem que ser sempre parecido com o objeto original do metodo

// console.log(ul);
// console.log(ul.element); //elemnto do dom
console.log(li);

//

const frutas2 = ["uva", "maca", "banana"];

//apenas colocar no console.log o this
Array.prototype.mostrarThis = function () {
  console.log(this);
}; //modificar o construtor nativo não é uma boa pratica

Array.prototype.pop.call(frutas2); //pop retira o ultimo item da array
frutas2.pop(); //é a mesma coisa

//Array-like
//são parecidos com uma array, por isso podemos utiliza-los na substituicao do this em call
const li2 = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li2, function (item) {
  return item.classList.contains("ativo");
});

filtro; // Retorna os itens que possuem ativo

// function.aplly(this, [arg1, arg2, ...])
//funciona como o call, porem os argumentos são passados em uma array
const numeros = [3, 4, 6, 1, 34, 44, 32];

Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

//Apply vs Call
const li3 = document.querySelectorAll("li");

function itemPossuiAtivo(item) {
  return item.classList.contains("ativo");
}

const filtro1 = Array.prototype.filter.call(li3, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li3, [itemPossuiAtivo]);

//function.bind(this, arg1, arg2, ...)
//não executa a função, e sim retorna com o novo contexto de this
//bom para quando precisa reusar
const li4 = document.querySelectorAll("li");

const filtrarLi = Array.prototype.filter.bind(li4, function (item) {
  return item.classList.contains("ativo");
});

filtrarLi();

const $ = document.querySelectorAll.bind(document, "li"); // se ocultar o argumento é possível selecionar depois
const $$ = document.querySelectorAll("li"); // mesma coisa

//sobre passar os argumentos no momento ou nao do bind
const carro2 = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};
carro2.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: "Honda",
};
const acelerarHonda = carro2.acelerar.bind(honda);
acelerarHonda(200, 10);
// Honda acelerou 200 em 10

//ARGUMENTOS COMUNS
//Podemos passar argumentos padrões para uma função e retornar uma nova função
function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8); // Null pq a funcao não tem referencia a objeto nenhum (não está sendo usado)

imc(1.8, 70); // 21.6
imc180(70); // 21.6

//exercicios
console.log("----------------exercícios-------------------");
// Retorne a soma total de caracteres dos
// parágrafos <section> utilizando reduce
const paragrafos = document.querySelectorAll("p");
const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    // console.log(item.innerText.length);
    return acumulador + item.innerText.length;
  },
  0
);
console.log(totalCaracteres);
console.log(paragrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : ""; // se classe existe ? - se não existe :
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}
console.log(criarElemento("ul", "ativo", "esse é o conteudo"));
console.log(criarElemento("ul"));
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, "h1", "titulo");

const cursosJS = h1Titulo("Curso de JavaScript");
const cursosHTML = h1Titulo("Curso de HTML");

console.log(h1Titulo("esse é oconteudo"));
console.log(cursosJS, cursosHTML);

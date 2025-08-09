var pessoa = {
  nome: "Roberta",
  idade: 26,
};
console.log(pessoa);
console.log(pessoa.nome);
//
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};
console.log(quadrado);
console.log(quadrado.area(5));

console.log(quadrado.perimetro(5));

//Abreviação de area: function() {} para area() {}, no ES6+
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};
console.log(quadrado);
console.log(quadrado.area(5));

console.log(quadrado.perimetro(5));

//Objetos servem para organizar o código em pequenas partes reutilizáveis.

//Math é um objeto nativo de JavaScript.
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// console é um objeto e log() um método ---

//Um objeto é criado utilizando as chaves {}
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

//Acesse propriedades de um objeto utilizando o ponto . 'Dot Notation Get'
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};
var bg = menu.backgroundColor; // '#84E'

//Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // '#000'

//Basta adicionar um novo nome e definir o valor.
var menu = {
  width: 800,
};

menu.height = 50;
menu.position = "fixed";

//this irá fazer uma referência ao próprio objeto.
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu.metadeHeight(); // 25
// sem o this, seria 60

//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
};

menu.hasOwnProperty("width"); // true
menu.hasOwnProperty("height"); // false
//

//exercicio
//// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: "jose",
  sobrenome: "silva",
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: `labrador`,
  cor: `preto`,
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latindo";
    } else {
      return "quietinho";
    }
  },
};

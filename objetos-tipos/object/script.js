const pessoa = new Object({
  nome: "roberta",
});

//métodos de Object

//Object.create(obj, defineProperties)
//retorna um novo objeto que terá como protótipo o objeto do primeiro argumento
const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + " Acelerou";
  },
  buzinar() {
    return this.marca + " Buzinou";
  },
};
const honda = Object.create(carro).init("Honda");

const ferrari = Object.create(carro).init("Ferrari");

//Object.assign(alvo, obj1, obj2)
//adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos
//O assign irá modificar o objeto alvo
const funcaoAutomovel = {
  acelerar() {
    return "acelerou!";
  },
  buzinar() {
    return "buzinou!";
  },
};
const moto = {
  rodas: 2,
  capacete: true,
};

Object.assign(moto, funcaoAutomovel); //modifica moto
Object.assign(carro, funcaoAutomovel);

//Object.defineProperties(alvo, propriedades)
//adiciona ao alvo novas propriedades
//A diferença aqui é a possibilidade de serem definidas as características dessas propriedades
// torna as propriedades imutaveis
const moto2 = {
  rodas: 2,
};
console.log(moto2);

moto2.rodas = 5; // alterou o valor da propriedade
console.log(moto2);

Object.defineProperties(moto2, {
  rodas: {
    // value: 2,
    // configurable: false, // não deixa deletar - padrao false
    // writable: true, // pode mudar o valor
    // enumerable: false, // torna numeravel
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  },
});

//get e set
//ao acionarmos uma propriedade obj.propriedade, a função get é ativada
//e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

//Object.getOwnPropertyDescriptors(obj)
//lista todos os métodos e propriedades de um objeto, com as suas devidas configurações
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, "innerHeight");
// Puxa de uma única propriedade

//Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto
//Object.values(obj) retorna uma array com os valores do objeto
//Object.entries(obj) retorna uma array com array's contendo a chave e o valor
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro2 = {
  marca: "Ford",
  ano: 2018,
};
Object.keys(carro2);
// ['marca', 'ano']
Object.values(carro2);
// ['Ford', 2018]
Object.entries(carro2);
// [['marca', 'Ford'], ['ano', 2018]]

//Object.getOwnPropertyNames(obj)
//Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo)
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro3 = {
  marca: "Ford",
  ano: 2018,
};
Object.getOwnPropertyNames(carro3);
// ['marca', 'ano']

//Object.getPrototypeOf()
//retorna o protótipo do objeto.
const frutas = ["Banana", "Pêra"];
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(""); // String

// Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
const frutas1 = ["Banana", "Pêra"];
const frutas2 = ["Banana", "Pêra"];

Object.is(frutas1, frutas2); // false - são objetos diferentes

const novaFruta = frutas1;

Object.is(frutas1, novaFruta); // true

//Object.freeze() - congela o objeto
//impede qualquer mudança nas propriedades
const carros = {
  marca: "Ford",
  ano: 2018,
};
console.log(carros); // 'ford'

carros.marca = "Honda"; // alterou

Object.freeze(carros); //congela o objeto
carros.marca = "VolksWagen"; // não alterou mais

console.log(carros); //honda

//Object.seal()
//previne a adição de novas propriedades e impede que as atuais sejam deletadas
const carros1 = {
  marca: "Chery",
  ano: 2018,
};
console.log(carros1);
carros1.velocidade = 200; //adicionou a nova propriedade

Object.seal(carros1); //previniu adicao de novas propriedades e a exclusao
carros1.portas = 4; //nao adicionou
delete carros1.marca; //não deletou!!
console.log(carros1);

//Object.preventExtensions()
//previne a adição de novas propriedades (mas permite e exclusao)
const carros2 = {
  marca: "BYD",
  ano: 2018,
};
console.log(carros2);
Object.preventExtensions(carros2); //previne a adição de novas propriedades

carros2.portas = 4; // nao adicionou pq esta com o Object.preventExtensions(carros2
delete carros2.marca; //deletou!!
console.log(carros2);

//verificar se o objeto está congelado
console.log(Object.isFrozen(carros)); //true
console.log(Object.isFrozen(carros1)); //false
console.log(Object.isFrozen(carros2)); //false

//verificar se esta selado
console.log(Object.isSealed(carros)); //true
console.log(Object.isSealed(carros1)); //true
console.log(Object.isSealed(carros2)); //false

//verificar se o objeto pode ser add extensoes
console.log(Object.isExtensible(carros)); //false
console.log(Object.isExtensible(carros1)); //false
console.log(Object.isExtensible(carros2)); //false

//Propriedades e métodos do prototipo
// em JavaScript tudo é objeto (salvo null e undefined)
//tem o __proto__ constructor Object
//então tem acesso a prop e met do prototipo object

//{}.construcor - retorna a funcao construtora do objeto
const doce = ["brigadeiro", "pudim"];
console.log(doce.constructor); //ƒ Array() { [native code] }
console.log(doce.constructor.prototype);

const frase = "isso é uma string";
console.log(frase.constructor); //ƒ String() { [native code] }
console.log(frase.constructor.prototype);

//{}.hasOwnProperty('prop')
//Verifica se possui a propriedade
//A propriedade deve ser direta do objeto e não do protótipo
console.log(doce.hasOwnProperty("map")); //false
console.log(Array.prototype.hasOwnProperty("map")); //true

//{}.propertyIsEnumerable()
//verifica se a propriedade é enumerável ou não
Array.prototype.propertyIsEnumerable("map"); // false
window.propertyIsEnumerable("innerHeight"); // true

//{}.isPrototypeOf(valor)
//Verifica se é o protótipo do valor passado
Array.prototype.isPrototypeOf(doce); //true

//{}.toString()
//Retorna o tipo do objeto
//O problema é toString() ser uma função dos protótipos de Array, String e mais
//Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor)
const letras = ["a", "b", "c", "d"];
console.log(letras.toString()); //retorna uma string

const funcaoExemplo = function (a, b) {
  return a + b;
};
console.log(funcaoExemplo.toString()); //retorna uma string com a funcao

const objetoExemplo = {
  tipo: "plastico",
  peso: 3,
};
console.log(objetoExemplo.toString()); // [object Object] string dizendo que isso é um objeto do tipo Object

//acessar direto a funcao do object
Object.prototype.toString.call(objetoExemplo); //usar o call para altrar o this

console.log(Object.prototype.toString.call(letras)); //[object Array]
console.log(Object.prototype.toString.call(funcaoExemplo)); //[object Function]
console.log(Object.prototype.toString.call(objetoExemplo)); //[object Object]

const li = document.querySelectorAll("li");
console.log(typeof li); //object
console.log(Object.prototype.toString.call(li)); //[object NodeList]

//exercicios
console.log("--------------exercicios--------------");

// Crie uma função que verifique
// corretamente o tipo de dado

function verificarTipo(item) {
  return Object.prototype.toString.call(item);
}

console.log(verificarTipo("alo")); //[object String]

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela IMUTAVEL
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  },
});
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};
Object.freeze(configuracao);
console.log(Object.isFrozen(configuracao)); //true

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const roberta = new Pessoa("Roberta", 26);
console.log(Pessoa.prototype);

console.log(roberta.prototype); //undefined pq 'roberta' é um objeto e prototype está ligado a função

//é possível adicionar novas propriedades e métodos ao obejto prototype
Pessoa.prototype.andar = function () {
  return this.nome + " Pessoa andou";
};
Pessoa.prototype.nadar = function () {
  return this.nome + " Pessoa nadou";
};
//===
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "abraço";
  };
  this.andar = function () {
    return " andou pelo objeto";
  };
}
//proto
//acessan o mesmo método, mas __proto__ não tera acesso ao this.nome
roberta.andar();
roberta.__proto__.andar(); //não devemos falar com _proto_ diretamente = undefined

const lista = document.querySelectorAll("li"); //nodelist
const listaArray = Array.prototype.slice.call(lista); //transforma em array //linkado ao prototipo
const listaArray1 = Array.from(lista); //linkado a funcao array
// Array.from(lista); //melhor

Object.getOwnPropertyNames(Array); //
Object.getOwnPropertyNames(Array.prototype); //

Object.getOwnPropertyNames(roberta);
Object.getOwnPropertyNames(Pessoa.prototype); // assim
Object.getOwnPropertyNames(roberta.__proto__); // não assim

const Carro = {
  marca: "ford",
  preco: 2000,
  andar() {
    return true;
  },
};

//importante saber o que está retornando para saber ao que tem acesso
Carro.andar.constructor.name; //uma forma de ver o que é
Carro.marca; // "ford" string
Carro.marca.toUpperCase; //"FORD"

Carro.preco; // number

Carro.andar(); //boolean
Carro.andar; // function

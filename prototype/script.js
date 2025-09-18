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

const pais = "Brasil";
const cidade = new String("Rio");

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

const joao = new Pessoas("João", "Silva", 30);

// Crie um método no protótipo que retorne
// o nome completo da pessoa
Pessoas.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; // function
li.innerText; //string
li.value; //number
li.hidden; // boolean
li.offsetLeft; // number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //string //o que importa é o dado que está retornando

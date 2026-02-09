function Carro() {
  this.marca = "marca";
  this.preco = "preco";
}

//criando uma instância (objeto) com "new"
const qq = new Carro();
console.log(qq);

//modificando propriedades
qq.marca = "chery";
qq.preco = 32000;
console.log(qq);

//constructor com parametros
//forma correta: receber valores como parâmetros
function CarroNovo(marca, preco, ano) {
  this.marca = marca;
  this.preco = preco;
  this.ano = ano;
}

//criando múltiplas instâncias - objetos
const tcross = new CarroNovo("VW", 90000, 2022);
const gol = new CarroNovo("VW", 20000, 2010);
const civic = new CarroNovo("Honda", 120000, 2023);

console.log(tcross); // {marca: 'VW', preco: 90000, ano: 2022}
console.log(gol); // {marca: 'VW', preco: 20000, ano: 2010}
console.log(civic); // {marca: 'Honda', preco: 120000, ano: 2023}

//cada instância é um objeto independente
tcross.marca = "Volkswagen";
console.log(tcross.marca); // "Volkswagen"
console.log(gol.marca); // "VW" (não mudou)

//LÓGICA DENTRO DA CONSTRUCTOR //////////////////////////

function Carro2(marca, precoInicial) {
  this.taxa = 1.2; // propriedade fixa
  const precoFinal = precoInicial * this.taxa; // variável local
  this.marca = marca;
  this.preco = precoFinal;
  // Variáveis sem "this" não ficam no objeto
  console.log(this);
}
const mazda = new Carro2("Mazda", 5000);
console.log(mazda.preco); // 6000 (5000 * 1.2)
console.log(mazda.precoFinal); // undefined (era variável local)

//METODOS NA CONSTRUCTOR
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  // Método dentro da constructor
  this.andar = function () {
    console.log(this.nome + " andou");
  };

  this.envelhecer = function () {
    this.idade++;
    console.log(this.nome + " agora tem " + this.idade + " anos");
  };
}

const pedro = new Pessoa("Pedro", 20);
const maira = new Pessoa("Maira", 25);
const breno = new Pessoa("Breno", 15);

pedro.andar(); // "Pedro andou"
maira.envelhecer(); // "Maira agora tem 26 anos"

// exemplo real
// MANIPULAÇÃO DO DOM

const Dom = {
  seletor: "li",
  element() {
    return document.querySelector(this.seletor);
  },
  ativar() {
    this.element().classList.add("ativar");
  },
};

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(this.seletor);
  };
  this.ativar = function () {
    this.element().classList.add("ativar");
  };
}
const li = new Dom("li");
const ul = new Dom("ul");

const liLast = new Dom("li:last-child");

//COMPARAÇÃO: OBJETO LITERAL x CONSTRUCTOR
// Objeto literal - único objeto
const carroLiteral = {
  marca: "Ford",
  preco: 50000,
};

// Constructor - pode criar múltiplos objetos
function CarroConstructor(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const carro2 = new CarroConstructor("Ford", 50000);
const carro3 = new CarroConstructor("Fiat", 40000);

// exercicios
// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom1(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}
const listaItens = new Dom1("li");
listaItens.addClass("ativar");

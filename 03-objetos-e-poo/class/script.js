//Constructor function
function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
};

const blueButton = new Button("Comprar", "blue");

console.log(blueButton.element());

//Class
//syntactical sugar
//Por trás dos panos, ainda usa o sistema de prototypes
//Mas com sintaxe mais limpa e moderna (ES6+)
class Button1 {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  // Métodos ficam automaticamente no prototype
  element() {
    const button1Element = document.createElement("button");
    button1Element.innerText = this.text;
    button1Element.style.background = this.background;
    button1Element.style.color = this.color;
    return button1Element;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
}

const yellowButton = new Button1("Detalhes", "yellow", "black");
console.log(yellowButton.element());
console.log(yellowButton.appendTo("body"));
// Ambos fazem a mesma coisa --
// Class é apenas uma sintaxe mais clara

EXEMPLO;
class MinhaClasse {
  // CONSTRUCTOR - executado ao criar instância
  constructor(propriedade) {
    this.propriedade = propriedade; // propriedade da instância
  }
  // MÉTODOS - ficam no prototype
  metodo1() {
    return this.propriedade;
  }
  metodo2() {
    console.log("método 2");
  }
  // GETTERS - propriedades computadas
  get valor() {
    return this.propriedade * 2;
  }

  // SETTERS - validação ao atribuir
  set valor(novo) {
    this.propriedade = novo;
  }

  // MÉTODOS ESTÁTICOS - não precisam de instância
  static metodoEstatico() {
    return "Chamado direto na classe";
  }
}

function Constructor(propriedade) {
  this.propriedade = propriedade;
}
Constructor.prototype.metodo1 = function () {};
Constructor.prototype.metodo1 = function () {};

// proprieades podem ser qualquer valor
// static
// cria o metodo dentro da funçao construtora, não mais dentro do prototipo

// Métodos estáticos pertencem à CLASSE, não à instância
// Úteis para funções auxiliares ou factory methods
class Button2 {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const button2Element = document.createElement("button");
    button2Element.innerText = text;
    button2Element.style.background = background;
    return button2Element;
  }
}
const optionsGreen = {
  backgroundColor: "darkgreen",
  text: "comprar",
  color: "white",
};

const greenButton = new Button2(optionsGreen);
console.log(greenButton);

const greenButtonStatic = Button2.createButton("Clique", "lightgreen");
console.log(greenButtonStatic);

//get e set
//acessar métodos como se fossem propriedades
const botao = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(numero) {
    this._numero = numero * 100;
  },
};
botao.tamanho = 10;
console.log(botao.tamanho); //1000
// se definir apenas o get o valor fica estatico - não será possivel muda-lo

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};
frutas.nova = "maça";
frutas.nova = "morango";

//Assim como em um objeto, as classes podem ter métodos de get e set também
class Button9 {
  constructor(text) {
    this.text = text;
  }
  get element() {
    const elementType = this._elementType || "button";
    const buttonElement = document.createElement(elementType);
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton9 = new Button9("Comprar");
blueButton.element; // retorna o elemento

//subclasses
//extends = irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo
class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log("Acelerou");
  }
}
class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel); // puxa a propr de veiculo e adiciona capacete
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar(); // com super ele ativa as duas
    console.log("Acelerou rápido"); //escreveu por cima do anterior
  }
  empinar() {
    console.log("Moto Empinou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(2, "gasolina", true);
const civic = new Veiculo(4);
//super = acessar um método que foi herdado

//factory function
//retornam um objeto sem usar a palavra chave new
//os métodos são criados no objeto e não no prototipo

function createButton(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }

  return {
    text,
    element,
  };
}

const btnComprar = createButton("Comprar");
const btnVender = createButton("Vender");

//métodos / variáveis privadas
function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
    nadar,
  });
}
const pessoa1 = criarPessoa("maria", "antonia");

//ice factory
//congelar propriedades e metodos com Object.freeze()

//Constructor Function / Factory Function
//Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new
//Também é possível fazer isso com uma Constructor Function
function Pessoa(nome) {
  if (!(this instanceof Pessoa))
    // ou (!new.target)
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const designer = Pessoa("André");

//exemplo real
function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    return this;
  }
  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    return this;
  }
  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }
  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }
  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return this;
  }
  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}
const btns = $$("button");
console.log(btns.hide().show());

function handleClick(event) {
  console.log(event.target);
}

btns.on("click", handleClick);
btns.addClass("active");

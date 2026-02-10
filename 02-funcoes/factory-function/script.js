//factory function
//retornam um objeto SEM usar a palavra chave new
//os métodos são criados no objeto e não no prototipo

function createButton(text) {
  //função interna (privada)
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  //retorna um objeto com propriedades e métodos
  return {
    text,
    element,
  };
}
//usando a factory (sem "new")
const btnComprar = createButton("Comprar");
const btnVender = createButton("Vender");

console.log(btnComprar.text); // "Comprar"
console.log(btnComprar.element()); // <button>Comprar</button>

//métodos e variáveis privadas
function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`; //variável privada - não acessível fora

  //método PRIVADOS - não está no return
  function andarDevagar() {
    return `${nomeCompleto} andou devagar`;
  }
  //métodos públicos - estão no return
  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  function correr() {
    // Método público pode usar método privado
    return andarDevagar() + " e depois correu";
  }
  //retorna apenas o que deve ser público
  return {
    nome,
    sobrenome,
    andar,
    nadar,
  };
}
const pessoa1 = criarPessoa("Maria", "Antonia");
console.log(pessoa1.andar()); // "Maria Antonia andou"
console.log(pessoa1.nomeCompleto); // undefined (privado)

// OBJECT.FREEZE - IMUTABILIDADE
//congelar propriedades e metodos com Object.freeze()
//ice factory
function criarPessoaImutavel(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  // Object.freeze impede modificações no objeto
  return Object.freeze({
    nome,
    sobrenome,
    andar,
    nadar,
  });
}

const pessoa2 = criarPessoaImutavel("João", "Silva");
pessoa2.nome = "Pedro"; // NÃO funciona (objeto congelado)
console.log(pessoa2.nome); // "João" (não mudou)
// pessoa2.correr = function() {}; // NÃO funciona
// delete pessoa2.nadar; // NÃO funciona

//CONSTRUCTOR Function x FACTORY Function
// Constructor Function (tradicional)
function PessoaConstructor(nome) {
  this.nome = nome;
}
PessoaConstructor.prototype.andar = function () {
  return `${this.nome} andou`;
};
const p1 = new PessoaConstructor("Ana"); // PRECISA de new

// Factory Function (moderna)
function criarPessoaFactory(nome) {
  return {
    nome,
    andar() {
      return `${nome} andou`;
    },
  };
}
const p2 = criarPessoaFactory("Ana"); // NÃO precisa de new

// Vantagens da Factory:
// 1. Não precisa de "new"
// 2. Mais fácil criar variáveis/métodos privados
// 3. Pode usar closures naturalmente
// 4. Mais flexível na criação de objetos

// Desvantagens da Factory:
// 1. Métodos são criados para cada instância (mais memória)
// 2. Não usa prototype (menos otimizado)

//PROTEGENDO CONSTRUCTOR DE ERROS

function Pessoa(nome) {
  // Verifica se foi chamado com "new"
  if (!(this instanceof Pessoa))
    // ou (!new.target)
    // Se não foi, chama novamente com "new"
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

// Funciona COM new
const designer = new Pessoa("André");
console.log(designer.andar()); // André andou

// Funciona SEM new (auto-correção)
const desenvolvedor = Pessoa("João");
console.log(desenvolvedor.andar()); // João andou

// Versão ES6 (mais moderna)
function PessoaModerna(nome) {
  if (!new.target) {
    return new PessoaModerna(nome);
  }
  this.nome = nome;
}

//exemplo real - bibilioteca DOM
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
  function css(property, value) {
    elements.forEach((element) => {
      element.style[property] = value;
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
    css,
  };
}

// Usando a biblioteca (estilo jQuery)
const btns = $$("button");
console.log(btns.hide().show());

// Encadeamento de métodos (method chaining)
btns.addClass("active").css("color", "blue").show();

// Event listeners
function handleClick(event) {
  console.log(event.target);
}

// Múltiplas ações
$$("p").addClass("destaque").css("fontSize", "20px");

btns.on("click", handleClick);
btns.addClass("active");

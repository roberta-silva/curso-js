//forms
//como pegar os valores do formulario

document.forms; // lista com os formulários
document.forms.contato; // form com nome contato
document.forms.contato.elements; // elementos
document.forms[0].elements[0].value; // valor do primeiro
document.forms[0]; //form#contato

const contato = document.querySelector("#contato");
const texto = document.querySelector(".texto");

console.log(contato.elements);
console.log(contato.elements.nome);
console.log(contato.elements.nome.value); //puxa o valor

//VALIDAÇÃO
//checkValidity
//verifica se um input com o atributo required, é válido ou não

//propriedade validationMessage
//possui a mensagem padrão de erro do browser
//É possível modicar com setCustomValidity('')

function handleKeyUp(event) {
  const target = event.target;

  if (!target.checkValidity()) {
    target.classList.add("invalido");
    contato.nome.setCustomValidity("Preencha o nome corretamente");
    contato.email.setCustomValidity("Informe um e-mail válido");
    target.nextElementSibling.innerText = target.validationMessage;
  }
  console.log(target.checkValidity());
  console.log(target.value);
  texto.innerText = target.value;
}

// contato.addEventListener("keyup", handleKeyUp); //heyup não pega digitaçao por voz
contato.addEventListener("change", handleKeyUp);

//Inputs
const outros = document.querySelector("#outros");

function background(event) {
  document.body.style.backgroundColor = event.target.value;
}
outros.addEventListener("change", background);

//CHECKBOX & RADIO
const checkbox = document.querySelector("#checkbox");

function handleChange(event) {
  if (event.target.checked) {
    console.log(event.target.value);
  }
}
checkbox.addEventListener("change", handleChange);

//pegar TODOS os valores de uma vez
const dados = {};

function todosValores(event) {
  dados[event.target.name] = event.target.value;
}
contato.addEventListener("change", todosValores);
console.log(dados);

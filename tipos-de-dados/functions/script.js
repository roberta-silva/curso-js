function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
//
function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(44, 1.6));

//
function corFavorita(cor) {
  if (cor === "azul") {
    return "eu gosto do céu";
  } else if (cor === "verde") {
    return "eu gosto de mato";
  } else {
    return "eu nao gosto de cores";
  }
}
// Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

//Argumentos podem ser funções - Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//Pode ou não retornar um valor - Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
imc(80, 1.8); // retorna o imc
console.log(imc(80, 1.8)); // retorna o imc e undefined
//

//Valores retornados - Uma função pode retornar qualquer tipo de dado e até outras funções.
function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade("r"));
//Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia!!!!!!!!!

//
//Escopo - Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function FaltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} paises.`;
}
console.log(totalPaises); // retorna erro pq está do lado de fora das {}
//

//exercicio /
//  Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  return !!valor;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function completeName(name, lastName) {
  return `${name} ${lastName}`;
}

// Crie uma função que verifica se um número é par
function par(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener("scroll", function () {
  console.log("roberta silva");
});

addEventListener("click", function () {
  console.log("Clicou1");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

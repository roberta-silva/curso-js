//função simples
function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(4)); // 16

//função sem parâmetros
function pi() {
  return 3.14;
}
var total = 5 * pi(); // 15.7
console.log(total);

//função com múltiplos parâmetros
function imc(peso, altura) {
  var resultado = peso / (altura * altura);
  return resultado;
}
console.log(imc(80, 1.8)); // 24.69
console.log(imc(60, 1.65)); // 22.04

//parâmetros com valores padrão (es6)
function saudacao(nome = "Visitante") {
  return `Olá, ${nome}!`;
}
console.log(saudacao("Maria")); // "Olá, Maria!"
console.log(saudacao()); // "Olá, Visitante!"

//RETURN
//função com return
function soma(a, b) {
  return a + b;
}
var resultado = soma(5, 3); // 8

//função sem return - retorna undefined
function mostrarMensagem(texto) {
  console.log(texto);
  //não tem return
}
var retorno = mostrarMensagem("Olá"); // undefined
console.log(retorno); // undefined

//return interrompe a função
function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true; // sai da função aqui
  }
  return false; // só executa se idade < 18
}

//cindicionais em funções
function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}
console.log(corFavorita("azul")); // "Eu gosto do céu"
console.log(corFavorita("vermelho")); // "Eu não gosto de cores"

//validação de tipos
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor, preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(65)); // true
console.log(terceiraIdade(30)); // false
console.log(terceiraIdade("30")); // "Por favor, preencha um número"

//Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia!!!!!!!!!
//melhor seria:
function terceiraIdadeMelhorado(idade) {
  if (typeof idade !== "number") {
    return false; // sempre retorna boolean
  }
  return idade >= 60;
}

//ESCOPO
//variáveis dentro da função não são acessíveis fora
function faltaVisitar(paisesVisitados) {
  var totalPaises = 193; // só existe dentro da função
  return `Falta visitar ${totalPaises - paisesVisitados} países.`;
}
console.log(faltaVisitar(50)); // Falta visitar 143 países.

// console.log(totalPaises); // ERRO: totalPaises não está definido

//variável global (fora da função)
var totalPaisesGlobal = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaisesGlobal - paisesVisitados} países`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} de ${totalPaisesGlobal} países`;
}

console.log(precisoVisitar(20)); // Ainda faltam 173 países
console.log(jaVisitei(20)); // Já visitei 20 de 193 países

//FUNÇÕES COMO ARGUMENTOS - CALLBACKS
//Callback é uma função passada como argumento
addEventListener("click", function () {
  console.log("Clicou!");
});

// Exemplo com setTimeout
setTimeout(function () {
  console.log("Executou após 2 segundos");
}, 2000);

// Callback nomeada
function aoClicar() {
  console.log("Função nomeada executada");
}
addEventListener("click", aoClicar);

//HOISTING = IÇAMENTO
//Function declarations são içadas
console.log(minhaFuncao()); // funciona (antes - essa funcao está declarada abaixo)

function minhaFuncao() {
  return "Função içada";
}

//Function Expressions NÃO são içadas
// console.log(minhaFuncao2()); // ERRO!
var minhaFuncao2 = function () {
  return "Não é içada";
};

//BOAS PRÁTICAS
//1. Usar nomes descritivos
function calcularAreaRetangulo(base, altura) {
  return base * altura;
} // BOM

function calc(b, h) {
  return b * h;
} // RUIM

//2. Uma função deve fazer apenas uma coisa
function calcularEExibirIMC(peso, altura) {
  // RUIM: faz duas coisas
  var imc = peso / (altura * altura);
  console.log(imc);
  return imc;
}

// MELHOR: separar responsabilidades
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function exibirIMC(imc) {
  console.log(`Seu IMC é: ${imc}`);
}

//3. Evitar retornar tipos diferentes
function verificarIdade(idade) {
  if (typeof idade !== "number") {
    return "erro"; // string
  }
  return idade >= 18; // boolean
} // RUIM

// MELHOR: sempre retornar o mesmo tipo
function ehMaiorDeIdade(idade) {
  if (typeof idade !== "number") {
    return false;
  }
  return idade >= 18;
} // BOM

//exercicios
//Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  return !!valor;
}
console.log(isTruthy(1)); // true
console.log(isTruthy(0)); // false
console.log(isTruthy("")); // false
console.log(isTruthy("texto")); // true

//Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(5)); // 20

//Crie uma função que retorne o seu nome completo
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Roberta", "Silva")); // "Roberta Silva"

//Crie uma função que verifica se um número é par
function ehPar(numero) {
  return numero % 2 === 0;
  // Forma simplificada (melhor que if/else)
}

console.log(ehPar(4)); // true
console.log(ehPar(7)); // false

// Versão com if/else (funciona, mas desnecessária)
function ehParComIf(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//Crie uma função que retorne o tipo de dado do argumento
function tipoDado(dado) {
  return typeof dado;
}

console.log(tipoDado(42)); // "number"
console.log(tipoDado("texto")); // "string"
console.log(tipoDado(true)); // "boolean"

//addEventListener com callback
addEventListener("scroll", function () {
  console.log("Roberta Silva");
});

addEventListener("click", function () {
  console.log("Página foi clicada!");
});

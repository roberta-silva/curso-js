//var (evitar)
//tem escopo de funçao, não de bloco
//são içadas
var nome = "roberta";
var nome = "maria"; //pode ser redeclarada

var primeira, segunda, terceira, quarta, quinta;
console.log(nome, primeira);

//let
//tem escopo de bloco
let idade = 26;
idade = 27; // o valor da variável pode ser reatribuido

//const
//escopo de bloco
const pais = "Brasil";
// pais = "Itália"; // o valor da variável NÃO pode ser reatribuido

//const e objetos
const userData = { name: "Maria", age: 20 };
userData.name = "João";
userData.age = 30; //as propriedades do objeto podem ser reatribuidas

//Escopo de bloco
if (true) {
  let blocoLet = "Só existe aqui";
  const blocoConst = "Só existe aqui";
  var blocoVar = "Vaza do bloco!";
}
// console.log(blocoLet); // Erro
// console.log(blocoConst); // Erro
console.log(blocoVar); // "Vaza do bloco!"

// Mostrar na página
document.getElementById("resultados").textContent = `Nome: ${nome}
Idade: ${idade}
País: ${pais}

Objeto (const):
  Name: ${userData.name}
  Age: ${userData.age}

Variável de bloco (var): ${blocoVar}`;

// Mostrar no console
console.log(nome, idade, pais, userData);

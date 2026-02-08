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

const user = { name: "Maria", age: 20 };
user.name = "João";
user.age = 30; //as propriedades do objeto podem ser reatribuidas

// Mostrar na página
document.getElementById("resultados").textContent =
  `Nome: ${nome}\nIdade: ${idade}\nPaís: ${pais}\n\nUser: ${user.name}\nAge: ${user.age}`;

// Mostrar no console
console.log(nome, idade, pais, user);

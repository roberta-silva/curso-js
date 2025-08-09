var possuiGraduacao = true;
var possuiDoutorado = false;
//
var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação e não executa o else
//
var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado

// //true or false
// // Falsy
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``
// // Truthy
// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})

//   // Truthy
// if(!true) // false
// if(!1) // false
// if(!'') // true
// if(!undefined) // true
// if(!!' ') // true
// if(!!'') // false
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

//switch
var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.log("Feche os olhos");
}

//EXERCICIO

// Verifique se a sua idade é maior do que a de algum parente
var roberta = 26,
  vinicius = 28;
if (roberta > vinicius) {
  console.log("roberta mais velha");
} else if (roberta === vinicius) {
  console.log("mesma idade");
} else {
  console.log("vinicius mais velho");
}

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
3;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //true
console.log(nome);
var idade = 28; // true
var possuiDoutorado = false; //false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false
console.log(
  !!nome,
  !!idade,
  !!possuiGraduacao,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log(`brasil tem mais hab`);
} else {
  console.log("china tem mais hab");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} //false

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
} //verd

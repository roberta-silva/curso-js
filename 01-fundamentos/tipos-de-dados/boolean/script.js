var possuiGraduacao = true;
var possuiDoutorado = false;

console.log(typeof possuiGraduacao); //boolean

// if simples
if (possuiGraduacao) {
  console.log("Possui graduação");
}

// if / else
if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}

// if / else if / else
if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}

//true or false
//valores FALSY (considerados false em condições)
if (false) {} // false
if (0) {} // false (zero)
if (-0) {} // false
if (NaN) {} // false
if (null) {} // false
if (undefined) {} // false
if ("") {} // false (string vazia)

// Valores TRUTHY (considerados true em condições)
if (true) {} // true
if (1) {} // true (qualquer número diferente de 0)
if (-5) {} // true
if (" ") {} // true (string com espaço)
if ("andre") {} // true (qualquer string não vazia)
if ({}) {} // true (objeto vazio)
if ([]) {} // true (array vazio)

//operadores de comparação
10 == "10"; // true - compara valor, converte tipos
10 === "10"; // false - compara valor E tipo
10 != "10"; // false
10 !== "10"; // true

// Relacionais
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

// AND (&&) - todas as condições devem ser verdadeiras
console.log(true && true); // true
console.log(true && false); // false
console.log(5 > 2 && 10 > 5); // true

// OR (||) - pelo menos uma condição deve ser verdadeira
console.log(true || false); // true
console.log(false || false); // false
console.log(5 > 10 || 10 > 5); // true

// NOT (!) - inverte o valor
console.log(!true); // false
console.log(!false); // true
console.log(!(5 > 2)); // false

//negação simples
console.log(!true); // false
console.log(!false); // true
console.log(!1); // false (1 é truthy)
console.log(!""); // true ("" é falsy)
console.log(!undefined); // true

//negação dupla (!!) - converte para boolean
console.log(!!" "); // true (força conversão para boolean)
console.log(!!""); // false
console.log(!!1); // true
console.log(!!0); // false

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

//operador ternario
//sintaxe: condição ? valor_se_true : valor_se_false
var idadeUsuario = 20;
var status = idadeUsuario >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // "Maior de idade"

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
  !!dinheiroNaConta,
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
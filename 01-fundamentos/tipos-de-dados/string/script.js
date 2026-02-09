let nome = "Roberta";
let sobrenome = "Silva";
let idade = 26;
console.log(typeof nome);

//concatenando strings
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

//template string (es6)
let frase = `${nome} tem ${idade} anos de idade.`;
console.log(frase);

//aspas simples
let frase1 = 'Texto simples';

//aspas duplas
let frase2 = "Texto duplo";

//aspas dentro de strings
let frase3 = "It's time"; // aspas duplas fora
let frase4 = 'He said "Hello"'; // aspas simples fora
let frase5 = `It's "amazing"`; // template string (aceita ambas)

//escape com barra invertida
let frase6 =  'It\'s time'; // usando escape

//metodos de string
//maisculo e minusculo
console.log(nome.toLocaleUpperCase()); //ROBERTA
console.log(nome.toLocaleLowerCase()); //roberta

//tamanho da string
console.log(nome.length); // 7

//acessar caracteres
console.log(nome[0]); // "r" (primeiro)
console.log(nome[nome.length - 1]); // "a" (último)

//outros métodos úteis
console.log(nome.trim()); // remove espaços das pontas
console.log(nome.replace("a", "o")); // "roberto"
console.log(nome.includes("ber")); // true
console.log(nome.slice(0, 3)); // "rob"

//declarando uma variável contendo um número dentro de uma string
let day = "18";
console.log(typeof day); //string
console.log(day + 2); //182 - concatena, não soma

let dayNumber = 18;
console.log(typeof dayNumber); //number

// Mostrar na página
document.getElementById("resultados").textContent = 
`STRINGS EM JAVASCRIPT:

Básico:
  Nome: ${nome}
  Sobrenome: ${sobrenome}
  Nome completo: ${nomeCompleto}

Transformações:
  Maiúsculo: ${nome.toUpperCase()}
  Minúsculo: ${nome.toLowerCase()}
  Tamanho: ${nome.length} caracteres

Template String:
  ${frase}

Aspas:
  ${frase3}
  ${frase4}

Conversão:
  String "18": ${day} (tipo: ${typeof day})
  Number 18: ${dayNumber} (tipo: ${typeof dayNumber})`;

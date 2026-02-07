let nome = "roberta";
let idade = 26;
let simbolo = Symbol();
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof simbolo);

let sobrenome = "silva";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

let gols = 1000;
let frase = "Romário fez" + " " + gols + " " + "gols";
// usando o template string - usar com `crase
let frase2 = `Romário fez ${gols} gols`;
console.log(frase);
console.log(frase2);

//exercicio
// Declare uma variável contendo uma string
let myColor = "blue";
console.log(typeof myColor);

// Declare uma variável contendo um número dentro de uma string
let day = "18";
console.log(typeof day);

// Declare uma variável com a sua idade
let myAge = 26;
console.log(typeof myAge);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
let myName = "roberta";
let myLastName = "silva";
let completeName = `${myName} ${myLastName}`;
console.log(completeName);

// Coloque a seguinte frase em uma variável: It's time
let frase3 = "it´s time";

// Verifique o tipo da variável que contém o seu nome
console.log(typeof myName);

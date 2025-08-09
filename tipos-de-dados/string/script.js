var nome = "roberta";
var idade = 26;
var simbolo = Symbol();
console.log(typeof nome, idade, simbolo);

var sobrenome = "silva";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = "Romário fez" + " " + gols + " " + "gols";
// usando o template string - usar com `crase
var frase2 = `Romário fez ${gols} gols`;
console.log(frase);
console.log(frase2);

//exercicio
// Declare uma variável contendo uma string
var myColor = "blue";
console.log(typeof myColor);

// Declare uma variável contendo um número dentro de uma string
var day = "18";
console.log(typeof day);

// Declare uma variável com a sua idade
var myAge = 26;
console.log(typeof myAge);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var myName = "roberta";
var myLastName = "silva";
var completeName = `${myName} ${myLastName}`;
console.log(completeName);
// Coloque a seguinte frase em uma variável: It's time
var frase2 = "it´s time";
var frase3 = "it´s time"; // 'it\'s time'

// Verifique o tipo da variável que contém o seu nome
console.log(typeof myName);

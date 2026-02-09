//Primitivos
let nome = "Roberta"; // String
let idade = 27; // Number
let ativo = true; // Boolean
let indefinido; // Undefined
let vazio = null; // Null
let simbolo = Symbol(); // Symbol = identificador único
let grande = 10n; // BigInt = números muito grandes

//ao copiar, copia o valor
let a = 10;
let b = a; // b recebe uma CÓPIA do valor
b = 20;
console.log(a); // 10 (não mudou)
console.log(b); // 20

//usando typeof
console.log(typeof nome); //string

//de referência (objetos)
//ao copiar, copia a referência (endereço na memória)
let pessoa = { nome: "João" }; // Object
let numeros = [1, 2, 3]; // Array
let saudar = function () {}; // Function

let obj1 = { nome: "Maria" };
let obj2 = obj1; // obj2 aponta para o MESMO objeto
obj2.nome = "João";
console.log(obj1.nome); // "João" (mudou também)
console.log(obj2.nome); // "João"

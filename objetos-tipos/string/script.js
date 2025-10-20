const comida = "Pizza";
const liquido = new String("agua");
const ano = new String(2018);

//length = total de caracteres
console.log(comida.length); // 5

comida[0]; // P

const frase = "A melhor pizza do mundo";
frase[frase.length - 1];
console.log(frase[frase.length - 1]);

const linguagem = "JavaScript";
linguagem.charAt(0); // J
console.log(linguagem.charAt(linguagem.length - 1));

//concatenar
const fraseFinal = frase + linguagem;
console.log(fraseFinal);

const fraseFinal1 = frase.concat(linguagem);
console.log(fraseFinal1, "!!!");

//includes = case sensitive
const fruta = "Banana";
const listaFruta = "melancia, banana, laranja";
listaFruta.includes(fruta); //true
fruta.includes(listaFruta); //false

//endsWith and startsWith
console.log(fruta.startsWith("Ba"));
console.log(fruta.startsWith("ba"));

console.log(fruta.endsWith("a"));
console.log(fruta.endsWith("A"));

//slice
//corta a string de acordo com os valores de start e end
const transacao1 = "deposito de cliente";
const transacao2 = "deposito de fornecedor";
const transacao3 = "taxa de camisas";

transacao1.slice(0, 3); // dep
transacao2.slice(0, 3); //dep
transacao3.slice(0, 3); //tax

transacao1.slice(12); //cliente - corta os 12 primeiros caracteres
transacao3.slice(0, -2); // corta o dois ultimos caracteres
transacao1.slice(-5); //pega os ultimos cinco caracteres

//substring
//quase como o slice ( -5 não funciona bem)

//indexOf and lastIndexOf - retorna o index da string - assim que achar o primeiro resultado. no caso do lastIndexOf vai retornar o último resultado
const instrumento = "guitarra";
instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); //6

//padStart and padEnd (n, str)
//aumenta o tamanho da string para o valor de n
//o preenchimento é com espaços se não for passado o segundo argumento

const listaPrecos = ["R$99", "R$199", "R$12000"];
listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});
listaPrecos[0].padStart(10, ".");
listaPrecos[0].padEnd(10, ".");

//array
//Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]("Ford");
dados[1][2].cor; // azul

const carros = new Array("Corola", "Mustang", "Honda");

carros[1]; // Mustang
carros[2] = "Ferrari"; //substitui
carros[10] = "Parati"; //cria a array com espacos vazios
carros.length; // 11 tamanho da array

//array.from()
let li = document.querySelectorAll("li"); // NodeList
li = Array.from(li); // Array

const carros1 = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4,
};

const carrosArray = Array.from(carros);

//array.isarray() - verifica se é uma array ou nao
let li1 = document.querySelectorAll("li"); // NodeList
Array.isArray(li1); // false

li = Array.from(li1); // Array
Array.isArray(li1); // true

//Array.of(), Array() e new Array()
Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]

new Array(5); // [,,,,]

Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

const frutas = ["Banana", "pera", ["uva roxa", "uva verde"]];

console.log(frutas.length); //3
console.log(frutas[0].length); //6
console.log(frutas[0]);

//Métodos Modificadores [].sort()
//Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.
const instrumentos1 = ["Guitarra", "Baixo", "Violão"];
instrumentos1.sort(); //organiza por ordem alfabetica
instrumentos1; // ['Baixo', 'Guitarra', Violão]

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort(); //vai de caracter em caracter - pra numeros não é bom
idades; // [1, 12, 21, 32, 33, 43, 8]

//[].unshift() e [].push()
//].unshift() adiciona elementos ao início da array e retorna o length
const carros2 = ["Ford", "Fiat", "VW"];
carros2.unshift("Honda", "Kia"); // 5
console.log(carros2); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

//[].push() adiciona elementos ao final da array e retorna o length
carros2.push("Ferrari"); // 6
console.log(carros2); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

//[].shift() e [].pop()
//[].shift() remove o primeiro elemento da array e retorna o mesmo
const carros3 = ["Ford", "Fiat", "VW", "Honda"];
const primeiroCarro = carros3.shift(); // 'Ford'
carros3; // ['Fiat', 'VW', 'Honda'];

//[].pop() remove o último elemento da array e retorna o mesmo
const ultimoCarro = carros3.pop(); // 'Honda'
carros3; // ['Fiat', 'VW'];

//[].reverse() inverte os itens da array e retorna a nova array.
const carros4 = ["Ford", "Fiat", "VW", "Honda"];
carros4.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];

//[].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index.
//Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens)
const carros5 = ["Ford", "Fiat", "VW", "Honda"];
carros5.splice(1, 0, "Kia", "Mustang"); // []
carros5; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros5.splice(3, 2, "Ferrari"); // ['Fiat', 'VW']
carros5; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

//[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array
["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

//[].fill(valor, inicio, final) preenche a array com o valor, do início até o fim
["Item1", "Item2", "Item3", "Item4"].fill("Banana");
// ['Banana', 'Banana', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']

//Métodos de Acesso [].concat()
//não modificam a array original, apenas retornam uma array modificada

//[].concat() irá concatenar a array com o valor passado
const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, "Van");
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

//[].includes(valor) verifica se a array possui o valor e retorna true ou false
// [].indexOf(valor) verifica se a array possui o valor e retorna o index do PRIMEIRO valor na array
// [].lastIndexOf(valor) retorna o index do ULTIMO
const linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // 2
linguagens.lastIndexOf("js"); // 5

//[].join(separador) junta todos os valores da array e retorna uma string com eles.
//Se passar um valor como parâmetro, este será utilizado durante a junção de cada item da array
console.log(linguagens.join()); // 'html,css,js,php,python'
linguagens.join(" "); // 'html css js php python'
linguagens.join("-_-"); // 'html-_-css-_-js-_-php-_-python'

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1");
// <h1>Título Principal</h1>

//[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice(); //clonar a array!

//exercicios

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];

// Remova o primeiro valor de comidas e coloque em uma variável
const primeiro = comidas.shift();
console.log(primeiro);

// Remova o último valor de comidas e coloque em uma variável
const ultimo = comidas.pop();
console.log(ultimo);

// Adicione 'Arroz' ao final da array
comidas.push("arroz");
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("peixe", "batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);

// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li - utilizando split e join
html = html.split("section").join("ul").split("div").join("li");
console.log(html);

const cars = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carsCopia = cars.slice();
cars.pop();

console.log(cars);
console.log(carsCopia);

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

//repeat - repete a string n vezes
const frasen = "ta";
console.log(frasen.repeat(5));

//replace - pode passar dois valores - troca parte da string por outra
let listaItens = "camisas bones calcas bermudas vestidos saias";

listaItens = listaItens.replace(/[ ]+/g, ", "); // /[]+/g = regular expression - buscando os espaços

let preco = "R$2400,00";
preco = preco.replaceAll(",", "."); //R$2400.00

//split - divide a string de acordo com o padrao passado e retorna uma array
const arrayList = listaItens.split(", ");
console.log(arrayList);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");

console.log(htmlText);
console.log(htmlArray);

const novoHTML = htmlArray.join("section");
console.log(novoHTML);

//toLowerCase and toUpperCase - minusculo e maiusculo
const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true

//str.trim(), str.trimStart(), str.trimEnd() - remover espaços
const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
console.log("exercicios ------------------------");

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$", "");
  if (item.descricao.slice(0, 4) === "Taxa") {
    taxaTotal = taxaTotal + numeroLimpo;
  } else if (item.descricao.slice(0, 4) === "Rece") {
    recebimentoTotal += numeroLimpo;
  }
});

console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a");
console.log(html);

// Retorne o último caracter da frase
const frase3 = "Melhor do ano!";
console.log(frase3[frase3.length - 1]);
console.log(frase3.slice(-1)); //último caracter
console.log(frase3.slice(-2)); //dois últimos caracteres

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase(); //tudo minusculo
  item = item.trim(); //remove espaços em branco do início e do fim da string
  item = item.slice(0, 4);

  if (item === "taxa") taxasTotal++;
  console.log(item);
});
console.log(taxasTotal);

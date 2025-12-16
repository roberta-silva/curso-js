//array iteraçao

//[].forEach(callback(itemAtual, index, array))
// a função de callback é executada para cada item da array.
// Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original)
//forEach retorna undefined
const carros = ["Ford", "Fiat", "Honda"];
carros.forEach(function (item, index, array) {
  console.log(item, index, array);
  console.log(item.toUpperCase());
});
// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

//ARROW FUNCTION
const li = document.querySelectorAll("li");

li.forEach((i) => i.classList.add("ativa"));

li.forEach(function (item) {
  item.classList.add("ativa");
});

//[].map()
//[].map(callback(itemAtual, index, array))
//funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração
const carros1 = ["Ford", "Fiat", "Honda"];
const novaArray = carros1.map((item, index, array) => {
  return item.toUpperCase();
});
console.log(novaArray);
console.log(carros1);

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((n) => n * 2);
console.log(numerosX2);

//[].map() com objetos
const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);
// [15, 10, 20, 25];

const puxarNomes = (aula) => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
//executa a função de callback para cada item da Array.
//acumulador = retorno da iteração anterior
const aulas1 = [10, 25, 30];
const total1 = aulas1.reduce((acumulador, atual) => {
  return acumulador + atual;
});

console.log(total1);

const total2 = aulas1.reduce((acc, cur) => acc + cur, 100);
console.log(total2);

//maior valor com reduce
const numeros1 = [10, 25, 60, 5, 35, 10];
const maiorNumero = numeros1.reduce((anterior, atual) => {
  if (anterior > atual) return anterior;
  else return atual;
});
console.log(maiorNumero);

const maiorNumero1 = numeros1.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
});
console.log(maiorNumero1);

//retornar outros valores com reduce
const classes = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const classList = classes.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {}); //objeto vazio

//[].reduceRight()
//omeça a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita
const frutas = ["Banana", "Pêra", "Uva"];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

console.log(frutasRight); // Uva Pêra Banana
console.log(frutasLeft); // Banana Pêra Uva

//[].some()
//se pelo menos um return da iteração for truthy, ele retorna true
const frutas1 = ["Banana", "Pêra", "Uva"];
const temUva = frutas1.some((fruta) => {
  return fruta === "Uva";
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros2 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros2.some(maiorQue100); // true

//[].every()
//se todos os returns das iterações forem truthy, o método irá retornar true
const frutas2 = ["Banana", "Pêra", "Uva", ""];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas2.every((fruta) => {
  return fruta; // false
});
console.log(arraysCheias);

const numeros3 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros3.every((n) => n > 3); // true
console.log(maiorQue3);

//[].find()
//retorna o valor atual da primeira iteração que retornar um valor truthy
const numeros4 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros4.find((x) => x > 45); // 88

//[].findIndex()
//ao invés de retornar o valor, retorna o index deste valor na array
const frutas3 = ["Banana", "Pêra", "Uva", "Maçã"];
const buscaUva = frutas3.findIndex((fruta) => {
  return fruta === "Uva";
}); // 2

//[].filter()
//retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy
const frutas4 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];
const arrayLimpa = frutas4.filter((fruta) => {
  return fruta;
}); // ['Banana', 'Uva', 'Maçã']

const numeros5 = [6, 43, 22, 88, 101, 29];
const buscaMaior46 = numeros5.filter((x) => x > 46); // [88, 101]

//filter com objeto
const aulas2 = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const aulasMaiores = aulas2.filter((aula) => {
  console.log(aula);
  return aula.min > 15;
});
console.log(aulasMaiores);
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]

//exercicios
console.log("---------------exercicios---------------");
// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
console.log(cursos); //retorna uma nodelist
const arrayCursos = Array.from(cursos); //transforma em array
console.log(arrayCursos);

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  console.log(curso);
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }; //js es6 nao precisa mais passar chave: variavel, se tiver o mesmo nome
});
console.log(objetosCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros6 = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros6.filter((n) => n > 100);
console.log(maioresQue100);

// // Verifique se Baixo faz parte
// // da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const possuiBaixo = instrumentos.some((instrumento) => {
  return instrumento === "Baixo";
});
console.log(possuiBaixo);

// Retorne o valor total das compras
console.log("------------------------------------------");
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
  {
    item: "Arroz",
    preco: "R$ 5,5",
  },
];
//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$", "").replace(",", ".");

  return acumulador + precoLimpo;
}, 0);
console.log(valorTotal);

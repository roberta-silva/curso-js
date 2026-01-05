//rest e spread

//Nem todos os parâmetros são utilizados quando uma função é executada
//Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados

function perimetroForma(lado, totalLados = 4) {
  const argArray = Array.from(arguments);
  argArray.forEach((arg) => {
    console.log(arg);
  });
  console.log(argArray);
  // totalLados = totalLados || 4;
  return lado * totalLados;
}

console.log(perimetroForma(10, 4)); // 40
// console.log(perimetroForma(10)); // NaN // 40

//arguments - palavra chave - objeto array-like criado dentro da funcao
//contem os valores dos argumentos

//rest parameters
// passando ... na frente dos parametros
function anunciarGanahadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou um " + premio);
  });
}

anunciarGanahadores("super prêmio!!", "pedro", "joana", "maria");
//só poder ter um parametro rest por funcao e ele precisa ser o último

//arguments vs rest
//arguments = objeto array-like
//rest = array

//operador spread
//também utiliza ...
//vai distribuir um item iterável, um por um
const legumes = ["cenoura", "beterraba", "batata", "inhame"];
const verduras = ["alface", "espinafre", "couve", "rúcula"];

const alimentos = [...legumes, "arroz", "feijão", ...verduras];
console.log(alimentos);

//O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array
const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread);

//É possível transformar itens iteráveis em uma array real com o spread
const btns = document.querySelectorAll("button");
console.log(btns); //nodelist

const btnsArray = Array.from(btns);
console.log(btnsArray); //array

const btnsArraySpread = [...btns];
console.log(btnsArraySpread); //array

//exercicios
// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = "blue", color = "red") {
  const buttonElement = document.createElement("button");
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton();
console.log(redButton);

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ["Banana", "Uva", "Morango"];
const comidas = ["Pizza", "Batata"];

comidas.push(...frutas)
console.log(comidas)

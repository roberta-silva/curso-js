//setTimeout()
//ativa o callback após tempo
//callback entra na fila e espera pela Call Stack estar vazia

function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 1000, "Depois de 1s");

//com function aninima
setTimeout(function () {
  console.log("função anonima 3 segundos");
}, 3000); //tres segundos

//setTimeout e loop
// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i); //vezes i para que cada um tenha um tempo diferente
// }

//this e Window
//setTimeout é um método do objeto Window
//O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window
const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick() {
  setTimeout(() => {
    this.classList.add("ativo");
  }, 1000);
}

//setInterval(callback, tempo, arg1, arg2, ...)
//ativa o callback toda vez que a quantidade de tempo passar
//como um loop\

function loop(texto) {
  console.log(texto);
}
// setInterval(loop, 300, "300ms");
let i = 0;
const newLoop = setInterval(() => {
  console.log(i++);
  if (i > 10) {
    clearInterval(newLoop);
  }
}, 1000);

//exercicios
// Mude a cor da tela para azul e depois para vermelho a cada 2s.

function mudarClasse() {
  document.body.classList.toggle("active");
}
setInterval(mudarClasse, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", resetarTempo);

let n = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = n++;
  }, 100);
  iniciar.setAttribute("disabled", "");
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled", "");
}

function resetarTempo() {
  tempo.innerText = 0;
  n = 0;
}

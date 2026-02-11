import Countdown from "./countdown.js";

const tempoParaAnoNovo = new Countdown("31 December 2025 23:59:59 GMT-0300");

console.log(tempoParaAnoNovo.days);
console.log(tempoParaAnoNovo.hours);
console.log(tempoParaAnoNovo.minutes);
console.log(tempoParaAnoNovo.seconds);
console.log(tempoParaAnoNovo.total);

setInterval(() => {
  console.log(tempoParaAnoNovo.total);
}, 1000);

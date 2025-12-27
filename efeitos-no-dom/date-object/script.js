//construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais
// A data é baseada no relógio interno do computador.
const agora = new Date();
console.log(agora);

// Semana Mês Dia Ano HH:MM:SS GMT
console.log(agora.getDate()); // Dia
console.log(agora.getDay()); // Dia da Semana ex: 5 = Fri
console.log(agora.getMonth()); // Número dia mês
console.log(agora.getFullYear()); // Ano
console.log(agora.getHours()); // Hora
console.log(agora.getMinutes()); // Minutos
console.log(agora.getUTCHours() - 3); // Brasília

//dias da semana = 0 a 6
//meses de 0 a 11

const futuro = new Date("Dec 31 2026 23:59");
console.log(futuro);

//getTime()
//mostra o tempo total em milessegundos desde 01/01/1970
console.log(agora.getTime()); // ms desde 1970

//trandformar milessegundos em dia
function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

console.log(transformarDias(agora.getTime())); // dias desde 1970
console.log(transformarDias(futuro.getTime())); // dias desde 1970

console.log(diasFuturo - diasAgora); // dias de agora até final do ano - exemplo

//
const teste = [1, 2, 3, 4, 5].indexOf(5); //encontra o index
console.log(teste);
//

//verificar o horario de funcionamento por exemplo
const diasAberto = [1, 2, 3, 4, 5];
const horasAberto = [8, 18];

const diaAtual = new Date(); //data de hoje
const horaAtual = diaAtual.getHours(); //hora atual

const verificaIndex = diasAberto.indexOf(diaAtual); // se for -1 é pq não está na array
const diaAberto = diasAberto.indexOf(diaAtual) !== -1; //verifica se no dia atual está aberto

const horarioAberto = horaAtual >= horasAberto[0] && horaAtual < horasAberto[1];

if (diaAberto && horarioAberto) {
  console.log("Está em horário de funcionamento");
} else {
  console.log("Não está em horário de funcionamento");
}

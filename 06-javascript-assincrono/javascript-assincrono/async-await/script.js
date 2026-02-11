//async = indica que a funcao possui partes assincronas e que vc pretende esperar a resolucao antes de continuar
//await = indica a promise que devemos esperar
//await só deve ir antes de partes que retornam promessas
async function puxarDados() {
  const responseDados = await fetch("./dados.json");
  const jsonDados = await responseDados.json();

  const paragrafo = document.createElement("p");
  paragrafo.innerText = jsonDados[0].aula;
}
puxarDados();

//diferença then e async (sintaxe)

//try / catch
//para lidar com erros nas promises
async function puxarDados1() {
  try {
    const responseDados = await fetch("./dadoss.json");
    const jsonDados = await responseDados.json();

    const paragrafo = document.createElement("p");
    paragrafo.innerText = jsonDados[0].aula;
  } catch (erro) {
    console.log(erro);
  }
}
puxarDados1();

//iniciar fetch ao mesmo tempo
async function iniciarAsync() {
  const dadosResponse = fetch("./dados.json");
  const clientesResponse = fetch("./clientes.json");

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();
}
iniciarAsync();

//await precisa estar antes de uma promise
async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log("Depois de 1s"), 1000);
  console.log("acabou");
}
asyncSemPromise();

async function iniciarAsync() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
  console.log("Depois de 1s");
}
iniciarAsync();

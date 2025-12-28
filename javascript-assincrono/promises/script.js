//JavaScript assincrono
//exemplos
//setTimeout, Ajax, Promises, Fetch, Async

//new Promise()
//promise é uma função construtora de promessas
//ela pode ser resolvida, com a execução do primeiro argumento
//ou rejeitada se o segundo argumento for ativado
const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve("resolveu");
  } else {
    reject("rejeitou");
  }
});
// console.log(promessa);

//then()
//O poder das Promises está no método then() do seu protótipo
//O Callback deste método só será ativado quando a promise for resolvida
//O argumento do callback será o valor passado na função resolve

// promessa.then(function (resolucao) {
//   console.log(resolucao);
// });

//promise faz sentido quando usamos um metodo assincrono dentro dela
//then() retorna um promise, então é possivel usat then() then()

//catch() é para quando a promise for rejeitada

//com arrow function
const promessa1 = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Roberta", idade: 27 });
    }, 1000);
  } else {
    reject(Error("Um erro ocorreu na promise"));
  }
});

const retorno = promessa1
  .then((resolucao) => {
    resolucao.profissao = "Desenvolvedora";
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitada) => {
    console.log(rejeitada);
  })
  .finally(() => {
    console.log("acabou");
  });

console.log(retorno);

//catch() - é possivel passar direto como segundo argumento do then também then(resolve, reject)

//finally() - executa a funcao anonima assim que a promessa acabar
//sera executado independente do resultado

//Promise.all()
//retorna uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada
//A reposta é uma array com as respostas de cada promise

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})

//Promise.race()
//Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada
//Essa nova promise terá a resposta da primeira resolvida
const carregouTudo1 = Promise.race([login, dados]);

carregouTudo1.then((resolucao) => {
  console.log(resolucao)
})

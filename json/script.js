fetch("./dados.json")
  .then((r) => r.json())
  .then((json) => {
    json.forEach((event) => {
      // console.log(event.aula);
    });
  });

//JSON.parse()
//irá transformar um texto JSON em um objeto JavaScript
const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);

//JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON
const configuracao = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};
const stringConfig = JSON.stringify(configuracao);

//exemplo uma lista de configuracoes para add no localStorage
localStorage.config = JSON.stringify(configuracao);
console.log(JSON.parse(localStorage.config));

//Fetch API
//Permite fazermos requisições HTTP
//Este método retorna a resolução de uma Promise
//Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response

const doc = fetch("./doc.txt");

console.log(doc);

doc.then((resolucao) => {
  console.log(resolucao);
});

//O objeto Response, possui um corpo com o conteúdo da resposta
//Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response
//Estes retornam outras promises
doc
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body;
    console.log(body);
  });

//fetch cep json
const cep = fetch("https://viacep.com.br/ws/01001000/json/");

cep
  .then((r) => r.json())
  .then((body) => {
    console.log(body);
    console.log(body.logradouro);
    const cep = document.querySelector(".cep");
    cep.innerText = body.logradouro;
  });

//.text() para definir formatos como txt, json, html, css, js e mais.

//arquivo css
const css = fetch("./style.css");
css
  .then((r) => r.text())
  .then((body) => {
    console.log(body);
    const css = document.querySelector(".css");
    const style = document.createElement("style");
    style.innerHTML = body;
    css.innerText = body;
  });

//HTML e .text()
//Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML.
//A partir dai podemos manipular esses dados como um DOM qualquer
const sobre = fetch("./sobre.html");

const div = document.createElement("div");
sobre
  .then((r) => r.text())
  .then((body) => {
    // console.log(body);
    div.innerHTML = body;
    const titulo = div.querySelector("h1");
    console.log(titulo);
  });

//.blob() - serve para representar um arquivo
//pode ser utilizado para transformarmos requisições de imagens por exemplo
//O blob gera um URL único
const imagem = fetch("./imagem.png");

imagem
  .then((r) => r.blob())
  .then((body) => {
    const blobURL = URL.createObjectURL(body);
    const imagemDom = document.querySelector("img");
    imagemDom.src = blobURL;
  });

//clone()
//transforma uma resposta em diferentes valores
//clonar as respotas
const endereco = fetch("https://viacep.com.br/ws/93180000/json/");

endereco
  .then((r) => {
    const r2 = r.clone();
    r.text().then((text) => {
      console.log(text);
    });
    r2.json().then((json) => {
      console.log(json);
    });
    console.log(r);
  })
  .then((body) => {
    console.log(body);
  });

//.headers - propriedade que possui os cabeçalhos da requisição
//É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.
endereco.then((response) => {
  console.log(response);
  response.headers.forEach(console.log);
});

//.status e .ok
//Retorna o status da requisição.
//Se foi 404, 200, 202 e mais.
// ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.

//.url e .type
//.url retorna o url da requisição. .type retorna o tipo da reposta

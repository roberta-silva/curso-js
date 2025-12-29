//API = Application Programming Interface
//HTTP = Hypertext Transfer Protocol
//HTTPS = Secure = dados criptografados - TLS/SSL
fetch("https://pokeapi.co/api/v2/pokemon/1/")
  .then((r) => r.json())
  .then((pokemon) => {
    // console.log(pokemon);
  });

//URL e METHOD
//uma requisiçao http é feita atraves de uma URL.
//O metodo padrão é o GET
//mas existem outros como POTS, UPDATE, DELETE, HEADER

//POST irá criar uma nova postagem
//utilizando o tipo de conteúdo especificado no headers e utilizando o conteúdo do body
const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "POST",
  body: '{"title: "JavaScript"}',
  header: {
    "Content-Type": "application/json; charset=utf-8",
  },
};
fetch(url, options)
  .then((r) => r.json())
  .then((json) => console.log(json));

//HEAD puxa apenas os headers.
//É uma requisição mais leve pois não puxa o body
const url1 = "https://jsonplaceholder.typicode.com/posts/2";
const options1 = {
  method: "HEAD",
};
fetch(url1, options1).then((response) => {
  console.log(response.headers.forEach(console.log));
});

//GET irá puxar as informações da URL
const url2 = "https://jsonplaceholder.typicode.com/posts/";
fetch(url2, {
  method: "GET",
})
  .then((r) => r.json())
  .then((r) => console.log(r));

//PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body
const url3 = "https://jsonplaceholder.typicode.com/posts/1/";

fetch(url3, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}',
})
  .then((r) => r.json())
  .then((r) => console.log(r));

//CORS
//Cross-Origin Resource Sharing
//gerencia como deve ser o compartilhamento de recursos entre diferente origens
//É possível passar por cima do bloqueio utilizando um proxy
//não é inviolável
const url4 = "https://cors-anywhere.herokuapp.com/https://www.google.com/";
const div = document.createElement("div");

fetch(url4)
  .then((r) => r.text())
  .then((r) => {
    div.innerHTML = r;
    console.log(div);
  });

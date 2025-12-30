//history api
// console.log(window.history);

//é possível modificar a URL atraves do script
//pushState()
window.history.pushState(null, null, "sobre.html");

window.addEventListener("popstate", () => {
  console.log("teste");
});

//fetch e history
const links = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'carregando';
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}
function replaceContent(newText) {
  const newHTML = document.createElement("div");
  newHTML.innerHTML = newText;

  const oldContent = document.querySelector(".content");
  const newContent = newHTML.querySelector(".content");

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHTML.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
  // console.log(window.location.href);
  fetchPage(window.location.href);
  // fetchPage();
});

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});

//função debounce
//serve mais como ajuda para usar em outras funções
//vai colocar a função na fila com setTimeout
// e sempre que ela for ativada vai eliminar a funcao anterior
// ate que voce ative apenas uma de cada vez

function debounce(callback, delay) {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

function onScroll() {
  console.log("teste");
}

const debouncedScroll = debounce(onScroll, 200);

window.addEventListener("scroll", debouncedScroll);

//closures e debugging

//escopo
//uma funcao tem acesso a todas as variaveis criadas em seu escopo e também ao escopo pai
let item1 = 1;

function funcao1() {
  let item2 = 2;
  // debugger;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}
funcao1();

//A funcao2 possui 4 escopos.
//O primeiro escopo é o Local, com acesso ao item3.
//O segundo escopo dá acesso ao item2, esse escopo é chamado de Clojure (funcao1) (escopo de função dentro de função).
//O terceiro escopo é o Script com acesso ao item1 e o quarto escopo é o Global/Window.

//debugging
//É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio VS Code
//Se o código possuir qualquer Web API, o processo deve ser feito no Browser.
//Plugins podem interferir no debug dentro do browser.

//caso classico
function contagem() {
  let total = 0;
  return function incrementar() {
    total++;
    console.log(total);
  }
}

const ativarIncrementar = contagem();
ativarIncrementar(); // 1
ativarIncrementar(); // 2
ativarIncrementar(); // 3


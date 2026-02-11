//CLOSURES E DEBUGGING

//Closure = quando uma função "lembra" das variáveis do escopo onde foi criada,
// mesmo depois que o escopo externo já foi executado

//escopo
//uma função tem acesso a:
// 1- Suas próprias variáveis (escopo local)
// 2- Variáveis do escopo pai (closure)
// 3- Variáveis globais (escopo global)

let item1 = 1; //escopo global

function funcao1() {
  let item2 = 2; //escopo da funcao1
  // debugger;
  function funcao2() {
    let item3 = 3; //escopo da funcao2
    // funcao2 tem acesso a TODOS os escopos:
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}
funcao1();

// ESCOPOS DA FUNCAO2 (4 escopos):
// 1- Local: item3
// 2- Closure (funcao1): item2
// 3- Script/Module: item1
// 4- Global: window, document, etc.

// CLOSURE - CASO CLÁSSICO
// A função interna "lembra" da variável total
function contagem() {
  let total = 0; // variável privada

  return function incrementar() {
    total++; // acessa variável do escopo pai
    console.log(total);
  };
}

const ativarIncrementar = contagem();
ativarIncrementar(); // 1
ativarIncrementar(); // 2
ativarIncrementar(); // 3

// total continua existindo na memória devido ao closure!
// Cada vez que chamamos ativarIncrementar(), ela acessa o mesmo "total"

// MULTIPLOS CLOSURES INDEPENDENTES
const contador1 = contagem();
const contador2 = contagem();

contador1(); // 1
contador1(); // 2
contador1(); // 3

contador2(); // 1 (contador independente)
contador2(); // 2
// Cada chamada de contagem() cria um novo escopo com seu próprio total

// CLOSURE - EXEMPLO PRÁTICO: PRIVACIDADE
function criarConta(saldoInicial) {
  let saldo = saldoInicial; // variável PRIVADA

  return {
    depositar(valor) {
      saldo += valor;
      return saldo;
    },
    sacar(valor) {
      if (saldo >= valor) {
        saldo -= valor;
        return saldo;
      }
      return "Saldo insuficiente";
    },
    consultarSaldo() {
      return saldo;
    },
  };
}

const minhaConta = criarConta(1000);
console.log(minhaConta.depositar(500)); // 1500
console.log(minhaConta.sacar(200)); // 1300
console.log(minhaConta.consultarSaldo()); // 1300
console.log(minhaConta.saldo); // undefined (privado!!!!!)
// Não há forma de acessar "saldo" diretamente - é privado graças ao closure

//debugging
//É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio VS Code
//Se o código possuir qualquer Web API, o processo deve ser feito no Browser.
//Plugins podem interferir no debug dentro do browser.

// 1- CONSOLE.LOG - Básico
function calcular(a, b) {
  console.log("Valores:", a, b); // ver valores
  const resultado = a + b;
  console.log("Resultado:", resultado);
  return resultado;
}

// 2- CONSOLE.TABLE - Para arrays/objetos
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 30 },
];
console.table(usuarios); // exibe tabela no console

// 3- CONSOLE.GROUP - Agrupar logs
console.group("Dados do Usuário");
console.log("Nome: Maria");
console.log("Idade: 28");
console.groupEnd();

// 4- CONSOLE.TIME - Medir performance
console.time("Loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Loop"); // mostra tempo decorrido

// 5- CONSOLE.TRACE - Ver stack trace
function funcaoA() {
  funcaoB();
}
function funcaoB() {
  funcaoC();
}
function funcaoC() {
  console.trace("Caminho até aqui");
}
funcaoA();

// 6- CONSOLE.ASSERT - Verificar condições
const idade = 45;
console.assert(idade >= 18, "Menor de idade!"); // exibe erro se falso

// DEBUGGING - DEBUGGER
function processar(valor) {
  let resultado = valor * 2;

  debugger; // Pausa a execução aqui (Chrome DevTools)

  resultado += 10;
  return resultado;
}

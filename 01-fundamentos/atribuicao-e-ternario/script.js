//operadores de atribuição

//atribuição simples
let numero = 20;

// Atribuição com operação (atalhos)
numero += 10; // numero = numero + 10 → 30
numero -= 5; // numero = numero - 5 → 25
numero *= 2; // numero = numero * 2 → 50
numero /= 5; // numero = numero / 5 → 10
numero %= 3; // numero = numero % 3 → 1
numero **= 2; // numero = numero ** 2 → 1

console.log(numero); // 1

// Exemplos práticos
let x = 5;
let y = 10;

x += y; // x = 15 (5 + 10)
console.log(x); // 15

x -= y; // x = 5 (15 - 10)
console.log(x); // 5

x *= y; // x = 50 (5 * 10)
console.log(x); // 50

x /= y; // x = 5 (50 / 10)
console.log(x); // 5

x %= y; // x = 5 (5 % 10 = 5)
console.log(x); // 5

x **= 2; // x = 25 (5 ** 2)
console.log(x); // 25

//incremento e decremento
let contador = 10;

// Pós-incremento (retorna valor antigo, depois incrementa)
console.log(contador++); // 10
console.log(contador); // 11

// Pré-incremento (incrementa primeiro, depois retorna)
console.log(++contador); // 12
console.log(contador); // 12

// Decremento
console.log(contador--); // 12
console.log(contador); // 11
console.log(--contador); // 10

// Equivalentes
contador += 1; // mesma coisa que contador++
contador -= 1; // mesma coisa que contador--

//operador ternário
//Sintaxe: condição ? valor_se_true : valor_se_false
let idade = 20;
let podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

// Exemplo com números
let nota = 7;
let resultado = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(resultado); // Aprovado

// Ternário com operações
let preco = 100;
let desconto = preco > 50 ? preco * 0.9 : preco;
console.log(desconto); // 90

// Ternário aninhado (evitar, fica confuso)
let pontos = 85;
let conceito =
  pontos >= 90 ? "A" : pontos >= 80 ? "B" : pontos >= 70 ? "C" : "D";
console.log(conceito); // "B"

// Melhor usar if/else para casos complexos
let conceito2;
if (pontos >= 90) {
  conceito2 = "A";
} else if (pontos >= 80) {
  conceito2 = "B";
} else if (pontos >= 70) {
  conceito2 = "C";
} else {
  conceito2 = "D";
}

//operadores lógicos com atribuição
// AND lógico (&&) - retorna o primeiro valor falsy ou o último
let a = true && "texto"; // "texto"
let b = false && "texto"; // false
let c = "olá" && "mundo"; // "mundo" (último truthy)
let d = "" && "texto"; // "" (primeiro falsy)

console.log(a, b, c, d);

// OR lógico (||) - retorna o primeiro valor truthy
let nome1 = "" || "Anônimo"; // "Anônimo"
let nome2 = "Maria" || "Anônimo"; // "Maria"
let numero1 = 0 || 10; // 10
let numero2 = 5 || 10; // 5

console.log(nome1, nome2);

// Uso prático: valores padrão (antes do ES6)
function saudar(nome) {
  nome = nome || "Visitante"; // se nome for falsy, usa "Visitante"
  return `Olá, ${nome}!`;
}

console.log(saudar("João")); // Olá, João!
console.log(saudar()); // Olá, Visitante!

//combinando operadores
let pontuacao = 0;

// Adicionar pontos
pontuacao += 10; // 10
pontuacao += 5; // 15

// Dobrar pontos se passou de nível
let passouDeNivel = true;
if (passouDeNivel) {
  pontuacao *= 2; // 30
}

// Bônus com ternário
let bonus = pontuacao > 20 ? 10 : 5;
pontuacao += bonus; // 40

console.log(`Pontuação final: ${pontuacao}`);

//exercicios
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
let scroll = 1000;
scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
let possuiCarro = true;
let possuiCasa = true;
let darCredito;
darCredito = possuiCarro && possuiCasa;
console.log(darCredito);

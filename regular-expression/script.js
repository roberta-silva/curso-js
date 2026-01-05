//Regular expression
//realiza busca e/ou substituicao de padroes em strings
//devem ser colocados entre / /

const frase = "JavaScript";
const regexp1 = /J/;
const fraseNova = frase.replace(regexp1, "B");
console.log(fraseNova); //jbvascript

//Regexp Constructor - RegExp()
// Se passarmos uma string, não precisamos dos //
// e devemos utilizar \\ para meta characters, pois é necessário
// escapar a \ especial. As Flags são o segundo argumento
const regexpObj1 = new RegExp("\\w+", "gi");
const regexpObj2 = new RegExp(/\w+/, "gi");

"JavaScript Linguagem 101".replace(regexpObj1, "X");
// X X X

// Exemplo complexo:
const regexpTELEFONE1 =
  /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp(
  "(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}",
  "g"
);

//propriedades
const regexp = /\w+/gi;

regexp.flags; // 'gi'
regexp.global; // true
regexp.ignoreCase; // true
regexp.multiline; // false
regexp.source; // '\w+'

//metodos
// regexp.test() verifica se existe ou não uma ocorrência da busca
//começa do index em que parou no último true

const regexp2 = /Java/g;
const frase2 = "JavaScript e Java";

let i = 0;
while (regexp2.test(frase2)) {
  console.log(i++, regexp2.lastIndex);
}

//regexp.exec()
// irá retornar uma Array com mais informações do que apenas um valor booleano
const regexp3 = /\w{2,}/g;
const frase3 = "JavaScript, TypeScript e CoffeeScript";

console.log(regexp3.exec(frase3));
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
console.log(regexp3.exec(frase3));
// ["TypeScript", index: 12, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
console.log(regexp3.exec(frase3));
// ["CoffeeScript", index: 25, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
console.log(regexp3.exec(frase3));
// null
console.log(regexp3.exec(frase3)); // Reinicia
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]

let regexp3Result;
while ((regexp3Result = regexp3.exec(frase3)) !== null) {
  console.log(regexp3Result[0]);
}

//str.match()
//método de strings que pode receber como argumento uma Regexp
//Existe uma diferença de resultado quando utilizamos a flag g
const result = frase3.match(regexp3);
console.log(result); //(3) ['JavaScript', 'TypeScript', 'CoffeeScript']

//str.split()
//distribuirmos uma string em uma array
//Este método irá remover o match da array final
const resultado = frase3.split(/Script/g);
console.log(resultado);

//str.replace()
//permite a utilização de funções de callback para cada match que ele der com a Regexp
const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;
// const regexp0 = /(?<=<\/?)\w+/g;
const regexp0 = /<li/g;

console.log(tags.replace(regexp0, '$& class="ativa"'));

//grupo de captura
const emails = `
joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
`;

const regexpEmail = /(\w+@)([\w.]+)/g;
// const resulta =  emails.replace(regexpEmail, '$1gmail.com $& x');
// console.log(resulta)

//callback
const resulta = emails.replace(regexpEmail, function (...args) {
  console.log(args[2]);
  if (args[2] === "homail.com.br") {
    return args[1] + "hotmail.com.br";
  } else if (args[2] === "ggmail.com.br") {
    return args[1] + "gmail.com.br";
  } else if (args[2] === "oulook.com.br") {
    return args[1] + "outlook.com.br";
  } else {
    return args[0];
  }
});
console.log(resulta);

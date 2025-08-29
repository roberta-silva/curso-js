function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const roberta = new Pessoa("Roberta", 26);
console.log(Pessoa.prototype);

console.log(roberta.prototype); //undefined pq 'roberta' é um objeto e prototype está ligado a função

//é possível adicionar novas propriedades e métodos ao obejto prototype
Pessoa.prototype.andar = function () {
  return this.nome + " Pessoa andou";
};
Pessoa.prototype.nadar = function () {
  return this.nome + " Pessoa nadou";
};
//===
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "abraço";
  };
  this.andar = function () {
    return " andou pelo objeto";
  };
}
//proto
//acessan o mesmo método, mas __proto__ não tera acesso ao this.nome
roberta.andar();
roberta.__proto__.andar(); //não devemos falar com _proto_ diretamente = undefined

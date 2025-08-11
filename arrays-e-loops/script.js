var videoGames = ["Switch", "PS5", "Xbox"];
videoGames[0];
//array é base zero
// videoGames.pop(); //remove o ultimo e o retorna
videoGames.push("3DS"); // adiciona ao final
videoGames.length;

//for loop
for (var numero = 0; numero < 3; numero++) {
  console.log(numero);
}

//while loop (for loop é o mais comum)
var i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// break
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS5") {
    break;
  }
}

//forEach
var frutas = ["pessego", "maça", "pera", "uva"];
frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});

//exercicio
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < brasilCampeao.length; i++) {
  console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);

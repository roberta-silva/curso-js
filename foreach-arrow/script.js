const imgs = document.querySelectorAll("img");
console.log(imgs);

// imgs.forEach(function (img, index, array) {
//   console.log(img, index, array);
// });

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

console.log(titulos);
console.log(titulosArray);

titulosArray.forEach(function (item, index, array) {
  console.log(item, index, array);
});

imgs.forEach((item) => {
  console.log(item);
});

let i = 0;
imgs.forEach(() => console.log(i++));

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item.innerText);
});

console.log(typeof Array);
console.log(typeof Array.from);
console.log(typeof Array.fromm); // undefined = nao existe
console.log(typeof Array.fromm !== "undefined"); //false nao existe
console.log(typeof Array.from !== "undefined"); //true existe

if (typeof Array.fromm !== "undefined") {
  console.log("existe");
} else {
  console.log("nao existe");
}

//native
// Object
// Array
// String
// Function
// Number
// Date

//host
//NodeList
//HTMLCollection
//Element
// Window

//user //qualquer objeto criado ou importado de uma biblioteca externa

//webkit so funciona no chrome

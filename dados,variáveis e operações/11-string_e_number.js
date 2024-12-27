//String

//"Um texto" - string
// 'Criar uma mensagem' - string
// `Cria mais um texto` - string template

// let mensagem = "Olá, mundo!"
let mensagem = "Olá, ";
let nome = "Paulo";
let mensagem3 = "Bem vindo ao curso";
let mensagem2 = `Olá, ${nome}. ${mensagem3}`;

console.log(mensagem + nome + ".Bem vindo ao curso!");
console.log(mensagem2);

//indice = 0
console.log((nome[3] = "Q"));
console.log(nome[3]);

//Number
let numero = 30;
let numero1 = -56;
let decimal = 6.78;
console.log(numero, numero1, decimal);
//Infinity e NaN
let string = "10";
let dez = 10;
// console.log(string + dez);
console.log(`${string} e ${dez}`);

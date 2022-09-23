const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //função usada pra saber se o numero é inteiro.
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 =6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));  //função utilizada para controle de casa decimais.
console.log(media.toString(2)); //funçao utilizada para transformar em numeros bimarios.

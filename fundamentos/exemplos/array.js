const valores = [1, 3, 7, 8, 9, 12, 16 , 18, 22];
console.log(valores[3], valores [5]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores)
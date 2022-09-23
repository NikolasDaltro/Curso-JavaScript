const pessoa = {nome:'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = "Monica"
console.log(pessoa.nome)
console.log(pessoa)
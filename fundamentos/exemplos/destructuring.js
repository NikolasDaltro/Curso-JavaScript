const pessoa = {
    nome: 'Ana',
    idade : 5,
    endereco:{
        logradouro: ' 403 norte', numero: '23'
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {endereco:{logradouro : l, numero: n} } = pessoa
console.log(l ,n)
const aluno = [
    {nome: 'Ana', nota: 7.9},
    {nome: 'Pedro', nota: 8.5}
]

//imperativa
let total1 = 0
for(let i = 0; i < aluno.length; i++){
    total1 += aluno[i].nota
}
console.log(total1 /aluno.length)

//declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = aluno.map(getNota).reduce(soma)
console.log(total2 / aluno.length)
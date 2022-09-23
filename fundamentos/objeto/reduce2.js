const alunos = [
    {nome: 'Luis', notas: 7.4, bolsista:true},
    {nome: 'MAria', notas: 9.2, bolsista: false},
    {nome: 'Aline', notas: 8.9, bolsista: true},
    {nome: 'Pedro', notas: 10, bolsista: true}
]

// 1) desafio, todos os alunos são bolsista? 
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// 2) desafio,algum aluno é bolsista?
const algumBolsista = (resultado,bolsista ) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
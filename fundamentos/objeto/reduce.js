const alunos = [
    {nome: 'Luis', notas: 7.4, bolsista:true},
    {nome: 'MAria', notas: 9.2, bolsista: false},
    {nome: 'Aline', notas: 8.9, bolsista: true},
    {nome: 'Pedro', notas: 10, bolsista: true}
]
const resultado = alunos.map(a => a.notas).reduce(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador + atual
})
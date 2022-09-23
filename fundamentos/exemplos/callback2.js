const notas = [1.5, 7, 6.5, 9, 5.0, 4.0, 2.0]


const notasBaixas = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas)

const notasbaixas2 = notas.filter(nota => nota < 7)
console.log(notasbaixas2)
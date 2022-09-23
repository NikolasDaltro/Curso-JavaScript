const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case  9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovador')
            break
        case 5:
        case 6:
            console.log('Recuperação')
            break
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida')    

    }

}


imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(5.55)
imprimirResultado(2)
imprimirResultado(11)
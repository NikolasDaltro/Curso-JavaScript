// Função sem Retorno
function imprimirSomar(a, b){
    console.log(a + b)
}

imprimirSomar(2, 3)
imprimirSomar(2,3,5,6,10,12,20)
imprimirSomar()

// Função com retorno
function soma (a, b = 0){
    return a + b
}
console.log (soma(2,3))
console.log(soma(2));
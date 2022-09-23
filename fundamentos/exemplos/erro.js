function tratarErroELancar(erro){
    trow new Error('Falha na Operação')
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
}catch{
    tratarErroELancar()
}
}


const obj = {nome:'Roberto'}
imprimirNomeGritado(obj)
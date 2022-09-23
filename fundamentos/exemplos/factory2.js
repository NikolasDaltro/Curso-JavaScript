function criarProduto(){
    return{
        nome:'Mesa',
        preco:'250'
    }
}
console.log(criarProduto())

//correção
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}
console.log(criarProduto('Notebook', 2198.15))
console.log(criarProduto('Ipad', 3550.25))
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil:true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 3.99, fragil: true},
    {nome: 'Copo de Plastico', preco: 4.99, fragil: false}
    
]
console.log(produtos.filter(function(p){
    return false
}))
const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil
console.log(produtos.filter(caro).filter(fragil))
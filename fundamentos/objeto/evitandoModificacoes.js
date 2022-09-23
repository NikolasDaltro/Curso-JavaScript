    const produto = Object.preventExtensions({
        nome:'Qualquer', preco: 1.99 , tag:'promoção'
    })
    console.log('Extensivel:' , Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricap = 'Borracha branca escolar'
delete produto.tag
console.log(produto)
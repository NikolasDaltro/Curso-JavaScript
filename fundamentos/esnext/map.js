const tecnologias = new Map()
tecnologias.set('react', {framework: false}) // extrutura chave valor
tecnologias.set('angular', {framewor: true})

// não funciona se chamar assim
console.log(tecnologias.react)
// funciona se chamar assim
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'], 
    [123, 'Numero'],

])
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
console.log(chavesVariadas.has(123)) // has é pra saber se um elemento está ou não contido dentro do map
console.log(chavesVariadas.size) //size serve para saber quantos elemntos esta atribuido

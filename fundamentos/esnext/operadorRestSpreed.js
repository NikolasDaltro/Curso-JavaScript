// operador rest(juntar)/ spreed(espalhar)
// usar rest com parametro de função

// usar spreed com objeto
const funcionario = { nome: 'Mônica', salario: 1950.91 }
const clone = {ativo: true, ...funcionario} //os tres pontos  é para adicionar no objeto todos os atributos de funcionario
console.log(clone)

// spreed com array
const grupoA = ['Nikolas', 'Rhian', 'Venicio', 'Joao', 'Danilo' ]
const grupoFinal = ['Monica', 'Iury', ...grupoA]
console.log(grupoFinal)
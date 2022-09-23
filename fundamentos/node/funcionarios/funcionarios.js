//não é do exercicio proposto
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//codigo do exercicio proposto
const chineses = f => f.pais ==='China'
const mulheres = f => f.genero  === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual 
}


//não é do exercicio proposto
axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)
    // desafio, encontrar a mulher chinesa com menor salario!
    //faz parte ddo exercicio
    const func =funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

        console.log(func)
})


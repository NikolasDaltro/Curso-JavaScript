const pessoa ={
    nome:'Monica',
    peso: 50,
    altura:1.74
}
console.log(Object.values(pessoa))
console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
    
})
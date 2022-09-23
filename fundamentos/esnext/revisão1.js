//let e const
{
var a = 2
let b = 3

}
//template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

//destruturing
const [l, e, ... tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] // com o espaço no meio de x e y acaba anulando o numero 2
console.log(x,y)

const{idade: i, nome } = {nome:'Ana', idade:9}
console.log(i, nome)
// notação literal
const obj1 = {}
console.log(obj1)

// object js
console.log(typeof Object, typeof new Object)

// Função construtuora
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998, 0.25)

console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

//função factory
function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7200, 4)
const f2 = criarFuncionario('Mônica', 5200, 2)
console.log(f1.getSalario(), f2.getSalario())
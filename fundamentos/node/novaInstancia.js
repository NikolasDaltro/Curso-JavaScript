// uma factory retorna um novo objeto
module.exports = () =>{
    return{ //retornando um objeto
        valor: 1, //com variavel valor
        inc(){  // tendo uma função para incrementar
            this.valor++
        }
    }
}
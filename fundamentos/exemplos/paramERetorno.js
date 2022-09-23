function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitida: ${area}m2`)
    }else{
        return area
    }
}
console.log(area(2, 4, 23,17))
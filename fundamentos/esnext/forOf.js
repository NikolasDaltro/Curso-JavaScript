for (let letra of 'Cod3r'){
    console.log(letra)
}
const assuntoEcma = ['Map', 'Set', 'Promise']

for(let i in assuntoEcma){
    console.log(i)
}
for (let assunto of assuntoEcma){
    console.log(assunto)
}
const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
]) 
for (let assunto of assuntoMap){
    console.log(assunto)
}
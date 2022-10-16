const gulp = require('gulp')
const series = gulp.series

const antes1 = cb =>{
   console.log('Tarefa antesn 1')
    return cb()
}

const antes2 = cb =>{
    console.log('Tarefa antesn 2')
     return cb()
 }
function copiar(cb){
    console.log(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb =>{
    console.log('Tarefa fim! ')
     return cb()
 }

module.exports.default = series( 
    antes1,
    antes2,
    copiar,
    fim,
)

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 1', function(){
    console.log('Executando Tarefa1', new Date().getSeconds())
})
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa1!')
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 15
regra.second = 30

const regra2 = new schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
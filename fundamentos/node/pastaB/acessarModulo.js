const moduloA = require('../moduloa')
console.log(moduloA.ola)

const http = require('http')
const { endianness } = require('os')
http.createServer((req, res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)
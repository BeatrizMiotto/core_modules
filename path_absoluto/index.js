const path = require('path')

//path absoluto

console.log(path.resolve("teste.txt"))

//formar path

const midFolder = "relatorios"
const fileName = "miotto.txt"

const finalpath = path.join("/", 'arquivos', midFolder, fileName)
console.log(finalpath)

const path = require("node:path")

const dir = "src"
const file = "app.js"

//join juntar argumentos e fazer como parte de um caminho
// const fullPath = path.join("src","scripts","arquivo.js")

//ele obtem o nome do caminho do diretorio atual
const fullPath = path.join(__dirname,dir,file)

const relativePath = path.join(".", dir,file)
console.log(fullPath)
console.log('- - - - - - - - ')
console.log(relativePath)
console.log('- - - - - - - - ')
const relativePath1 = "../arquivos/relatorio.pdf"

const absolutePath = path.resolve(__dirname,relativePath1)
console.log(absolutePath)
console.log('- - - - - - - - ')

//ultima parte de um caminho
const fileName = path.basename(relativePath)
console.log(fileName)
console.log('- - - - - - - - ')

//extensão do arquivo
const ext = path.extname(absolutePath)
console.log(ext)


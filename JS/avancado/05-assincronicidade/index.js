function step02(){
    console.log('passo 02')
}
console.log('passo 01')
step02()
console.log('passo 03')
//código assinicro não executa na ordem

console.log('passo 04')
setTimeout(()=>{
    console.log('passo 05')
},1000 * 2)
console.log('passo 06')
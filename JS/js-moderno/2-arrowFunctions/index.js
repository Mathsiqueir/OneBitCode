function normalSum(a, b) {
    return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`)

const anonymousSum = function (a, b) {
    return a + b
}

console.log(`Soma anônima: ${anonymousSum(2, 2)}`)

const arrowSum = (a,b)=> a+b

console.log(`Arrow Soma: ${arrowSum(2,2)}`)

const double = n => `O dobro de ${n} é ${n *2}`
const number = 21
console.log(double(number))

//caso de uso arrow functions high order functions
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startWithP = towns.filter(town => town[0]=== 'P')

console.log(startWithP)
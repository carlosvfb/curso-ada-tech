const prompt = require('readline-sync')

const idade = prompt.question("Qual eh a sua idade?")

const idadeNumber = Number(idade)

console.log(idadeNumber, typeof idadeNumber)

// Converção explicita (Conversão Manual)

console.log(Number("x")) // NaN: Not a Number

console.log(String(10), typeof String(10))

console.log(Boolean(0))

// Correção Implicita

console.log(1 + "1")
console.log("10" + 5)
console.log(10 - "5")
console.log(10 * "5")
console.log(10 / "5")

// Qual seria a saida desse código?
let n = 1 + '1'

n = n - 1

console.log(n)

// Qual seria a saida desse código?
console.log(2 + 3 + 4 + '5') // 2 + 3 = 5 + 4 = 9 + '5' = '95'

// Qual seria a saida desse código?
console.log('5' + 2 + 3 + 4) // '5' + 2 = '52' + 3 = '523' + 4 = '5234'

// Qual seria a saida desse código?
console.log('10' - '4' - '3' - 2 + '5')// '10' - '4' = '6' - '3' = 3 - 2 = 1 + '5' = '15'
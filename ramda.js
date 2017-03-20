const R = require('ramda');

//      *~ Desafio 1 ~*
// Crie uma função "add10" que soma 10 em um número.
const add10 = ___

//      *~ Desafio 2 ~*
// Crie uma função que receba um numero, some 30 depois multiplique o resultado por 2.
const add30multiply2 = ___

//       *~ Desafio 3 ~*
// Crie uma função que receba uma transação e retorne o amount dela.
const transaction = { id: 12345, amount: 5000 }

const amount = ___

//      *~ Desafio 4 ~*
// Dada uma lista de transações, ache a transação com id 1337 e retorne o amount dela;
const transactions = [
  { id: 12345, amount: 2500 },
  { id: 1337, amount: 1500 },
  { id: 2345678, amount: 3550 },
  { id: 54321, amount: 1200 },
]

const find1337 = ___

//      *~ Desafio 5 ~*
// Com a mesma lista acima, crie uma função que some o amount de todas as transações com id maior que 50000.

const sumAmounts = ___

module.exports = { add10, add30multiply2, amount, find1337, sumAmounts, transaction, transactions }
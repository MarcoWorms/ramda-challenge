const { add10, add30multiply2, amount, find1337, sumAmounts, transaction, transactions } = require('./ramda')

describe('Desafio 1', () => {
	test('Crie uma função "add10" que soma 10 em um número.', () => { 
	  expect(add10(15)).toBe(25)
	})
})

describe('Desafio 2', () => {
	test('Crie uma função que receba um numero, some 30 depois multiplique o resultado por 2.', () => {
	  expect(add30multiply2(15)).toBe(90)
	})
})

describe('Desafio 3', () => {
	test('Crie uma função que receba uma transação e retorne o amount dela.', () => {
	  expect(amount(transaction)).toBe(5000)
	})
})

describe('Desafio 4', () => {
	test('Dada uma lista de transações, ache a transação com id 1337 e retorne o amount dela.', () => {
	  expect(find1337(transactions)).toBe(1500)
	})
})

describe('Desafio 5', () => {
	test('Com a mesma lista acima, crie uma função que some o amount de todas as transações com id maior que 50000.', () => {
	  expect(sumAmounts(transactions)).toBe(4750)
	})
})
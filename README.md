# Desafio ramda

## Introdução

Execute as tarefas abaixo utilizando o máximo de ramda que der. Assuma Envie sua resposta como pull request :)

* Documentação do ramda;
http://ramdajs.com/docs/

* Utilizar o REPL do ramda pode facilitar sua vida:
http://ramdajs.com/repl/?v=0.23.0

## Tarefas

* Crie uma função "add10" que some 10 em um número.

* Crie uma função que receba um numero, some 30 depois multiplique o resultado por 2

* Crie uma função que receba uma transação e retorne o amount dela.
```
// Utilize essa transação como entrada da função.
const transaction = { id: 12345, amount: 5000 }
```

* Dada uma lista de transações, ache a transação com id 1337 e retorne o amount dela;
```
// Utilize essa lista como entrada da função:
const transactions = [
  { id: 12345, amount: 2500 },
  { id: 1337, amount: 1500 },
  { id: 2345678, amount: 3550 },
  { id: 54321, amount: 1200 },
]
```

* Com a mesma lista acima, crie uma função que some o amount de todas as transações com id maior que 50000

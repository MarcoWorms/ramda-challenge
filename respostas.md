* Crie uma função "add10" que some 10 em um número.

Resposta:
```
const add10 = add(10)

add10(5) // 15
```

* Crie uma função que receba um numero, some 30 depois multiplique o resultado por 2

Resposta:
```
const add30multiply2 = pipe(
 add(30),
 multiply(2),
)

add30multiply2(11) // 82
```

* Crie uma função que receba uma transação e retorne o amount dela.
```
// Utilize essa transação como entrada da função.
const transaction = { id: 12345, amount: 5000 }
```

Resposta:
```
const transaction = { id: 12345, amount: 5000 }
const amount = prop('amount')

amount(transaction)
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

Resposta:
```
const transactions = [
  { id: 12345, amount: 2500 },
  { id: 1337, amount: 1500 },
  { id: 2345678, amount: 3550 },
  { id: 54321, amount: 1200 },
]
const find1337 = find(propEq('id', 1337))

find1337(transactions)
```

* Com a mesma lista acima, crie uma função que some o amount de todas as transações com id maior que 50000

Resposta:
```
const transactions = [
  { id: 12345, amount: 2500 },
  { id: 1337, amount: 1500 },
  { id: 2345678, amount: 3550 },
  { id: 54321, amount: 1200 },
]
const amount = prop('amount')
const idGreaterThan50000 = propSatisfies(lt(50000), 'id')
const sumAmounts = pipe(
  filter(idGreaterThan50000),
  map(amount),
  sum,
)

sumAmounts(transactions)
```

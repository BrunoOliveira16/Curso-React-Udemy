// Aula 05 - Método Filter
const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n)=> {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: 'Bruno', available: true},
    {name: 'Bianca', available: false},
    {name: 'Bernardo', available: true},
    {name: 'Clara', available: false},
]

const availableUsers = users.filter((user)=> user.available)
const notAvailableUsers = users.filter((user)=> !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)
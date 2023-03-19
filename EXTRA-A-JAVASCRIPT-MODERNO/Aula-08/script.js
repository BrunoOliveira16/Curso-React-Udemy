// Aula 08 - Destructuring
// Destructuring em um array
const fruits = ['Maça', 'Laranja', 'Banana']
const [f1, f2, f3] = fruits

console.log(f1)
console.log(f3)

// Destruturing em um objeto
const productDetails = {
    name: 'Mouse',
    price: 19.99,
    category: 'Perifericos',
    color: 'Branco'
}

const {
    name: productName,
    price,
    category: productCategory,
    color
} = productDetails

console.log(
    `O nome do produto é ${productName} e ele custa R$${price}, pertence a categoria ${productCategory} e a sua cor é ${color}.`
)
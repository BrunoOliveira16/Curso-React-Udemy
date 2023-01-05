// Aula 06 - Map
const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Cafeteira', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 399.99, category: 'Eletro'},
    {name: 'Calça-Jeans', price: 29.99, category: 'Roupas'},
    {name: 'Cordão', price: 99.99, category: 'Cosmético'},
    {name: 'Blusa', price: 15.99, category: 'Roupas'},
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    } else {
        product.onSale = false
    }
})

console.log(products)
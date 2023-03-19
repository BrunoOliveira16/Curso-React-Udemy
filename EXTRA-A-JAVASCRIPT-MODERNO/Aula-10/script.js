// Aula 10 - Classes
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa Preta', 30)
console.log(shirt)

//Aplicando desconto de 10%
const shirtDiscount = new Product (shirt.name, shirt.productWithDiscount(10))

console.log(shirtDiscount)
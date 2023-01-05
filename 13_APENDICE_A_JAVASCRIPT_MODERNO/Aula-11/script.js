// Aula 11 - Herança
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

// Aplicando herança de classes
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores são:')
        this.colors.forEach((color) => {
            console.log(color)
        });
    }
}

// Criando novo objeto com as informações da nova classe
const hat = new ProductWithAttributes('Chapéu', 50, [
    'Preto',
    'Azul',
    'Vermelho'
])

//Visualizando as cores do novo atributo criado
hat.showColors()

// Criando variaveis para os itens do objeto da classe nova
const {
    name,
    price,
    colors
} = hat

//variavel para aplicar o desconto no preço do produto da nova classe
let priceDiscount = hat.productWithDiscount(30)

//Visualizando no console as informação do novo objeto
console.log(hat.name, hat.price, hat.colors)

//Visualizando a aplicação do desconto de forma formal utilizando metodo template literals
console.log(`O valor com desconto do ${name} é de ${priceDiscount} na cor ${colors[1]}`)


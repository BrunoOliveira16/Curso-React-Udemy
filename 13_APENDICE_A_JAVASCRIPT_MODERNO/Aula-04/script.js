// Aula 04 - Arrow functions
const sum = function sum(a, b){
    return a + b
}

// Função de uma linha
const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

// Função com corpo
const greeting = (name) => {
    if (name) {
        return 'Olá ' + name + '!'
    } else {
        return 'Olá!'
    }
}

console.log(greeting('Bruno'))
console.log(greeting())

const testeArrow = () => console.log('Testou!')
testeArrow()

// diferenças para funções anonimas sem arrow function e com arrow function
const user = {
    name: 'Bruno',
    sayUserName() {
        var self = this
        setTimeout(function (){
            console.log(self)
            console.log('Username: ' + self.name)
        }, 500)
    },
    sayUserNameArrow(){
        setTimeout(()=> {
            console.log(this)
            console.log('username: ' + this.name)
        }, 700)
    }
}

user.sayUserName()
user.sayUserNameArrow()
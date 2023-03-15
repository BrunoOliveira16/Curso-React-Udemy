# 📌 Módulo 03: Avançando em React
## ✅ Imagens públicas no React
- As imagens públicas do nosso projeto podem ficar na pasta public;
- De lá podem ser chamadas pelas tags img diretamente pelo ```/nome.jpg```;
- Pois a pasta fica linkada com o src das imagens;

Exemplo:
```
const App = () => {
    return (
        <div className="App">
            <div>
                <img src="/nome.jpg alt="Imagem de cidade" />
            </div>
        </div>
    );
};
```

<br>

## ✅ Imagens em src
- A pasta public pode ser utilizada para colocar imagens, como fizemos na aula passada;
- Mas um padrão bem utilizada para as imagens dos projetos é colocar em uma pasta chamada assets, em src;
- Ou seja, você vai encontrar projetos com as duas abordagens;
- Em assets precisamos importar as imagens, e o src é dinâmico com o nome da importação;

Exemplo:
```
import City from './assets/city.jpg';

const App = () => {
    return (
        <div className="App">
            <div>
                <img src={City} alt="Imagem de cidade" />
            </div>
        </div>
    );
};
```

<br>

## ✅ Oque são hooks?
- Recursos do React que tem diversas funções;
- Como: guardar e alterar o estado de algum dado na nossa aplicação;
- Todos os hooks começam com use, por exemplo: ```useState```
- Podemos criar os nossos hooks, isso é chamado de custom hook;
- Os hooks precisam ser importados;
- Geralmente são úteis em todas as aplicações, utilizaremos diversos ao longo do curso;


<br>

## ✅ useState na prática
- O hook de ```useState``` é um dos mais utilizados;
- utilizamos para gerenciar o estado de algum dado, variáveis não funcionam corretamente, o componente não re-renderiza;
- Para guardar o dado definimos o nome da variável e para alterar vamos utilizar ```setNome```, onde nome é o nome do nosso dado;

Exemplo:
```
import { useState } from 'react';

const ManageData = () => {
    const [number, setNumber] = useState(10);

    return (
        <div>
            <p>Valor: {number}</p>
            <button onClick={()=> setNumber(15)}>Mudar valor</button>
        </div>
    )
}
```

<br>

## ✅ Renderização de Listas
- Uma outra ação bem comum é renderizar listas de dados no template;
- Fazemos isso com os dados com tipo de array;
- Utilizando o método map para nos auxiliar;
- além dos dados podemos inserir JSX em cada iteração;

Exemplo:
```
import { useState} from 'react';

const ListRender = () => {
    const [list] = useState(["Bruno", "Bianca", "Bernardo"])
    const [users] = useState([

    ])

    return (
        <div>
            <ul>
                {list.map((item, i)=> (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender;
```

<br>

## ✅ A propriedade key
- Iterar listas sem a propriedade jey nos gera um warning, podemos verificar isso no console;
- O react precisa de uma chave única em cada um dos items iterados;
- Isso serve para ajúda-lo na renderização do componente;
- Geralmente teremos um array de objetos e podemos colocar key como alguma chave única, como o id de algum dado;
- Em último caso devemos utilizar o index do método map;

Exemplo:
```
import { useState} from 'react';

const ListRender = () => {
    
    const [users] = useState([
        {id: 1, name: 'Bruno', age: 30}
        {id: 167464345, name: 'Bianca', age: 27}
        {id: 137253233, name: 'Bernardo', age: 10}
    ])

    return (
        <div>
            <ul>
                {users.map((user)=> (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender;
```

<br>

## ✅ Previous state
- Previous state é um recurso que nos permite pegar o dado em seu valor original dentro de um set de dado;
- Isso é muito utilizado para modificar listas, pois temos o valor antigo e transformamos em um valor novo;
- O primeiro argumento de um set sempre será o previous state;

Exemplo:
```
import { useState} from 'react';

const ListRender = () => {
    
    const [users, setUsers] = useState([
        {id: 1, name: 'Bruno', age: 30}
        {id: 2, name: 'Bianca', age: 27}
        {id: 3, name: 'Bernardo', age: 10}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Mathe.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {users.map((user)=> (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    )
}

export default ListRender;
```
<br>

## ✅ renderização condicional
- Renderização condicional é quando imprimimos uma parte do template baseado em uma condição;
- Ou seja, utilizando uma checagem com if;
- Isso é interessante em situações como: usuário autenticado/não autenticado;

Exemplo:
```
import { useState } from 'react';

const ConditionalRender = () => {
    const [x] = useState(true);

    return <div>
        <h2>isso será exibido?</h2>
        {x && <p>Se x for true, sim</p>}
    </div>
}

export default ConditionalRender;
```

<br>

## ✅ If e else no JSX
- Podemos também realizar um if/else no JSX;
- Aqui devemos utilizar o if ternário;
- Onde temos a sintaxe: condição ? bloco1 : bloco2

Exemplo:
```
import { useState } from 'react';

const ConditionalRender = () => {
    const [nome] = useState("Bruno");

    return <div>
        <h2>If Ternário</h2>
        {name === "Bruno" ? (
            <div>
                <p>O nome é Bruno</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
}

export default ConditionalRender;
```

<br>

## ✅ Introdução as props
- Props é outro recurso fundamental do React;
- Nos permite passar valores de um componente pai para um componente filho;
- Isso será muito útil quando os dados forem carregados via banco de dados, por exemplo;
- As props vem em um objeto no argumento da função do componente;

Exemplo: No arquivo App.js deve ser chamado o componente e passar o atributo name do componente pai para o componente filho
```
import ShowUserName from './components/showUserName';

function App () {
    return {
        <div className="App">
            <ShowUserName name={Bruno}>
        </div>
    }
}

export default App;
```

Exemplo: No componente deve se colocar o parâmetro na função e chamar o valor com a sintaxe abaixo
```
import React from 'react';

const ShowUserName = (props) => {
    return (
         <div className="App">
            <h2>O nome do usuário: {props.name}</h2>
        </div>
    )
}

export default ShowUserName;
```

<br>

## ✅ Destructuring em props
- É super comum passar mais de uma prop em um componente;
- Para facilitar isso o react nos permite desestruturar as propriedades que chegam, com o recurso de destructuring;
- Se temos duas props: name e age;
- Podemos fazer assim ```function MyComponent({name, age})```
- Agora não precisamos mais utilizar props.algumaCoisa;

Exemplo:
```
import CarDetails from './components/CarDetails';

function App () {
    return {
        <div className="App">
            <CarDetails brand="VW" km={10000} color="prata" />
        </div>
    }
}

export default App;
```

```
import React from 'react';

const CarDetails = ({ brand, km, color }) => {
    return <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>cor: {color}</li>
        </ul>
    </div>
}

export default CarDetails;
```

<br>

## ✅ Reaproveitamento de componentes
- Com props a reutilização de componentes começa a fazer muito sentido;
- Se temos os dados de 1000 carros por exemplo, podemos reaproveitar o nosso CarDetails 1000 vezes;
- Isso torna nosso código mais padronizado, facilitando a manutenção;

Exemplo:
```
import CarDetails from './components/CarDetails';

function App () {
    return {
        <div className="App">
            <CarDetails brand="VW" km={10000} color="prata" newCar={false}/>
            <CarDetails brand="GM" km={20000} color="preto" newCar={true}/>
            <CarDetails brand="Fiat" km={30000} color="vermelho" newCar={false}/>
        </div>
    }
}

export default App;
```

```
import React from 'react';

const CarDetails = ({ brand, km, color, newCar }) => {
    return <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>cor: {color}</li>
        </ul>
        {newCar && <p>Esse carro é novo!</p>}
    </div>
}

export default CarDetails;
```

<br>

## ✅ Renderização de lista em componente
- Os arrays de dados podem ter muitos itens também;
- Então o correto é utilizar uma estrutura de loop(map) para a sua exibição;
- E com isso conseguimos conciliar os três conceitos: renderização de listas, reaproveitamento de componentes e props;

Exemplo: Vamos utilizar o mesmo componente do exemplo anterior carDetails.

```
import CarDetails from './components/CarDetails';

function App () {
    const cars = [
        {id=1, brand="VW", km=10000, color="prata", newCar=false},
        {id=2, brand="GM", km=20000, color="preto", newCar=true},
        {id=3, brand="Fiat", km=30000, color="vermelho", newCar=false}
    ];

    return {
        <div className="App">
            {cars.map((car) => (
                <CarDetails 
                    key={car.id}
                    brand={car.brand}
                    km={car.km} 
                    color={car.color} 
                    newCar={car.newCar}
                />
            ))}
        </div>
    };
};

export default App;
```

<br>

## ✅ React Fragments
- Os reacts fragments são interessantes para quando precisamos ter mais de um elemento pai em um componente;
- Criamos uma tag vazia: ```<>...</>```
- E ela serve como elemento pai, não alterando a estrutura do HTML com uma div, por exemplo;

Exemplo:
```
const Fragment = () => {
    return (
        <>
            <h1>Primeiro Título</h1>
            <h2>Segundo Título</h2>
        </>
    );
};

export default Fragment;
```

<br>

## ✅ A prop Children
- Children prop é um recurso utilizado para quando um componente precisa ter JSX dentro dele;
- Porém este JSX vem do componente pai;
- Então o componente age como um container, abraçando estes elementos;
- E children é considerada uma prop do componente;

Exemplo:
```
const Container = ({ children, myValue }) => {
    return (
        <div>
            <h2>Este é o título do container</h2>
            {children}
            <p>O valor é: {myValue}</p>
        </div>
    );
};

export default Container;
```
Dentro do arquipo app
```
import Container from './components/Container';

function App () {
    return {
        <div className="App" myValue="testing">
            <Container>
                <p>Esse é o conteúdo</p>
            </Container>
        </div>
    }
}

export default App;
```

<br>

## ✅ Função como prop
- As funções podem ser passadas para as props normalmente;
- Basta criar a função no componente pai e enviar como prop para o componente;
- No componente filho ela pode ser ativada por um evento, por exemplo;

Exemplo:
```
import ExecuteFunction from './components/ExecuteFunction'

function App () {
    function showMessage () {
        console.log("Evento do componente pai!");
    }

    return (
        <div className="App">
            <ExecuteFunction myFunction={showMessage} />
        </div>
    )
}
export default App;
```
Código do componente:
```
const ExecuteFunction = ({ myFunction }) => {
    return (
        <div>
            <button onClick={myFunction}>Clique aqui para executar a função</button>
        </div>
    );
};

export default ExecuteFunction;
```

<br>

## ✅ State lift
- Elevação de state ou State lift é quando um valor é elevado do componente filho para o componente pai;
- Geralmente temos um componente que usa o state e outro que o altera;
- Então precisamos passar a alteração para o componente pai, e este passa para o componente que usa o state;

Exemplo:
```
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App () {
    return (
        const [message, setMessage] = useState("");

        const handleMessage = (msg) => {
            setMessage(msg);
        };

        <div className="App">
            <Message msg={ message }/>
            <ChangeMessageState handleMessage={ handleMessage }/>
        </div>
    );
};

export default App;
```

Componente para exibir a mensagem armazenada no useState
```
const Message = ({ msg }) => {
    return (
        <div>
            A mensagem é: {msg}
        </div>
    );
};

export default Message;
```

Componente para alterar o estado do useState, consumindo um array apartir de um evento de click, onde cada botão é referente ao indice de um determinado objeto dentro do array.
```
const ChangeMessageState = ({ handleMessage }) => {
    const messages = ["Oi", "Olá", "Olá, tudo bem?"];

    return (
        <div>
            <button onClick={() => handleMessage(messages[0])}>1</ button>
            <button onClick={() => handleMessage(messages[1])}>2</ button>
            <button onClick={() => handleMessage(messages[2])}>3</ button>
        </div>
    );
};

export default ChangeMessageState;
```
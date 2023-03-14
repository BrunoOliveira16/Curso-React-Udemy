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


<br>

## ✅ Reaproveitamento de componentes


<br>

## ✅ Renderização de lista em componente


<br>
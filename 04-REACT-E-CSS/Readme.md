# 📌 Módulo 04: React e CSS
## ✅ CSS Global
- O CSS global é utilizado para estilizar diversos elementos em comum ou fazer um reset no CSS;
- Utilizaremos o arquivo ```index.css``` para isso;
- Ele está na pasta src;

<br>

## ✅ CSS de componentes
- O CSS de componentes é utilizado para um componente em específico;
- Geralmente é criado um arquivo com o mesmo nome do componente e este é importado no componente;
- Note que este método não é scoped, ou seja, o CSS vaza para outros componentes se houver uma regra em colisão;
- O react já cria um exemplo desta técnica com o App.css/js;

Exemplo: Dentro da pasta components é criado o arquivo js do componente e o css com o mesmo nome e importamos esse css dentro do componente js.
```
import "./MyComponents.css";

const MyComponents = () => {
  return (
    <div>
        <h1>Css de componente</h1>
        <p>Este é o parágrafo do componente</p>
        <p className="my-comp-paragraph">Este tb é do componente</p>
    </div>
  );
};

export default MyComponents;
```
CSS do componente
```
p {
    color: green;
    background-color: #000;
}

.my-comp-paragraph {
    color: #000;
    background-color: gold;
}
```

<br>

## ✅ CSS inline
- O inline style do react é igual o do CSS;
- Por meio do atributo ```style``` conseguimos aplicar regras diretamente em um elemento;
- Devemos optar por outras maneiras de CSS, o inline pode dificultar a manutenção ou deixar o código imprevisível em algumas situações;

Exemplo:
```
function App() {
    return (
        <div className="App">
             <p 
                style={{
                    color: "magenta", 
                    padding: "25px", 
                    borderTop: "2px solid red"
                }}
                >
                Este elemento foi estilizado de forma inline
            </p>
        </div>
    )
}

export default App;
```

<br>

## ✅ CSS inline dinâmico
- O CSS dinâmico inline aplica estilo baseado em uma condicional;
- Vamos inserir no atributo um if ternário;
- Dependendo da condição podemos mudar que regras de estilo um elemento recebe;

Exemplo:
```
import { useState } from 'react';

function App() {
    const n = 15;
    const [name] = useState("Bruno")

    return (
        <div className="App">
            <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
                CSS dinâmico
            </h2>
            <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
                CSS dinâmico
            </h2>
            <h2 style={
                name === "Bruno" 
                ? ({color: "blue", backgroundColor: "#000"}) 
                : null
                }>
                Teste Nome
            </h2>
        </div>
    )
}

export default App;
```

<br>

## ✅ Classes dinâmicas
- Podemos também aplicar lógica para mudar a classe de CSS de um elemento;
- Também utilizaremos o if ternário;
- Essa abordagem é mais interessante que o CSS inline;
- Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de organização de código;

Exemplo: Aqui aplicamos as condições para selecionar uma classe ou outra.
```
function App() {
    const redTitle = true;

    return (
        <div className="App">
            {/* Classes dinâmicas */}
            <h2 className={ redTitle ? "red-title" : "title" }>Este texto vai receber uma classe dinâmica</h2>
        </div>
    )
}

export default App;
```

CSS das classes do exemplo anterior dentro de index.css que é global
```
.red-title {
  background-color: black;
  color: red;
  padding: 15px;
  border: 5px solid red;
}

.title {
  background-color: black;
  color: white;
}

```

<br>

## ✅ CSS Modules
- O CSS Modules é um recurso de CSS scoped;
- Ou seja, ele vair ser exclusivo do componente;
- O nome do arquivo é: ```Componente.module.css```
- Precisamos importá-lo também no componente;

Exemplo: Foi criado o arquivo Title.js e Title.module.css, abixo o codigo dos dois arquivos.
- Title.js
```
import styles from './Title.module.css';

const Title = () => {
  return (
    <div>
        <h1 className={styles.my_title}>Meu título</h1>
    </div>
  );
};

export default Title;
```
- Title.module.css
```
.my_title {
    color: orange;
    background-color: #111;
    padding: 10px;
}
```

Importando o componente criado em App.js
```
import Title from './components/Title'

function App() {
    const redTitle = true;

    return (
        <div className="App">
            {/* CSS Modules */}
            <Title />
        </div>
    )
}

export default App;
```
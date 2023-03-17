# 📌 Módulo 06: Requisições HTTP com React
## ✅ Criando projeto com JSON server
- O JSON server é um pacote npm;
- Ele simula uma API, e isso nos possibilita fazer requisições HTTP;
- Vamos aprender a integrar este recurso com o React;
- Podemos entender isso como uma etapa de preparação para APIs reais;
- Ou seja, atingir o mesmo resultado mas sem precisar de uma estrutura no back-end;

### Criando um projeto e instalando o JSON server:

Inicialmente criamos o projeto react com o comando abaixo no terminal:
```
npx create-react-app modulo06-app
```

Após a criação do projeto, certifique-se de estar dentro da pasta do projeto criado, utilize o comando abaixo, caso seja necesário:
```
cd modulo06-app
```

Para instalar o pacote de API para o nosso servidor, utilize o comando abaixo, dentro da pasta do projeto:
```
npm i json-server
```

Próximo passo será criar uma pasta chamada ```data``` na raiz do projeto e um arquivo dentro dela chamado ```db.json```.

Dentro do arquivo ```db.json``` deverá ser inserido o código abaixo:
```
{
    "products": [
        {
            "id": 1,
            "name": "Camisa",
            "price": 59.9 
        },
        {
            "id": 2,
            "name": "Calça Vermelha",
            "price": 90
        },
        {
            "id": 3,
            "name": "Boné Aba Reta",
            "price": 29.9
        }
    ]
}
```

Após isto, dentro do arquivo package.json iremos criar um script para inicializar nosso servidor que irá rodar os arquivos da nossa API, acessando diretamente a pasta data/db.json.
```
"scripts": {
    "server": "json-server --watch data/db.json"
}
```
> Atenção para a sintaxe do json e posicionamento das vírgulas.

Após a criação do script, utilize o comando abaixo para rodar o servidor:
```
npm run server
```
Iremos acessar o link abaixo para o servidor:
```
Resources
http://localhost:3000/products
```

Inicialize o projeto do react com o comando:
```
npm start
```

Ele irá sugerir que o react rode na porta 3001, uma vez que a API está rodando na porta 3000, de comando ```Y``` no terminal para aceitar e o projeto será inicializado.

<br>

## ✅ A importância do useEffect
- O useEffect faz com que determinada ação seja executada apenas uma vez;
- Isso é interessante pois os componentes estão sempre se re-renderizando, então precisamos ter ações únicas às vezes;
- O useEffect ainda possui um array de dependências, que deve conter os dados que ativem a execução da função de forma automática;
- O useEffect estará presente sempre nas requisições assíncronas!

<br>

## ✅ Resgatando dados da API
- Para trazer os dados vamos ter que utilizar vários recursos;
- Primeiramente ter um local para salvá-los(**useState**);
- Renderizar a chamada a API apenas uma vez(**useEffect**);
- Um meio de fazer a requisição assíncrona(**Fetch API**);

Exemplo: primeiramente iremos importar os hooks que iremos utilizar dentro de App.js:
```
import { useState, useEffect } from 'react';
```

Após iremos criar o useState para armazenar os produtos:
```
function App() {
  const [products, setProducts] = useState([])

  return (
    <div className="App">
    </div>
  );
};

export default App;
```

iremos criar a chamada assíncrona com ajuda do useEffect e Fetch e endereçar nossa url da API:
```
const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();
  
      setProducts(data);
    }
    
    fetchData();

  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
    </div>
  );
};

export default App;
```

Iremos agora criar estrutra html para ser gerada de forma dinâmica, consumindo dados da API:
```
import './App.css';
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();
  
      setProducts(data);
    }
    
    fetchData();

  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$ {product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

<br> 

## ✅ Adicionando dados com react
- Para adicionar um item vamos precisar resgatar os dados do form com o useState;
- Reunir ele em uma função após o submit e enviar um request de POST para a nossa API;
- O processo é bem parecido com o de resgate de dados, mas agora estamos enviando dados;

Exemplo: Primeiro criaremos os states dos itens, com estado incial vazio.
```
const [name, setName] = useState("");
const [price, setPrice] = useState("");
```

após iremos criar um formulário que servirá para adicionar os itens, dentro de App.js:
```
<div className="add-products">
    <form onSubmit={handleSubmit}>
        <label>
        Nome:
        <input 
            type="text" 
            value={name} 
            name="name" 
            onChange={(e)=> setName(e.target.value)} 
        />
        </label>
        <label>
        Preço:
        <input 
            type="text" 
            value={price} 
            name="price" 
            onChange={(e)=> setPrice(e.target.value)} 
        />
        </label>
        <input type="submit" value="criar" />
    </form>
</div>
```

Após a criação do form, iremos criar a função para enviar os dados, e utilizaremos o método POST, para adicionar os dados no arquivo db.json
```
//Adicionando Produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    
  };
```

<br> 

## ✅ Carregamento de dados dinâmico


<br> 

## ✅ Custom hook para resgate de dados


<br> 

## ✅ Refatorando o POST


<br> 

## ✅ Estado de Loading

<br> 

## ✅ Loading no POST

<br> 

## ✅ Tratamento de erros
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
- Se a requisição foi feita com sucesso, podemos adicionar o item a lista após o request;
- Isso torna nossa aplicação mais performática;
- Utilizaremos o set do useState para isso;

Para adicionar o carregamento dinâmico após o envio de dados, adicionamos dentro da função handleSubmit o state de Products e pegamos os dados antigos e criando um novo array com o novo produto, adicionado através de um novo objeto javascipt addedProduct que de forma indireta utilizamos o res.json().

No final criamos um reset para os states de name e price.
```
const addedProduct = await res.json();

setProducts((prevProducts) => [...prevProducts, addedProduct]);

//Resetando os states
setName("");
setPrice("");
```

<br> 

## ✅ Custom hook para resgate de dados
- É normal dividir funções que podem ser reaproveitadas em hooks;
- Esta técnica é chamada de custom hook, e vamos criar um para o resgate de dados;
- Os hooks geralmente ficam na pasta hooks;
- Devemos utilizar o padrão ```useName```;
- Basicamente criamos uma função e exportamos ela;

Primeiro deve-se criar uma pasta chamada hooks dentro de src e dentro dessa pasta, vamos criar o arquivo useFetch.js.

Dentro do arquivo useFetch.js, precisamos importar o useState e useEffect, e criamos nossa função useFetch exportando ela e com a url como parâmetro
```
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    //TODO
}
```

Após a criação da função, vamos criar um state para os dados que serão recebidos, seu estado inicial será null:
```
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
}
```

Agora iremos criar um useEffect, pois desejamos que essa função faça essa requisição uma única vez e colocamos como depêndecia a url, para se caso a url mudar a função ser carregada novamente.
```
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {

    }, [url];)
};
```

Dentro do useEffect, precisamos criar nosso requesição assíncrona para buscar os dados da url, com o padrão fetch:
```
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {

      const fetchData = async () => {

      }
    }, [url];)
};
```
Agora iremos realizar um a request para nossa url, e criamos uma const para receber os dados do tipo json e setamos o setData com esses dados.
```
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {

      const fetchData = async () => {

        const res = await fetch(url);

        const json = await res.json();

        setData(json);

      }
    }, [url];)
};
```
Por final iremos dar o retorno da nossa função fetchData e retornaremos também nossos dados.
```
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {

      const fetchData = async () => {

        const res = await fetch(url);

        const json = await res.json();

        setData(json);

      }

      fetchData();
    }, [url];)

    return { data };
};
```

Agora em App.js iremos importar nosso useFetch e comentar nosso useEffect anteriormente criado:
```
import { useFetch } from './hooks/useFetch';

//useEffect(() => {
  //  async function fetchData() {
  //    const res = await fetch(url);

  //    const data = await res.json();
  
  //    setProducts(data);
  //  }
    
  //  fetchData();

  //}, []);

```

Criamos uma const para nossos dados, utilizando o nosso hook useFetch e renomearemos o data para items:
```
const { data: items } = useFetch(url);
```

Agora no nosso map, iremos substituir products por items e validamos o map para carregar somente quando tiver dados:
```
 <ul>
    {items && items.map((product) => (
      <li key={product.id}>{product.name} - R$ {product.price}</li>
    ))}
  </ul>
```

<br> 

## ✅ Refatorando o POST
- Podemos utilizar o mesmo hook para incluir uma etapa de POST;
- Vamos criar um novo useEffect que mapeia uma outra mudança de estado;
- Após ela ocorrer executamos a adição de produto;
- OBS: nem sempre reutilizar um hook é a melhor estratégia;

O primeiro passo para refatorar o hook, será criando os states abaixo (config, method e callFetch). O ```config``` irá configurar os headers e body, o ```method``` irá dizer qual será o método POS, GET etc e o ```callFetch``` que será utilizado como depêndencia do useEffect para sempre que houver uma alteração ele enviara os dados novamente.
```
const [config, setConfig] = useState(null);
const [method, setMethod] = useState(null);
const [callFetch, setCallFetch] = useState(false);
```
Agora iremos criar um novo useEffect para mapear as config, para quando houver uma alteração na config, chamarmos o useEffect, com isso iremos criar uma nova função chamada de httpRequest e fazemos um check com if para verificar se caso o method for POST, iremos realizar um apanhado das configurações da url e inserir em callFetch.
```
useEffect(() => {

  const fetchData = async () => {
      const res = await fetch(url);

      const json = await res.json();

      setData(json);
  };

  fetchData();
}, [url, callFetch]);

useEffect(() => {

  const httpRequest = async () => {
      if(method === "POST") {
          let fetchOptions = [url, config];

          const res = await fetch(...fetchOptions);

          const json = await res.json();

          setCallFetch(json);
      };
  };
    
  httpRequest();

}, [config, method, url]);

return { data, httpConfig };
```
Agora iremos criar uma função para realizar a configuração e não precisar configurar o state config no componente, com isso iremos criar a httpConfig e ela ira receber os dados de envio e método da requisição e no final ira setar setMethod. Agora iremos exportar a função no nosso return.
```
const httpConfig = (data, method) => {
  if(method === "POST") {
      setConfig({
          method,
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify(data),
      });

      setMethod(method);
  };
};

return { data, httpConfig };
```

Em App.js podemos comentar o código  de ```res``` e chamar o httpConfig com os parâmetros de product e POST

```
 //const res = await fetch(url, {
    //  method: "POST",
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //  body: JSON.stringify(product),
    //});

    //Carregamento dinâmico
    //const addedProduct = await res.json();
    //setProducts((prevProducts) => [...prevProducts, addedProduct]);

    //Resetando os states
    httpConfig(product, "POST");
```

<br> 

## ✅ Estado de Loading
- Quando fizermos requisições para APIs é normal que haja um intervalo de loading entre a requisição e o recebimento da resposta;
- Podemos fazer isso no nosso hook também;
- Identificar quando começa e termina este estado;

Primeiro iremos criar um novo state em useFetch chamado de loading e iniciaremos ele como false, pois não possui nada carregando.
```
const [loading, setLoading] = useState(false);
```

Agora precisamos colocar onde o loading começa e terminar, e com isso iremos colocar o loading no inicio da função fetchData, assim quando ela começar o loading será setado para true.
```
useEffect(() => {
        const fetchData = async () => {

            setLoading(true);

            const res = await fetch(url);

            const json = await res.json();

            setData(json);
        };

        fetchData();
    }, [url, callFetch]);
```

E após alterarmos o estado de setData, que é quando o dados foram obtidos, iremos alterar novamente o estado de loading para false. Por fim iremos retonar esse loading para que ele possa ser consumido por outros componentes.

´´´
useEffect(() => {
  const fetchData = async () => {

      setLoading(true);

      const res = await fetch(url);

      const json = await res.json();

      setData(json);
  };

  fetchData();
  setLoading(false);

}, [url, callFetch]);

return { data, httpConfig, loading };
´´´

Em App.js iremos importar o loading:
```
  const { data: items, httpConfig, loading } = useFetch(url);
```

Agora iremos chamar noso loading com uma validação se caso for true ele irá exibir "carregando dados" e quando o loading for false ele irá exibir a lista.
```
return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {!loading && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
        </ul>
      )}
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
    </div>
  );
};

export default App;
```

<br> 

## ✅ Loading no POST
- Podemos bloquear ações indevidas em outras requests também, como no POST;
- Uma ação interessante é remover a ação de adicionar outro item enquanto o request ainda não finalizou;

Podemos utilizar o loading para criar uma validação no envio, a fim de evitar duplos cliques no botão de envio, e com isso evitando o envio de itens em branco para o banco de dados, segue exemplo abaixo, onde envolvemos o input de envio com chaves e validamos com o state loading quando estiver em true ou false.
```
{loading && <input type="submit" disabled value="aguarde" />}
{!loading && <input type="submit" value="criar" />}
```

<br> 

## ✅ Tratamento de erros
- Podemos tratar os erros das requisições por meio de um try catch;
- Além de pegar os dados do erro, também podemos alterar um state para imprimir um elemento se algo der errado;
- Desta maneira conseguimos prever vários cenários(dados resgatados, carregamento e erro);

Primeiro iremos criar um state para armazenar este erro:
```
const [error, setError] = useState(null);
```

Como exemplo utilizamos um bloco Try/catch dentro do nosso hook, que irá monitorar a busca pela url até o retorno dos dados
```
useEffect(() => {
  const fetchData = async () => {

      setLoading(true);

      try {
          const res = await fetch(url);

          const json = await res.json();

          setData(json);
      } catch (error) {
          setError("Houve algum erro ao carregar os dados")
      }

      setLoading(false);

  };

  fetchData();
}, [url, callFetch]);
```

Com isso iremos dar o return nesse erro para ser utilizado em outros componentes.
```
return { data, httpConfig, loading, error };
```

E podemos inserir como mensagem esse erro conforme exemplo abaixo.
```
return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
        </ul>
      )}
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
          {loading && <input type="submit" disabled value="aguarde" />}
          {!loading && <input type="submit" value="criar" />}
        </form>
      </div>
    </div>
  );
};
```
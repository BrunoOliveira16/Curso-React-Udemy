# 📌 Introdução a API's
## ✅ Oque é API?
- API é um acrônimo para Interface de Programação de Aplicações (Application Programming Interface);
- Uma forma simples de comunicação entre aplicações;
- Não necessita de telas, respostas geralmente são em JSON;
- Independente do front-end, a API não possui ligação com o front;
- Baseadas em requisição e resposta;
- Podemos criar uma API com Express!

<br>

## ✅ A diferença de REST e RESTful
- REST significa Representation State Transfer ou Transferência Representacional de Estado;
- Um estilo de arquitetura, que define como as APIs devem ser criadas;
- Seguindo todos os padrões a API é considerada RESTFUL;
- Alguns dos pontos são: respostas uniformes, sem ligação de estado, cache de respostas e outros;
- Ao longo do curso focaremos em seguir estes padrões!

### Links Utéis:
- https://www.ibm.com/br-pt/cloud/learn/rest-apis

<br>

## ✅ O que é SPA
- SPA significa Single Page Application;
- É quando a aplicação possui um front-end separado do back-end;
- Ou seja, uma API para o back-end;
- E um framework front-end JS, como: React, Vue ou Angular;
- E as sessões seguintes tem como objetivo trabalhar focadas em SPA;
- A arquitetura anteriormente utilizada é conhecida como Monolith;

<br>

## ✅ Verbos HTTP
- Os verbos HTTP andam de mãos dadas com as APIs, e fazem parte do REST;
- Temos métodos como: GET, POST, PUT, DELETE, PATCH e etc;
- É muito importante que as nossas funcionalidades usem os métodos corretos;
- Enviamos o método através da requisição;

<br>

## ✅ Criando a primeira API
- Para criar a API teremos uma tarefa bem simples, comparada a estrutura com Handlebars;
- Basta instalar o Express, ele fará tudo sozinho neste ponto;
- Depois criaremos uma rota que responde em JSON, este é o dado de comunicação entre aplicação e API;
- É importante definir o verbo correto, como GET ou POST, por ex;

Para a criação de nossa API, primeiramente criaremos uma pasta chamada ```primeira_api``` e navegamos para a mesma pelo comando no terminal:
```
cd primeira_api
```

Depois utilizaremos o comando abaixo no terminal, para instalar algumas dependencias.
```
npm init -y
```

Após a criação do nosso arquivo ```package.json```, utilizaremos o comando abaixo para instalação do express:
```
npm install express nodemon
```

Após a instalação, criaremos um script para iniciar nossa API, no arquivo ```package.json```:
```
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon ./index.js localhost 3000"
},
```

Agora iremos criar o arquivo index.js e utilizar o setup basico abaixo, para poder criar uma API:
```
const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.listen(3000)
```

Agora iremos criar nossa primeira rota, para teste.
```
const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas - endpoints
app.get('/', (req, res) => {
    res.json({message: 'Primeira rota criada com sucesso'})
})

app.listen(3000)
```
> para testar utilize o comando no terminal ```npm start``` e depois no navegador digite o endereço: http://localhost:3000/

<br>

## ✅ Instalando o Postman
- O Postman é um client para testes de API;
- Podemos então criar o back-end antes ou separado do front só com a ajuda deste software;
- Como você deve imaginar, é fundamental quando estamos criando APIs;
- Podemos simular verbos, corpo de requisição, inserir headers, tudo que é possível com uma aplicação web;

Link para dowload: https://www.postman.com/downloads/


<br>

## ✅ Testando rota com o postman
- Para acessar uma rota com o Postman precisamos configurar o client;
- Devemos inserir o verbo correto para a rota;
- E também configurar o endpoint, que é a URL onde nossa rota foi estabelecida;
- Enviando a requisição, receberemos a resposta;

<br>

## ✅ Criando rota de POST
- Para criar a rota de POST vamos utilizar o método post do Express;
- Podemos extrair os dados da requisição, acessando req.body;
- Da mesma maneira que no get, podemos retornar uma resposta como JSON pela API;

Nesta etapa, iremos criar uma nova pasta chamada de ```rota_post``` e copiar os mesmos arquivos da pasta primeira_api, porém iremos inserir uma rota de POST e testar com o postman.
```
const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.post('/createproduct', (req, res) => {

    const name = req.body.name
    const price = req.body.price

    console.log(name)
    console.log(price)

    res.json({message: `O produto ${name} foi criado com sucesso!`})
})

// rotas - endpoints
app.get('/', (req, res) => {
    res.json({message: 'Primeira rota criada com sucesso'})
})

app.listen(3000)
```

<br>

## ✅ Status na resposta
- Os status podem ajudar no desenvolvimento da nossa aplicação;
- Exibindo mensagens de sucesso ou erro, por exemplo;
- Precisamos entre res e o método json definir um número de status HTTP;
- Isso é feito por meio do método status;

Link útil: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

Exemplo criado na pasta ```status_na_resposta```
```
const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.post('/createproduct', (req, res) => {

    const name = req.body.name
    const price = req.body.price

    if(!name) {
        res.status(422).json({message: `O campo name é obrigatório!`})
        return
    }

    console.log(name)
    console.log(price)

    res.status(201).json({message: `O produto ${name} foi criado com sucesso!`})
})

// rotas - endpoints
app.get('/', (req, res) => {
    res.status(200).json({message: 'Primeira rota criada com sucesso'})
})

app.listen(3000)
```

<br>

## ✅ A realidade sobre as APIs
- A API é desenvolvida de forma muito semelhante a quando criamos projetos com Handlebars, por exemplo;
- Temos algumas alterações leves, como: resposta apenas por JSON;
- Mas isso acaba até simplificando as coisas, separando as responsabilidades;
- Ou seja, reaproveitamos todo o conhecimento visto durante o curso;


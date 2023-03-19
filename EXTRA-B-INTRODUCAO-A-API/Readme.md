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


<br>

## ✅ Status na resposta


<br>

## ✅ A realidade sobre as APIs



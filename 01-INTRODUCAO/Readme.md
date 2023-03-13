# 📌 Modulo 01: Introdução
## ✅ Oque é React
- React é uma biblioteca JavaScript para desenvolvimento de aplicações front-end;
- Estas aplicações são chamadas de SPA(Single page Application);
- A arquitetura do React é baseada em componentes;
- Pode ser inserido em uma aplicação ou podemos criar a aplicação apenas com React;
- É mantido pelo Facebook;

<br>

## ✅ Oque é Node.js
- O Node.js é uma runtime de JavaScript;
- Ou seja, uma biblioteca utilizada por um compilador durante a execução do programa;
- Que está construida na V8 engine (escrita em C++) da Google;
- Possibilitando criar software em JS no lado do servidor;
- temos então um código JS rodando em C++ para garantir alta performance;

<br>

## ✅ Oque é NPM
- O npm é um gerenciador de pacotes do Node;
- Vamos poder utilizar bibliotecas de terceiros, baixando elas pelo npm;
- E também executar determinados scripts no nosso programa;
- Dificilmente um software em Node.js não utiliza o npm;
- Os módulos externos ficam numa pasta chamada node_modules;
- Ela deve ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente;

<br>

## ✅ Instalação Node Windows
- O download do Node.js é feito no site oficial: **nodejs.org**
- vamos baixar um arquivo .msi, que é o instalador;
- É interessante saber que o npm vem junto do Node;
- Após a instalação podemos testar o Node e o npm em um terminal, para validar a instalação;
- Note que os binários precisamo estar no PATH, este passo está na instalação do Node;


<br>

## ✅ Instalação VS Code
- Ao longo do curso o editor utilizado será o VS Code;
- Ele tem algumas vantagens em trabalhar com Node também, como o terminal integrado;
- Além de ser atualizado constantemente, é mantido pela Microsoft;
- Muito utilizado no ambiente corporativo;

<br>

## ✅ Hello World em React
- Para criar as nossas aplicações em react vamos utilizar um executor de scripts do Node, que é o npx;
- Com o comando: ```npx create-react-app <nome>``` temos uma nova aplicação sendo gerada;
- Podemos iniciar a aplicação cpm ```npm start```;

<br>

## ✅ Estrutura inicial do React
- Há algumas pastas e arquivos chave para o desenvolvimento em react;
- **node_modules:** Onde as dependências do projeto ficam;
- **public:** Assets estáticos e HTML da inicialização;
- **src:** Onde vamos programar as nossas apps;
- **src/index.js:** Arquivo de inicialização do react;
- **src/App.js:** Componente principal da aplicação;

<br>

## ✅ Extensão para React no VS Code
- Há uma extensão no marketplace do VS Code que ajuda muito a programar em react;
- O nome dela é: ES7 + React/Redux/React-Native snippets;
- Conseguimos criar muito código com apenas alguns atalhos;

<br>

## ✅ Configurando o Emmet para React
- Emmet é uma extensão nativa do VS Code que ajuda a escrever HTML mais rápido;
- Porém ela não vem configurada para o react;
- temos que acessar File > Settings > Extensions e procurar por Emmet;
- Lá vamos incluir a linguagem: javascript-javascriptreact;


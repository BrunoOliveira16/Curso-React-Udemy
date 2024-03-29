# 📌 React com TypeScript
## ✅ React com TS
- Adicionar TypeScript ao React nos dá mais possibilidades;
- Seguindo a mesma linha de que em JS, temos uma forma mais padronizada para programar;
- Como tipos para componentes ou mapeamento de props por meio de interface;
- Isso dá mais confiabilidade ao projeto e está sendo cada vez mais utilizado hoje em dia;

<br>

## ✅ Instalando React com TS
- Para isntalar o TS junto do React é simples;
- Vamos começar com ``create-react-app`` e adicionar a flag ``--template`` com o valor de typescript;
- Um novo projeto é criado, agora com arquivos .tsx;
- Podemos inicializá-lo normalmente;

```
npx create-react-app <nome da pasta> --tempate typescript
```

<br>

## ✅ Estrutura de arquivos e pastas
- A estrutura de React quando adicionamos TS não muda muito;
- Temos as pastas clássicas como: node_modules, src e public;
- Em src que as coisas ficam diferentes, temos a criação de arquivos .tsx;
- Que são arquivos jsx porém com a possibilidade das funcionalidades do TS;
- Podemos executar o projeto com ``npm run start``;

<br>

## ✅ Variáveis no React
- Podemos criar variáveis dentro dos componentes;
- E elas podem receber os tipos que já vimos até este momento do curso;
- Isso nos permite trabalhar com JSX com apoio destas variáveis e seus tipos;

<br>

## ✅ Criação de funções em componentes
- Podemos também criar funções em componentes;
- Estas funções recebem parâmetros, que podemos ser tipados;
- E o seu retorno também;
- Ou seja, podemos aplicar os mesmos conceitos que já vimos de TS;

<br>

## ✅ Extensão para React com TS / Criando componente
- A extensão que vamos utilizar é a Typescript React code snippets;
- Ela nos ajuda com atalhos para programar mais rápido;
- Como o ``tsrafce``, que cria um componente funcional;
- Isso torna o nosso dia a dia mais simples;

<br>

## ✅ Importando componentes
- A importação de componente funciona da mesma forma que sem TypeScript;
- Porém temos que nos atentar aos valores e tipos das props de cada componente;
- O TS interage de forma mais sucinta na parte da importação;

<br>

## ✅ Desestruturando props
- O destructuring é um recurso de ES6, que permite separar um array ou objeto em várias variáveis;
- Aplicamos esta técnica nas props, para não precisa repetir o nome do objeto sempre;
- Podemos fazer desta maneira em TS também;

<br>

## ✅ useState com TypeScript
- O useState é um hook muito utilizado em react;
- Serve para consultar e alterar o estado de algum dado;
- Atrelamos uma função set a um evento, como mudança de dado em input e alteramos o valor da variável base;
- Podemos adaptar este recurso para TS também;

<br>

## ✅ Enum
- O Enum é uma forma interessante de formatar um objeto com chaves e valores;
- Onde podemos utilizar como props;
- Passando a chave pela prop, imprimimos o valor dela no componente;

<br>

## ✅ Types
- Além das interfaces, podemos criar estruturas de tipos com o type;
- Isso nos permite criar dados com tipos de dados fixos;
- Ou até tipos customizados, como quando utilizamos o operador |

<br>

## ✅ Context API
- A Context API, é uma forma de transmitir dados entre componentes no React;
- A ideia principal é que podemos determinar quais componentes recebem estes dados;
- Ou seja, fazem parte do contexto;
- Podemos aplicar TS a esta funcionalidade também;

<br>

## ✅ Consumindo o contexto
- Para utilizar os dados do contexto vamos precisar de um hook;
- Que é o useContext;
- A partir dele conseguimos extrair os dados e utilizar em um componente;
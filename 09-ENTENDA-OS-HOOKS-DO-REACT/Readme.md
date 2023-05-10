# 📌 Entenda os Hooks do React
## ✅ Revendo o useState
- O useState é um dos principais hooks do React;
- O principal propósito é gerenciar valores;
- Poderemos consultar um valor e alterar;
- Isso nos permite re-renderizar um componente, o que não acontece com a manipulação de variáveis;

<br>

## ✅ UseState e Inputs
- Atrelando o useState a um input podemos fazer algumas ações;
- Alterações de um state por evento de onChange;
- Limpeza de inputs(Controlled Input);
- Após preenchimento total do form, unir os states e fazer um envio dos dados para o back-end;

<br>

## ✅ useReducer
- O useReducer tem a mesma função que o useState, ele gerencia valores;
- Porém temos a possibilidade de executar uma função na hora da alteração do valor;
- Então temos que o useReducer recebe um valor para gerenciar e uma função para alterar este valor;

<br>

## ✅ useReducer com actions
- Se o useReducer fosse utilizado como no exemplo passado, não teria tanta diferença do useState;
- Por isso o reducer geralmente contém operações mais complexas, utilizando a estrutura switch com actions;
- Esta situação foi apresentada na seção de Context API;

<br>

## ✅ useEffect
- O useEffect é utilizado para várias ações no nosso App, junto com useState é um dos hooks mais utilizados;
- Podemos realizar desde alterações na DOM a requisições HTTP;
- E o grande motivo é: conseguimos controlar quantas vezes algo acontece;
- A sintaxe é formada por uma função a ser executada e um array de dependências;

<br>

## ✅ Array de dependências vazio no useEffect
- Uma estratégia interessante para algumas situações é utilizar o useEffect apenas uma vez;
- Para isso apenas precisamos deixar o array de dependências vazio;
- Ao renderizar o componente a lógica será executada;

<br>

## ✅ Utilizando o Array de dependências do useEffect
- Outra maneira de controlar quando o useEffect será executado é colocando algum item no array de dependências;
- Assim sempre que o item for alterado, teremos o useEffect sendo executado novamente;
- Nos fornecendo um maior controle de quando a função deve ou não ser executada;

<br>

## ✅ Cleanup no useEffect
- Alguns efeitos precisam ter uma técnica de cleanup (limpeza) para garantir o seu funcionamento;
- Não fazer isso pode gerar erros ou comportamentos indesejados;
- Exemplo: um timeout que ao mudar de página pode continuar a ser executado, pela falta desta limpeza;

<br>

## ✅ useContext
- O useContext é o hook utilizado para consumir um contexto, da Context API;
- Vamos precisar criar o contexto e também o Provider;
- Envolver os componentes que receberão os valores compartilhados;
- E então fazer o uso do hook onde necessário;

<br>

## ✅ useRef
- O useRef pode ser utilizado como useState para gerenciar valores;
- A diferença é que ele é um objeto, seu valor está na propriedade current;
- Outra particularidade do useRef é que ele não re-renderiza o componente ao ser alterado, sendo interessante alguns casos;

<br>

## ✅ useRef e DOM
- O useRef pode ser utilizado para selecionar elementos do JSX;
- Com isso podemos fazer manipulação de DOM ou aplicar funções como a focus, que foca no input;
- Este é um outro uso muito interessante para este hook;
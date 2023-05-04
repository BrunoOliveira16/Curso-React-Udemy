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


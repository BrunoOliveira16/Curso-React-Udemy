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

<br>

## ✅ useCallback
- O hook de useCallback pode ser utilizado para duas situações;
- Ele basicamente memoriza uma função, fazendo ela NÃO ser reconstruída a cada renderização de um componente;
- O primeiro caso é quando estamos prezando pela performance, então queremos que uma função muito complexa não seja reconstruída toda vez;
- Já o segundo é quando o próprio React nos indica que uma função deveria estar contida em um useCallback, para evitar problemas de performance;

<br>

## ✅ useMemo
- O useMemo pode ser utilizado para garantir a referência de um objeto;
- Fazendo com que algo possa ser atrelado a uma referência e não a um valor;
- Com isso conseguimos condicionar useEffects a uma variável de maneira mais inteligente;

<br>

## ✅ useLayoutEffect
- Muito parecido com o useEffect;
- A grande diferença é que este hook roda antes de renderizar o componente;
- Ou seja, o hook é síncrono, bloqueando o carregamento da página para o sucesso da sua funcionalidade;
- A ideia é executar algo antes que o usuário veja a página;

<br>

## ✅ useImperativeHandle
- Com o hook useImperativeHandle temos como acionar ações em um outro componente de forma imperativa;
- Como não podemos passar refs como props, precisamos usar uma função fowardRef;
- Isso nos permite passar as referências, e torna o nosso exemplo viável;

<br>

## ✅ React Dev Tools
- React Dev Tools é uma extensão para o navegador;
- Nela conseguimos entender o que o React está gerando por meio do nosso código;
- Conseguimos também verificar os states e outros parâmetros;

<br>

## ✅ useDebugValue
- É um hook que é utilizado para debug;
- Aconselhado para ser utilizado em custom hooks;
- Adiciona uma área no React Dev Tools, ela estará no componente em que o hook é utilizado;
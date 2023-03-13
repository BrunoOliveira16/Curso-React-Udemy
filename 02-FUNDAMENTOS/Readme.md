# 📌 Módulo 02: Fundamentos do React
## ✅ Criando Componentes
- Na maioria dos projetos os componentes ficam em uma pasta chamada components, que devemos criar;
- Geralmente são nomeados com a camel case: FirstComponent.js;
- No arquivo criamos uma função, que contém o código deste componente (a lógica e o template);
- E também precisamos exportar esta função, para reutilizá-lo;

<br>

## ✅ Importando Componentes
- A importação é a maneira que temos de reutilizar o componente;
- Utilizamos a sintaxe: ```import x from './components/x'``` onde x é o nome do componente;
- Para colocar o componente importado em outro componente, precisamos colocá-lo em forma de tag: ```<FirstComponent />```;
- E então finalizamos o ciclo de importação;
- Vamos importar o FirstComponent em App;

<br>

## ✅ Conhecendo o JSX
- JSX é o HTML do React;
- Onde vamos declarar as tags de HTML que serão exibidas no navegador;
- Ficam no return do componente;
- Temos algumas diferenças do HTML, por exemplo: class será className;
- Isso se dá pelas instruções semelhantes de JS e HTML, pois o JSX é JavaScript, então algumas terão nomes diferentes;
- O JSX pode ter apenas um elemento pai;

<br>

## ✅ Comentários nos componentes
- Podemos inserir comentários de duas maneiras no componente;
- Na parte da função, onde é executada a lógica, a sintaxe é: ```// Algum comentário```;
- E também no JSX: ```{/* Algum coméntario */}```
- As chaves nos permitem executar sentenças em Javascript, veremos isso mais adiante;

<br>

## ✅ Template Expressions
- Template Expressions é o recurso que nos permite executar JS no JSX e também interpolar variáveis;
- Isso será muito útil ao longo dos seus projetos em react;
- A sintaxe é: ```{ algumCódigoJS }```
- Tudo que está entre chaves é processado em JavaScript e nos retorna um resultado;

<br>

## ✅ Hierarquia de Componentes
- Os componentes que criamos podem ser reutilizados em vários componentes;
- E ainda componentes podem formar uma hierarquia, sendo importados uns dentro dos outros, como fizemos em App;

<br>

## ✅ Eventos
- Os eventos para o front-end são essenciais;
- Em várias situações vamos precisar do click, como ao enviar formulários;
- No react os eventos já estão 'prontos', podemos utilizar ```onClick``` para ativar uma função ao clicar em um elemento;
- Esta função é criada na própria função do componente;
- As funções geralmente tem o padrão ```handleAlgumaCoisa```;

<br>

## ✅ Funções no Evento
- Quando as funções são simples, podemos realizar a lógica no próprio evento;
- Isso torna nosso código mais 'complicado', por atrelar lógica com HTML;
- Mas em algumas situações é aplicável;

<br>

## ✅ Funções de renderização
- Podemos criar funções que retornam JSX;
- Isso serve para criar situações que dependam de outras condições;
- Ou seja, o JSX a ser renderizado pode variar por alguma variável, por exemplo;

```
const event = () => {
    const renderSomething = (x) => {
        if(x) {
            return <h1>renderizando isso!</h1>
        } else {
            return <h1>também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};

export default Events;
```

<br>


# 📌 Módulo 05: Formulários com React
## ✅ Criando formulários
- No react vamos também utilizar a tag form para formulários;
- As labels dos inputs contém o atributo htmlFor, que deve ter o valor do name do input;
- Não utilizamos action, pois o processamento será feito de forma assíncrona;

Exemplo: Dentro da pasta components, foi criado um arquivo MyForms.js e MyForms.css
```
import './MyForms.css'

const MyForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite seu nome" />
                </div>
                    <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForms;
```
CSS do arquivo criado
```
form {
    width: 500px;
    margin: 0 auto;
    text-align: left;
}

input,
textarea,
select {
    display: block;
    margin-top: 10px;
}
```

<br>

## ✅ Label envolvendo o input
- Em react um padrão comum é a tag label envolvendo o input;
- Isso faz com que o atributo for se torne opcional;
- Simplificando nossa estrutura de HTML, sem perder a semântica;

Exemplo:
```
import './MyForms.css'

const MyForm = () => {
    return (
        <div>
            <form>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite o seu e-mail" />
                </label>
                    <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForms;
```

<br>

## ✅ Gerenciamento de dados de input
- Para manipular os valores dos inputs vamos utilizar o hook useState;
- Ou seja, podemos armazenar na variável e utilizar o set para alterar o valor;
- Vamos criar uma função para alterar o valor no evento ```onChange```;
- Deixando nosso código fácil de trabalhar nas próximas etapas: como envio dos dados para BD e validação;

Exemplo: vamos utilizar os exemplos anteriores criados, para servir de base.
```
import './MyForms.css';
import { useState } from 'react';

const MyForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName}/>
                </div>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite o seu e-mail" />
                </label>
                    <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForms;
```

<br>

## ✅ Alteração de state inline
- Quando temos vários inputs podemos realizar a manipulação de forma mais simples;
- Basicamente criamos uma função inline no onChange;
- Ela vai alterar o valor do state com o método set, da mesma forma que a função isolada;

Exemplo: utilizando o exemplo anterior, modificaremos o campo do e-mail.
```
import './MyForms.css';
import { useState } from 'react';

const MyForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Digite seu nome" 
                        onChange={handleName}
                    />
                </div>
                <label>
                    <span>E-mail:</span>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Digite o seu e-mail" 
                        onChande={(e) => setEmail(e.target.value)} 
                    />
                </label>
                    <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForms;
```

<br>

## ✅ Envio de form
- Para enviar um form vamos utilizar o evento onSubmit;
- Ele chamará uma função, e nesta devemos lembrar de parar a submissão com o preventDefault;
- Nesta etapa podemos realizar validações, envio de form para o servidor, reset de form e outras ações;

Exemplo:
```
import './MyForms.css';
import { useState } from 'react';

const MyForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Digite seu nome" 
                        onChange={handleName}
                    />
                </div>
                <label>
                    <span>E-mail:</span>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Digite o seu e-mail" 
                        onChande={(e) => setEmail(e.target.value)} 
                    />
                </label>
                    <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForms;
```

<br>

## ✅ Controlled inputs
- Controlled inputs é um recurso que nos permite mais flexibilidade nos form de react;
- Precisamos apenas igualar o valor ao state;
- Um uso muito comum: formulários de edição, que os dados vem do back-end, conseguiremos preencher o input mais facilmente;

Exemplo: Dentro de App.js, setamos a props user com os valores a serem controlados como default.
```
import './App.css';
import './components/MyForm';

function App() {
    return (
        <div className="App">
            <h2>Formulário</h2>
            <MyForm user={{ name: "Bruno", email: "bruno@gmail.com"}} />
        </div>
    );
};

export default App;
```

Dentro de MyForm.js, adicionamos a props como parâmetro de MyForm, podemos também adicionar uma condicional dentro de name e email, para preenchimento de dados inicialmente e após é feita a ligação entre o state e value, preenchendo o atributo value nos inputs.
```
import './MyForms.css';
import { useState } from 'react';

const MyForm = ({ user }) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Digite seu nome" 
                        onChange={handleName}
                        value={name}
                    />
                </div>
                <label>
                    <span>E-mail:</span>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Digite o seu e-mail" 
                        onChande={(e) => setEmail(e.target.value)} 
                        value={email}
                    />
                </label>
                    <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForms;
```

<br>

## ✅ Resetando formulários
- Com o controller inputs limpar o form será fácil;
- Basta atribuir um valor de uma string vazia aos states e pronto!
- Isso será feito após o envio, em formulários que o usuário precisa preencher novamente;

Exemplo: utilizando a função handleSubmit criada anteriormente, só precisamos atribuir um valor vazio aos setName e setEmail dentro da função, assim após o envio os valores de state serão atualizados para um valor vazio.
```
const handleSubmit = (event) => {
        event.preventDefault();

        //Limpando dados
        setName('');
        setEmail('');
    }
```

<br>

## ✅ Textarea no react
- O textarea pode ser considerado um input de texto normal;
- Utilizaremos o value para alterar o state inicial;
- E o evento onChange para modificar o valor do state;

Exemplo:
```
const [bio, setBio] = useState(user ? user.bio : "");

const handleSubmit = (event) => {
    event.preventDefault();

    //Limpando dados
    setName('');
    setEmail('');
    setBio('');
}

<form onSubmit={handleSubmit}>
    <label>
        <span>Bio:</span>
        <textarea 
            name="bio" 
            placeholder:"Descrição do usuário" 
            onChange={(e)=> setBio(e.target.value)} 
            value={bio}>
        </textarea>
    </label>
    <input type="submit" value="Enviar" />
</form>
```

<br>

## ✅ Select no react
- O select também será muito semelhante aos outros inputs;
- Quando temos a alteração de um valor o evento onChange pode captar isso;
- O value também pode atribuir qual option estará selecionada;

Exemplo:
```
const [role, setRole] = useState(user ? user.role : "")

const handleSubmit = (event) => {
    event.preventDefault();

    //Limpando dados
    setName('');
    setEmail('');
    setBio('');
    setRole('');
}

<form onSubmit={handleSubmit}>
    <label>
        <span>Função no sistema:</span>
        <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
        </select>
    </label>
    <input type="submit" value="Enviar" />
</form>
```

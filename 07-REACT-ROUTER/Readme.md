# 📌 React Router
## ✅ Oque é React Router?
- React Router é um dos pacotes mais utilizados para criar uma estrutura de rotas em aplicações de React;
- Ou seja, permite que nossas SPAs tenham múltiplas páginas;
- Precisamos instalar no nosso projeto;
- A configuração e utilização é simples;
- Também temos outras funções como: Redirect, Nested Routes, Not Found Routes e outros;

<br>

## ✅ Configurando o React Router
- Para configurar o React Router vamos ter que importar três elementos de react-router-dom;
- BrowserRouter: Define onde a área do nosso app que vai trocar as páginas;
- Routes: Define as rotas;
- Route: um elemento deste para cada rota, configurar com path e componente da rota;

Comando do terminal para instalar o react router:
```
npm i react-router-dom
```

Sintaxe de criação das rotas:
```
import './App.css';

//1- config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
```

<br>

## ✅ Navegação entre páginas
- Para criar links para as páginas vamos precisar utilizar o Link do React Router;
- No Link configuramos os parâmetros to, que recebe a URL/path que será redirecionado quem clicar no link;
- Vamos criar um componente de Navbar para isso;

Sintaxe da tag Link no arquivo Navbar.js:
```
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">Sobre</Link>
  </nav>
  );
};

export default Navbar;
```

Chamando Navbar em App.js
```
// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
```

<br>

## ✅ Carregando dados
- Vamos exercitar novamente o carregamento de dados com nosso hook useFetch;
- Depois poderemos utilizá-los para o carregamento de dados individuais;
- Utilizaremos o hook igual ao da última seção e vamos imprimir os produtos na Home da mesma forma;

<br>

## ✅ Rotas dinâmicas
- Para criar uma rota dinâmica vamos precisar definir uma nova Route em App.js;
- Que deve ter o padrão de: /products/:id
- Onde :id é o dado dinâmico, ou seja, podemos ter qualquer valor;
- Na página podemos utilizar o hook useParams para resgatar esta informação;


<br>

## ✅ Carregamento dinâmico de dados


<br>

## ✅
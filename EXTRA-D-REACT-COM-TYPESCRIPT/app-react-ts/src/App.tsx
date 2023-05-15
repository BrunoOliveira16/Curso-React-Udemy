import './App.css';

// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';

// 6 - useState
import State from './components/State';

function App() {
  // 1 - variáveis
  const name: string = "Bruno";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  };

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Etá trabalhando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destructuring 
        title='Typescript'
        content='Conteúdo sobre desestruturando props em projeto typescript'
        commentsQty={10}
        tags={['Typescript', "JavaScript", "Front-end"]}
      />
      <Destructuring 
        title='Node.js'
        content='Utilizando JavaScript no lado do servidor com o Node.js'
        commentsQty={10}
        tags={['Node.js', "JavaScript", "Back-end"]}
      />
      <State />
    </div>
  );
};

export default App;

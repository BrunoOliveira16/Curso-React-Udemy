import './App.css';

// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

// 10 - Consumindo o Context
import { createContext } from 'react';
import Context from './components/Context';

// 8 - type
type textOrNull = string | null
type fixed = "Isso" | "Olá" | "Aquilo";

// 9 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variáveis
  const name: string = "Bruno";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  };

  // 8 - type
  const myText: textOrNull = "tem algum texto aqui";
  let mySecondtext: textOrNull = null;

  mySecondtext = "Opa";

  const testandoFixed: fixed = "Isso";

  // 9 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  };

  return (
    <AppContext.Provider value={contextValue}>
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
          category={Category.TS}
        />
        <Destructuring 
          title='Node.js'
          content='Utilizando JavaScript no lado do servidor com o Node.js'
          commentsQty={10}
          tags={['Node.js', "JavaScript", "Back-end"]}
          category={Category.N}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondtext && <p>Tem texto na variável</p>}
        <p>Testando o texto type fixed: {testandoFixed}</p>
        <Context />
      </div>
    </AppContext.Provider>
  );
};

export default App;

import './App.css';

function App() {
  // 1 - variáveis
  const name: string = "Bruno";
  const age: number = 30;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Etá trabalhando!</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

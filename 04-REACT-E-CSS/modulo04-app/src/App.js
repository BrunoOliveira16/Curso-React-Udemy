import './App.css';
import {useState} from "react";
import MyComponents from './components/MyComponents';
import Title from './components/Title';
import CarsDetails from './components/CarsDetails';


function App() {
  const n = 15;
  const [name] = useState("Bruno")
  const redTitle = true

  //Desafio CSS
  const cars = [
    {id: 1, brand: "Toyota", color: "Preto", km: 0},
    {id: 2, brand: "Hyundai", color: "Prata", km: 17200},
    {id: 3, brand: "Subaru", color: "Azul", km: 23890},
  ];

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponents />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p 
        style={{
          color: "blue", 
          padding: "25px", 
          borderTop: "2px solid red"
          }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      <p 
        style={{
          color: "magenta", 
          padding: "25px", 
          borderTop: "2px solid red"
          }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS dinâmico
      </h2>
      <h2 style={
        name === "Bruno" 
          ? ({color: "blue", backgroundColor: "#000"}) 
          : null
        }>
        Teste Nome
      </h2>
      {/* Classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este texto vai receber uma classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />

      
      {/* Desafio CSS - Seção 04 */}
      <div class="Title_Cars">
        <h2>Desafio CSS</h2>
        {cars.map((car) => (
            <CarsDetails 
            key={car.id}
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            />
          ))}
      </div>
    </div>
  );
};

export default App;

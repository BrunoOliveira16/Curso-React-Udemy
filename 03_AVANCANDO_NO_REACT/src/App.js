import { useState } from 'react';
import './App.css';
import City from "./assets/city.jpg";
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = "Bianca";
  const [userName] = useState("Bruno");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 15200},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 5890},
  ];

  return (
    <div className="App">
        <h1>Seção 03 - Avançando no React</h1>
        {/* Imagem em public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        {/* Imagem em asset */}
        <div>
          <img src={City} alt="City" />
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name={userName} />
        <ShowUserName name={name} />
        <ShowUserName name="Bruno e Bianca" />
        {/* destructuring */}
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
        {/* reaproveitamento */}
        <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
        <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
          />
        ))};
    </div>
  );
};

export default App;

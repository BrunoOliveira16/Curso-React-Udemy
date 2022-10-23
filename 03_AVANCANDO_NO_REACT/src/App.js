import { useState } from 'react';
import './App.css';
import City from "./assets/city.jpg";
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Bianca";
  const [userName] = useState("Bruno");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 15200},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 5890},
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  //Desafio 04
  const users = [
    {id: 1, nome: "Bruno", idade: 35, profissão: "Engenheiro"},
    {id: 2, nome: "Bianca", idade: 30, profissão: "Contadora"},
    {id: 3, nome: "Ana Clara", idade: 10, profissão: "Estudante"},
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
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
          />
        ))}
        
        {/* fragments */}
        <Fragments propFragments="Teste" />
        
        {/* children */}
        <Container myValue= "Testing">
          <p>E esté é o título!</p>
        </Container>
        <Container myValue= "Testing2">
          <h5>Testando o container!</h5>
        </Container>
        
        {/* executar função */}
        <ExecuteFunction myFunction={showMessage} />
        
        {/* State Lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
        
        {/* desafio 04 */}
        {users.map((user) => (
           <UserDetails
           key={user.id}
           nome={user.nome}
           idade={user.idade}
           profissão={user.profissão}
           />
        ))}
       
    </div>
  );
};

export default App;

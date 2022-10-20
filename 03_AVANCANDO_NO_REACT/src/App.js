import './App.css';
import City from "./assets/city.jpg";
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
        <h1>Seção 03 - Avançando no React</h1>
        {/* Imagem em public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        {/* Imagem em asset */}
        <div>
          <img src={City} alt="City"/>
        </div>
        <ManageData/>
    </div>
  );
}

export default App;

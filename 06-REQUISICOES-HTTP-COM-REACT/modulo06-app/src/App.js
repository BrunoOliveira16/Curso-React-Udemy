import './App.css';
import { useState, /*useEffect*/ } from 'react';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  //const [products, setProducts] = useState([]);

  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  //useEffect(() => {
  //  async function fetchData() {
  //    const res = await fetch(url);

  //    const data = await res.json();
  
  //    setProducts(data);
  //  }
    
  //  fetchData();

  //}, []);

  //Adicionando Produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    //const res = await fetch(url, {
    //  method: "POST",
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //  body: JSON.stringify(product),
    //});

    //Carregamento dinâmico
    //const addedProduct = await res.json();
    //setProducts((prevProducts) => [...prevProducts, addedProduct]);

    //Resetando os states
    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  const handleDelete = async (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
              <button onClick={() => handleDelete(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
      <div className="add-products">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
              type="text" 
              value={name} 
              name="name" 
              onChange={(e)=> setName(e.target.value)} 
            />
          </label>
          <label>
            Preço:
            <input 
              type="text" 
              value={price} 
              name="price" 
              onChange={(e)=> setPrice(e.target.value)} 
            />
          </label>
          {loading && <input type="submit" disabled value="aguarde" />}
          {!loading && <input type="submit" value="criar" />}
        </form>
      </div>
    </div>
  );
};

export default App;

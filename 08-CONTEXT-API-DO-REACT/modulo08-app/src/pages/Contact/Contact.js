import { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext';


const Contact = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Contatos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Contact;
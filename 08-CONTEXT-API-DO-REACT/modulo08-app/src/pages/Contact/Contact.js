//import { useContext } from 'react';
//import { CounterContext } from '../../context/CounterContext';

// 4 - refatorando o hook
import { useCounterContext } from '../../hooks/useCounterContext';

const Contact = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Contatos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Contact;
//import { useContext } from 'react';
//import { CounterContext } from '../../context/CounterContext';

// 4 - refatorando o hook
import { useCounterContext } from '../../hooks/useCounterContext'; 
// 5 - context mais complexo
import { useTitleColorContext } from '../../hooks/useTitleColorContext';


const About = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>Sobre</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About
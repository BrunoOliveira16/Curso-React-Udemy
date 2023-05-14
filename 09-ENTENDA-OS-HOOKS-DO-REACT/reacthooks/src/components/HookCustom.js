import {useState} from 'react';
import {usePrevious} from '../hooks/usePrevious';

const HookCustom = () => {
    const [number, setNumber] = useState(0);
    const previousValue = usePrevious(number);

    return (
        <div>
            <h2>customHook</h2>
            <p>Valor atual: {number}</p>
            <p>Valor anterior: {previousValue}</p>
            <button onClick={() => setNumber(Math.random().toFixed(1))}>Mudar valor</button>
            <hr/>
        </div>
    );
};

export default HookCustom;

import { useEffect, useState } from 'react';

const HookUseEffect = () => {
    // 1 - useEffect, sem dependências
    useEffect(() => {
        console.log("Estou sendo executado!");
    });

    const [ number, setNumber ] = useState(1)
    const handleChangeNumber = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <h2>useEffect</h2>
            <p>Número: {number}</p>
            <button onClick={handleChangeNumber}>Mudar número</button>

            <hr />
        </div>
    );
};

export default HookUseEffect;
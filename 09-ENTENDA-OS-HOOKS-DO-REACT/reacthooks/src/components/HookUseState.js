import React, { useState } from 'react'

const HookUseState = () => {
    let userName = 'Bianca'
    const [ name, setName ] = useState('Bruno');

    const handleChangeName = () => {
        userName = 'Bianca Cristine';
        setName('Bruno Oliveira');
    }

    return (
        <div>
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={handleChangeName}>Mudar nomes</button>

            <hr />

        </div>
    );
};

export default HookUseState;
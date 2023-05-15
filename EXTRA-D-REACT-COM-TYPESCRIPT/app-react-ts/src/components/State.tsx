import { useState, ChangeEvent } from 'react';

const State = () => {
    const [ text, setText ] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <p>O texto é: {text}</p>
            <input type="text" onChange={handleChange} title='input de texto'/>
        </div>
    );
};

export default State;
import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("João")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            {name === "Bruno" ? (
                <div>O nome é {name}</div>
            ) : (
                <div>Nome não encontrado!</div>
            )}
            <button onClick={()=> setName("Bruno")}>Clica aqui!</button>
        </div>
    );
};

export default ConditionalRender

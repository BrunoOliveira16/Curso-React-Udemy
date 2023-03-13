const Challenge = () => {

    let A = 2;
    let B = 6;
    const Resultado = () => {
        console.log(A + B);
    }

    return (
        <div>
            <h2>Valor de A= {A}</h2>
            <h2>Valor de B= {B}</h2>
            <button onClick={(Resultado)}>Clique aqui, Para Somar!</button>
        </div>
    );
};

export default Challenge;
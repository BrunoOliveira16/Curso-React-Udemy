import { useState, useEffect, useMemo } from 'react';

const HookUseMemo = () => {
    const [ number, setNumber ] = useState(0);
    //const premiuNumbers = ["0", "100", "200"];
    
    const premiuNumbers = useMemo(() => {
        return ["0", "100", "200"];
    }, []);

    useEffect(() => {
        console.log("Premium Numbers foi alterado!")
    }, [premiuNumbers]);

    return (
        <div>
            <h2>useMemo</h2>
            <input type='text' onChange={(e) => setNumber(e.target.value)} />
            {premiuNumbers.includes(number) ? <p>Acertou o número</p> : ""}
            <hr />
        </div>
    );
};

export default HookUseMemo;
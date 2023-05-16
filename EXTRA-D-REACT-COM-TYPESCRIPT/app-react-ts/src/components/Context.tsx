import React, { useContext } from 'react';
import { AppContext } from '../App';

const Context = () => {
    const details = useContext(AppContext);
    return (
        <>
            {details && (
                <div>
                    <h2>Consumindo o Context</h2>
                    <p>Linguagem: {details.language}</p>
                    <p>Framework: {details.framework}</p>
                    <p>Projetos: {details.projects}</p>
                </div>
            )}
        </>
    );
};

export default Context;
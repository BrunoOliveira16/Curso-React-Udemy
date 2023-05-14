import { useDebugValue, useEffect, useRef } from 'react';

export const usePrevious = (value) => {
    const ref = useRef();

    {/* aula - useDebugValue */}
    useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE ---");
    useDebugValue("O número anteior é: " + value);

    useEffect(() => {
        ref.current = value;
    });
    
    return ref.current;
};
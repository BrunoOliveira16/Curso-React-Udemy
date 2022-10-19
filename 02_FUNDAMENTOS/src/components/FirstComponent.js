import MyComponents from "./MyComponents";

// arquivo de estilo
const FirstComponent = () => {
    return(
        <div>
            {/* Comentário */}
            <h1>Meu Primeiro Componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponents/>
        </div>
    );
};

export default FirstComponent;
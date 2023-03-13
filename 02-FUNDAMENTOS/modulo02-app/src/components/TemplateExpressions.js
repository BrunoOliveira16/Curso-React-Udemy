import MyComponents from "./MyComponents";

const TemplateExpressions = () => {
    const name = "Bruno";
    const data = {
        age: 31,
        job: "Desenvolvedor Full-Stack",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <h2>Você atua como: {data.job}</h2>
            <h2>Sua idade é: {data.age}</h2>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
            <MyComponents/>
        </div>
    );
};

export default TemplateExpressions;
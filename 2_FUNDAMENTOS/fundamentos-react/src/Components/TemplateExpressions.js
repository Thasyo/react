const TemplateExpressions = () => {

    const name = "Thasyo";
    const data = {

        age:  "19",
        job:  "Web Developer"
    }

    return (

        <div>
            <p>Olá, {name}! Muito Prazer em te conhecer.</p>
            <p>Você atua como: {data.job}</p>
            <p>Sua idade é: {data.age}</p>
            <p>A soma de 4 + 4 = {4+4}</p>
        </div>

    )
}

export default TemplateExpressions;
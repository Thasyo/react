const Challenge = () => {

    const handleSomando = () => {
        let NumberOne = window.document.getElementById('n1');//Acessando os elementos dos inputs.
        let NumberTwo = window.document.getElementById('n2');
        let An1 = Number(NumberOne.value);//Convertendo os elementos dos inputs para Numbers.
        let An2 = Number(NumberTwo.value);
        let sum = An1 + An2;//Após a conversão, calculando o resultado da soma.
        //let effect = window.document.getElementById('result');
        //effect.innerHTML=`${An1} + ${An2} = ${sum}`//Exibindo na tela o resultado.
        console.log(sum)
    }

    return (
        <div>
            <h1>Somando dois valores</h1>
            <input type="number" id="n1"/> +
            <input type="number" id="n2"/>
            <button id="answer" value="somar" onClick={handleSomando}>Somar</button>
            <div id='result'></div>
        </div>
    )
}

export default Challenge;
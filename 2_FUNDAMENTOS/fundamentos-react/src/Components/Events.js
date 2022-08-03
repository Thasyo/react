const Events = () => {

    const handleClicar = () => {
        //window.document.write("Olá 1° Evento!! haha.");
        console.log("Evento funcionando perfeitamente.")
        window.document.body.style.background='aqua';
    }

    const RenderSomeThing = (x) => {//declarando a Função de renderização.

        if (x){
            return <h1>Renderizando isso!</h1>
        }else{
            return <h1>Renderizando isso também!</h1>
        }
    }
    
    return (
        <div>
            <div>{/*Criando evento normal*/}
                <button onClick={handleClicar}>Clique aqui!</button>
            </div>
            <div>{/*Aplicando função do Evento dentro o próprio evento!
                    Mas, o modo inline, deve ter ciência de que quando é
                    muito grande a função do evento, não deve-se utilizar ele.*/}
                <button onClick={() => {console.log('Função no Evento.')}}>Clique aqui também!</button>
            </div>
            <div>{/*não devemos utilizar dessa forma.*/}
                <button onClick={() => {if (true){
                    window.document.body.style.color='purple';
                }}}>Clique uma última vez aqui, por favor! haha</button>
            </div>
            {RenderSomeThing(true)} {/*Colocando a função por renderização para funcionar.*/}
            {RenderSomeThing(false)}
        </div>
    )

}

export default Events;
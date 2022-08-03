import {useState} from 'react'

const ConditionalRender = () => {
  
    const [x] = useState(true)
  
    const [Name, setName] = useState("Juca")

    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>} {/*Condicional Simples.*/}
        <h1>IF Ternário</h1>
        <h2>O nome armazenado é Thasyo?</h2>
        {Name === "Thasyo" ? (
            <div>
                <p>O nome é Thasyo.</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => (setName('Thasyo'))}>Mudar para Thasyo</button>
    </div>
  )
}

export default ConditionalRender
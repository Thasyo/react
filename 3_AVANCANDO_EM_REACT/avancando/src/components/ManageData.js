import {useState} from 'react'

const ManageData = () => {
    let somedata = 10

    console.log(somedata)

    const [Number, setNumber] = useState(15) //Sintaxe do useState.

    console.log(Number)


  return (
    <div>
        <div>
            <p>Valor: {somedata}</p>
            <button onClick={() => {somedata = 15}}>Mudar Variável</button>
        </div>
        <div>
            <p>Valor: {Number}</p>
            <button onClick={() => {setNumber(25)}}>Mudar State</button>
        </div>

    </div>
  )

}

export default ManageData
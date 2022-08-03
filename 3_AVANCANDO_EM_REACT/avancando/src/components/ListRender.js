import {useState} from 'react'

const ListRender = () => {
  
    const [lista, setUsers] = useState([ //Declação de lista com a prop. KEY (USE ESSA FORMA DE UTILIZAÇÃO)
        { id: 1, name: "Janduy", age: 55 },
        { id: 2, name: "Adriana", age: 48 },
        { id: 3, name: "Luana", age: 20 },
    ]);

    const DeleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        
        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

    return (
    <div>
        <ul> {/*Lista com a propriedade "KEY"; Recomendado (USE ESSA FORMA DE UTILIZAÇÃO)*/}
            {lista.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={DeleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender
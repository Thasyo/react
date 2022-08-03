const UserDetails = () => {

    const peoples = [
        {id: 1, name: 'Thasyo', age: 17, job: 'Student'},
        {id: 2, name: 'Janduy', age: 54, job: 'Driver'},
        {id: 3, name: 'Jennyfer', age: 24, job: 'Teacher'}
    ];

    return (
        <div>
            <ul>
                {peoples.map((person) => (
                    <li key={person.id}>
                        <p>Nome: {person.name}</p>
                        <p>Idade: {person.age}</p>
                        <p>Profissão: {person.job}</p>
                        {person.age >= 18 ? (
                            <p>{person.name} pode tirar a <abbr title="Carteira Nacional de Habilitação">CNH</abbr>.</p>
                        ) : (
                            <p>{person.name} <strong>não</strong> pode tirar a <abbr title="Carteira Nacional de Habilitação">CNH</abbr>.</p>
                        )}
                    </li>
                ))}
            </ul>
            

        </div>
  )

}

export default UserDetails
const UsersDetails02 = ({name, age, job}) => {

    return (
    <div>
        <h1>{name}</h1>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18 ? (
            <p>{name} pode tirar a carteira de habilitação.</p>
        ) : (
            <p>{name} é menor de idade, então não pode tirar a carteira de habilitação.</p>
        )}
    </div>
  )

}

export default UsersDetails02
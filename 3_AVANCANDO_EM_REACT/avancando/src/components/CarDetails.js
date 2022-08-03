const CarDetails = ({marca, color, km, newCar}) => {
  const novo = true;
  return (
    <div>
      <h1>Detalhes do Carro</h1>
        <ul>
            <li>CARRO: {marca}</li>
            <li>COR: {color}</li>
            <li>KM: {km}</li>
        </ul>
        {newCar === novo ? (
          <div>
            <p>Este Carro é Novo!</p>
          </div>
        ) : (
          <div>
            <p>Este carro é Usado!</p>
          </div>
        )}
    </div>
  )
}

export default CarDetails
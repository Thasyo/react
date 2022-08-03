import './App.css';
import CarsDetails from './Components/CarsDetails';

function App() {

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'vermelha', year: '2015'},
    {id: 2, brand: 'Porsche', color: 'branca', year: '2021'},
    {id: 3, brand: 'Fusca', color: 'azul', year: '1965'}
  ]

  return (
    <>
      <h1>Carros dos sonhos de todo ser humano</h1>
      {cars.map((car) => (
        <CarsDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          year={car.year}
        />
      ))}
      
    </>
    
  );

}

export default App;

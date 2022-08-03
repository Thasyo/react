import './App.css';
import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import {useState} from 'react'
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteMyFunction from './components/ExecuteMyFunction';
import ChangeMessageState from './components/ChangeMessageState';
import Message from './components/Message';
import UserDetails from './components/UserDetails';
import UsersDetails02 from './components/UsersDetails02';

function App() {
  //const name = 'João'
  const [userName] = useState('Jurema')

  const cars = [
    {id: 1, brand: "FERRARI", color: 'VERMELHA', km: 912783, newCar: false},
    {id: 2, brand: "ONIX", color: 'BRANCA', km: 0, newCar: true},
    {id: 3, brand: "PARATI" , color: 'AZUL', km: 2134, newCar: false}
  ]

    const showMessage = () => {
      console.log("Executando função na props.")
    }

    const [message, setMessage] = useState("Opa!");

    const handleMessage = (msg) => {
      setMessage(msg);
    }

    const users = [
      {id: 1, name: 'Maria', age: 17, job: 'Student'},
      {id: 2, name: 'Ricardo', age: 25, job: 'Developer'},
      {id: 3, name: 'João', age: 19, job: 'Driver'}
    ];

  return (
    <div className="App">
      <h1>Iniciando a Seção "Avançando em REACT"</h1>
      {/* Colocando imagens em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/*Colocando imagens em Assets*/}
      <div>
        <img src={City} alt="Cidade de noite" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* PROPS */}
      <ShowUserName name={userName}/>
      {/* DESESTRUCTURING */}
      <CarDetails marca='VW' color='AZUL' km={150000} newCar={false}/>
      {/* REAPROVEITAMENTO DE COMPONENTES */}
      <CarDetails marca='FIAT' color='VERMELHO' km={0} newCar={true}/>
      <CarDetails marca='CHEVROLET' color='BRANCO' km={540} newCar={false}/>
      {/*LOOP EM ARRAY DE OBJETOS */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}
        />
      ))}
      {/* FRAGMENTOS */}
      <Fragment hum='teste'/>
      {/* PROPS CHILDREN */}
      <Container MyValue = ' Testing.. '>
          <p>Este é o conteúdo</p>
      </Container>
      <Container MyValue = ' Testing.. '>
          <p>testando 05</p>
          <p>Este é o conteúdo</p>
      </Container>
      {/* EXECUTAR FUNÇÃO */}
      <ExecuteMyFunction myfunction={showMessage}/>
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Como eu fiz o desafio 04 */}
      <UserDetails/>
      {/* Como o prof fez o desafio 04 */}
      {users.map((user) => (
        <UsersDetails02 
          key={user.id}
          name={user.name} 
          age={user.age} 
          job={user.job}/>
      ))}
    </div>
  );
}

export default App;

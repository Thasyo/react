
import './App.css';
import NewComponent from './components/NewComponent';
import {useState} from 'react';
import Title from './components/Title';

function App() {

  const n = 10

  const [name] = useState('Thasyo')

  const valor = true;

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS DE COMPONENT */}
      <NewComponent />
      <p>Este parágrafo é do App.ls</p>
      {/* INLINE STYLE */}
      <p style={{padding: "20px", color: "magenta", backgroundColor: "aqua"}}>esse parágrafo esta estilizado em modo <strong>inline</strong></p>
      {/* INLINE DINAMIC STYLE */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"} }>CSS dinâmico</h2>
      <h2 style={n === 10 ? {color: "purple"} : {color: "pink"} }>CSS dinâmico</h2>
      <h2 style={name === 'Thasyo' ? {backgroundColor: "aquamarine", border: "5px solid black"} : {}}>NAME</h2>
      {/* CLASSES DINÂMICAS NO CSS */}
      <h2 className={valor ? "blue-title" : "title"}>CLASSES DINÂMICAS (CSS)</h2>
      {/* CSS MODULES */}
      <Title/>   
      <h1 className='title'>Tem nem perigo mais hehehe
      </h1>
    </div>
  );
}

export default App;

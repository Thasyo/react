import './App.css';

import MyForm from './Components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Formulário</h1>
      <MyForm user={{name: 'Luana', email: 'lunalindinha@gmail.com', bio: 'Eu sou Programadora', language: 'React'}}/> {/* usando 'controlled inputs' */}
    </div>
  );
}

export default App;

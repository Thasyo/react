//import Styles
import './App.css';
//import Components
import FirstComponent from "./Components/FirstComponent";
import Events from './Components/Events';
import Challenge from './Components/Challenge';


function App() {
  return (
    <div className="App">

      <h1>Fundamentos REACT</h1>
      <FirstComponent/> {/*essa é a forma que podemos comentar no JSX.*/}
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;

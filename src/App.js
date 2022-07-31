import Nabvar from "./components/navbar/Nabvar";
 import './App.css'
import Intro from "./components/Intro/Intro";
import Services from "./components/services/Services";
 
 function App() {
  return (
    <div className="App">
      <Nabvar />
      <Intro />
      <Services />
    </div>
  );
}

export default App;

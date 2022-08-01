import Nabvar from "./components/navbar/Nabvar";
 import './App.css'
import Intro from "./components/Intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/Experience/Experience";
 
 function App() {
  return (
    <div className="App">
      <Nabvar />
      <Intro />
      <Services />
      <Experience />
    </div>
  );
}

export default App;

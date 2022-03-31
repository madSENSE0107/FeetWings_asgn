import './App.css';
import Navbar from './components/Navbar';
import ShowCareer from './ShowCareer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCareer from './CreateCareer';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<ShowCareer/>} />
              
        <Route path='/CreateCareer'  element={<CreateCareer/>} />
       
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;

import Navbar from './navbar';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Navbar />}/>
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

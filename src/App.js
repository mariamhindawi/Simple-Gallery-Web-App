import Home from './home';
import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from './details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/:id" element={<Details />} />
    
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

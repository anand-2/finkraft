import logo from './logo.svg';
import './App.css';
import './form.css';
import Home from './Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from './Grid';






function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>}  />
      <Route  path="/grid" element={<Grid />}  />
       
    </Routes>
    </BrowserRouter>
  )
}

export default App;

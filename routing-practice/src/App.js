import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./components/Welcome";
import Var from "./components/Var";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element = {<Welcome />} path = "/home"/>
        <Route element = {<Var />} path = "/:word"/>
        <Route element = {<Var />} path = "/:word/:color/:bgColor"/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

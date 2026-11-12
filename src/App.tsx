import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Autor from "./pages/autor/Autor";
import Cardapio from "./pages/cardapio/Cardapio";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/autor" element={<Autor />} />
          <Route path="/" element={<Cardapio />} />
        </Routes>
      </Router>   
  )
}

export default App;


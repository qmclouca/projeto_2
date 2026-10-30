import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Autor from "./pages/autor/Autor";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Autor />} />
        </Routes>
      </Router>   
  )
}

export default App;


import './App.css';
import Navbar from './pages/navbar.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



import Home from "./pages";
import Calendar from './pages/calendar';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
    </Router>

  );
}

export default App;

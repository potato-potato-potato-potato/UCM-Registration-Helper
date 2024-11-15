import './App.css';
import Navbar from './pages/navbar.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



import Home from "./pages";
import Calendar from './pages/calendar';
import Planner from './pages/planner';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/planner' element={<Planner/>} />
      </Routes>
    </Router>

  );
}

export default App;

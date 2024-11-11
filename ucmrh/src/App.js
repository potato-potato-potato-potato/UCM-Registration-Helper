import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LogoButton from './logoButton.js'


import Home from "./pages";
import Calendar from './pages/calendar'

function App() {
  return (
    <Router>
      <LogoButton />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
    </Router>

  );
}

export default App;

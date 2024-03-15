
import './App.css';
import Home from './containers/Home/home';
import Therapy from './containers/Therapy/therapy';
import Level1 from './containers/level1/level1';
import NavbarComponent from './components/Navbar/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/level1" element={<Level1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

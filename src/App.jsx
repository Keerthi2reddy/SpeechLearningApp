
import './App.css';
import Home from './containers/Home/home';
import Therapy from './containers/Therapy/therapy';
import Level1 from './containers/level1/level1';
import Level2 from './containers/level2/level2';
import Level2_1 from './containers/level2_1/level2_1';
import Passage from './containers/passage/passage';
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
          <Route path="/level2" element={<Level2 />} />
          <Route path="/level2_1" element={<Level2_1 />} />
          <Route path="/passage" element={<Passage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';
import Nic from './Components/Nic';
import Projects from './Components/Projects';
import EventSlider from './Components/Sliders/EventSlider';
import Updates from './Components/Updates';
import Home from './Components/Home';
import Achievements from './Components/Achievements';
import Downloads from './Components/Downloads';
import Team from './Components/Team';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




function App() {
  return (
    <div>
      <Router>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/events" element={<EventSlider />}></Route>
          <Route exact path="/nic" element={<Nic />}></Route>
          <Route exact path="/updates" element={<Updates />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/achievements" element={<Achievements />}></Route>
          <Route exact path="/downloads" element={<Downloads />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;

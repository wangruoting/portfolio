import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project.js';
import About from './About/About.js';
import Resume from './Resume/Resume.js';
import Home from './Home/Home.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

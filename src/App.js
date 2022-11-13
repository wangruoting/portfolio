import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project.js';
import About from './About/About.js';
import Resume from './Resume/Resume.js';
import Home from './Home/Home.js';
import FIT5225 from './FIT5225/FIT5225.js';
import FIT5046 from './FIT5046/FIT5046.js';
import FIT5147 from './FIT5147/FIT5147.js';
import FIT5032 from './FIT5032/FIT5032.js';
import IE from './ie/IE.js';
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
          <Route path="/ie" element={<IE />} />
          <Route path="/fit5225" element={<FIT5225 />} />
          <Route path="/fit5046" element={<FIT5046 />} />
          <Route path="/fit5147" element={<FIT5147 />} />
          <Route path="/fit5032" element={<FIT5032 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

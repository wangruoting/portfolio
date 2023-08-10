// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home.js';
import FIT5225 from './FIT5225/FIT5225.js';
import FIT5046 from './FIT5046/FIT5046.js';
import IE from './ie/IE.js';
import Contact from './Contact/Contact.js';
import { Route, Routes } from 'react-router-dom';
import IconGenerator from './IconGenerator/IconGenerator';


function App() {

  // control if open contact section
  const [isOpen, setIsOpen] = useState(false);
  const [closeBtnDisplay, setCloseBtnDisplay] = useState('hidden');

  // control if open contact section
  const handleClickToOpen = () => {
    setIsOpen(true);
    setCloseBtnDisplay('visible');
  }

  // control if open contact section
  const handleClickToClose = () => {
    setIsOpen(false);
    setCloseBtnDisplay('hidden');
  }

  return (
    <>
      <Navbar handleClick={handleClickToOpen} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ie" element={<IE />} />
          <Route path="/fit5225" element={<FIT5225 />} />
          <Route path="/fit5046" element={<FIT5046 />} />
          <Route path="/icongenerator" element={<IconGenerator />} />
          <Route path='*' element={<Home />} />
        </Routes>

        <Contact
          // pass props to contact component
          isOpen={isOpen}
          handleClickToOpen={handleClickToOpen}
          handleClickToClose={handleClickToClose}
          closeBtnDisplay={closeBtnDisplay}
        />
      </div>
    </>
  );
}

export default App;

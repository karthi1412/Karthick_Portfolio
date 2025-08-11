import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Resume from './Components/Resume';
import ThemeToggle from './Components/ThemeToggle';
import './App.css';
import './Assets/Css/Style.css';

function App() {
  // Load initial theme from localStorage, default to false (light)
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('darkMode');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Resume />
    </div>
  );
}

export default App;

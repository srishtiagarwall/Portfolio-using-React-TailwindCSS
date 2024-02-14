import React, { useState } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hireme from './components/Hireme';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <Router>
      <>
        <Navbar darkMode={darkMode} setDarkMode={switchMode} />

        <Switch>
          <Route path="/" exact>
            <Main darkMode={darkMode} />
          </Route>

          <Route path="/projects">
            <Projects darkMode={darkMode} />
          </Route>

          <Route path="/contact">
            <Contact darkMode={darkMode} />
          </Route>

          <Route path="/hireme">
            <Hireme darkMode={darkMode} />
          </Route>
        </Switch>

        <Footer darkMode={darkMode} />
      </>
    </Router>
  );
}

export default App;

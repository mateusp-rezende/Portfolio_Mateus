import React from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import './App.css'; // Importar o CSS para animação

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min_height">
        <PageTransitionRoutes />
      </Container>
      <Footer />
    </Router>
  );
}

function PageTransitionRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="slide"
      >
        <Routes location={location}>
          <Route path='/' element={<Sobre />} />
          <Route path='/projects' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
      
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;

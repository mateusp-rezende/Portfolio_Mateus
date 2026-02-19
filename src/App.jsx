import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Contact from './pages/contacts/Contact';
import Container from './components/Container';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Certificados from './pages/certificados/Certificados';
import ParticleBackground from './components/ParticleBackground';


function App() {
  return (
    <Router>
      <ParticleBackground />
      <NavBar />
      <Container customClass="min_height">
        <Routes>
          <Route path='/' element={<Sobre />} />
          <Route path='/projects' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/certificados' element={<Certificados />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

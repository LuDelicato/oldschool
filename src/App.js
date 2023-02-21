import './reset.css';
import './index.css';
import './App.css';
import '../src/components/common/DarkMode.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/common/NavBar';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Gallery from './components/pages/Gallery';
import Footer from './components/pages/Footer';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='loja' element={<Shop />} />
        <Route path='sobre' element={<About />} />
        <Route path='contatos' element={<Contacts />} />
        <Route path='galeria' element={<Gallery />} />
        <Route path='servicos' element={<Services />} />
        <Route path='projetos' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

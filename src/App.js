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

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='loja' element={<Shop />} />
        <Route path='sobre' element={<About />} />
        <Route path='contatos' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

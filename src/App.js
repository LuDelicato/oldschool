import './reset.css';
import './index.css';
import './App.css';
import '../src/components/common/DarkMode.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/common/NavBar';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='loja' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

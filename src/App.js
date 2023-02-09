import './reset.css';
import './App.css';
import { Pages } from './components/pages/Pages';
import { Home } from './components/pages/Home';

function App() {
  return (
    <div className='App'>
      <Pages />
      <Home />
    </div>
  );
}

export default App;

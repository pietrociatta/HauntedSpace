import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Teampage from './Pages/Teampage';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/teampage" element={<Teampage />} />
      </Routes>
    </div>
  );
}

export default App;

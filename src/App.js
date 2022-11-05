import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Contact from './Components/pages/Contact';

const App = () => (
  <div className="App">
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </div>
);

export default App;

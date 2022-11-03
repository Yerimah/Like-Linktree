import { Routes, Route } from 'react-router';
import Profile from './components/Profile';
import Links from './components/Links';
import Footer from './components/Footer';
import './App.css';
import Contact from './components/Contact';

const App = () => (
  <div className="App">
    <Profile />
    <Links />
    <Footer />
    <Routes>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export default App;

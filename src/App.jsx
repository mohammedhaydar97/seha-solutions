import './App.css'
import HomeScreen from './pages/HomeScreen'
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import ServicesPage from './pages/ServicesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Story from './pages/Story';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/story" element={<Story />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>

  )
}

export default App

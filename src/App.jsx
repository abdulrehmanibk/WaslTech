import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/home/home.jsx'

import Navbar from '../src/components/navbar/navbar.jsx'
import Footer from '../src/components/footer/footer.jsx'
import Contact from './pages/contact/contact.jsx';
import Services from './pages/services/services.jsx';
import About from './pages/about/about.jsx';
const Bome = () => <h2>Home Page</h2>;


function App() {

  return (
    <>
    <Navbar />
    {/* <Home /> */}
    <Router>
      <Routes>
        <Route path="/WaslTech" element={<Home />} />
        <Route path="/WaslTech/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App;

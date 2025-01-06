import './App.css'
import { HashRouter as Router, Routes, Route, Link ,Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/WaslTech" component={<Home />} />
        <Route path="/WaslTech/contact" component={<Contact />} />
        <Route path="WaslTech/services" component={<Services />} />
        <Route path="/WaslTech/about" component={<About />} />
      </Switch>
    </Router>
    <Footer />
    </>
  )
}

export default App;

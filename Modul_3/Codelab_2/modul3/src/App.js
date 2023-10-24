import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';
import Menu from './pages/menu';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Switch>
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Menu} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

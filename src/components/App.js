import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import HeadContent from './HeadContent';
import BodyContent from './BodyContent';
import FootContent from './FootContent';

const App = () => {
  return (
  <Router>
    <div className="App">
      <HeadContent />
      

      <Route exact path="/" component={Home} />
      <Route path ="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />

      <FootContent />
    </div>
  </Router>
  );
}

export default App;

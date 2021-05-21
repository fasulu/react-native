import React from 'react';
import { NativeRouter as Router, Route } from 'react-router-native';

import Home from './Home';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
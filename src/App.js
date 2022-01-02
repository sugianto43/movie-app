import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header'
import Footer from "./components/Footer";
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <container>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:id' component={Detail} />
        </Switch>
        <Footer />
      </container>
    </Router>
  );
}

export default App;

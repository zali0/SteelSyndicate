import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import ProductDescription from './pages/ProductDescription';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/home' component={Homepage} exact />
        <Route path="/products/:id" component={ProductDescription} />
      </Switch>
    
    </div>
  );
}

export default App;

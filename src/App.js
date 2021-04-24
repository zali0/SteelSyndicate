import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductDescription from './pages/ProductDescription';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        {/* <Login /> */}
        <Route path='/' component={Homepage} exact />
        <Route path='/product' component={ProductDescription} />
      </Switch>
    
    </div>
  );
}

export default App;

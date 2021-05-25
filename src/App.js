import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import ProductDescription from './pages/ProductDescription';
import Categories from './pages/Categories';
import CategoryInfo from './pages/CategoryInfo';
import Products from './pages/Products';
import './App.css';
import { Navbar } from './components/Navbar';
import { CompanyInfo } from './pages/CompanyInfo';

function App() {
  return (
    <div>
    {/* <Navbar /> */}
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/home' component={Homepage} exact />
        <Route path="/categories" component={Categories} exact />
        <Route path="/category/:name" component={CategoryInfo} exact />
        <Route path="/products" component={Products} exact/>
        <Route path="/products/:id" component={ProductDescription} exact />
        <Route path="/companyinfo" component={CompanyInfo} exact/>
      </Switch>
    
    </div>
  );
}

export default App;

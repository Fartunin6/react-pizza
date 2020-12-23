import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Switch, Route } from 'react-router-dom';

import API from '../services/PizzaApi';
import { setPizzas } from '../actions/pizzas';

import Header from './Header';

import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';

const App = () => {
  const dispatch = useDispatch();

  window.test = () => {
    API.getPizzas().then((data) => dispatch(setPizzas(data)));
  };

  useEffect(() => {
    API.getPizzas().then((data) => dispatch(setPizzas(data)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/cart" component={CartPage} />

            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;

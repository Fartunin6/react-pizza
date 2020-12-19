import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Switch, Route } from 'react-router-dom';

import API from '../services/PizzaApi';
import { setPizzas } from '../actions/pizzas';

import Header from './Header';

import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';

const App = ({ pizzas, setPizzas }) => {
  useEffect(async () => {
    const res = await API.getPizzas();
    setPizzas(res);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <MainPage pizzas={pizzas} />;
              }}
            />

            <Route path="/cart" component={CartPage} />

            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas.items,
  };
};

export default connect(mapStateToProps, { setPizzas })(App);

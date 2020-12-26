import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Header from './Header';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/cart" component={CartPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;

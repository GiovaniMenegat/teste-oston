import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from '../pages/Menu';
import Lista from '../pages/Lista';
import Produto from '../pages/Produto';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Menu} />
    <Route path="/lista" component={Lista} />
    <Route path="/produto" component={Produto} />
  </Switch>
);

export default Routes;

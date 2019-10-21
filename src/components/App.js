import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Template from './Template';
import Home from '../routes/Home';
import Signup from '../routes/Signup';
import Me from '../routes/Me';

const App = () => {
  return (
    <Switch>
      <Template>
        <Route path={'/home'} component={Home} />
        <Route exact path={'/'} component={Home} />
        <Route path={'/signup'} component={Signup} />
        <Route path={'/me'} component={Me} />
      </Template>
    </Switch>
  );
};

export default App;

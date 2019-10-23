import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';

import Template from './Template';
import Home from '../routes/Home';
import Signup from '../routes/Signup';
import Me from '../routes/Me';
import Profile from '../routes/Profile';

const App = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) return null;

  return (
    <Switch>
      <Template user={user}>
        <Route path={'/home'} component={Home} />
        <Route exact path={'/'} component={Home} />
        <Route path={'/signup'} component={Signup} />
        <PrivateRoute path={'/me'} user={user}>
          <Me user={user} />
        </PrivateRoute>
        <PrivateRoute path={'/profile'} user={user}>
          <Profile user={user} />
        </PrivateRoute>
      </Template>
    </Switch>
  );
};

const PrivateRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
};
export default App;

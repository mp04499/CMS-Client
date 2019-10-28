/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';

import Template from './Template';
import Home from '../routes/Home';
import Signup from '../routes/Signup';
import Me from '../routes/Me';
import Profile from '../routes/Profile';

const App = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <progress className="progress is-small is-primary" max="100">
        15%
      </progress>
    );
  }

  return (
    <Switch>
      <Template user={user}>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/me" user={user}>
          <Me user={user} />
        </PrivateRoute>
        <PrivateRoute path={['/profile/:t', '/profile']} user={user}>
          <Profile user={user} />
        </PrivateRoute>
      </Template>
    </Switch>
  );
};

const PrivateRoute = ({ user, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => (user ? (
      children
    ) : (
      <Redirect to={{ pathname: '/', state: { from: location } }} />
    ))}
  />
);

export default App;

PrivateRoute.propTypes = {
  user: PropTypes.objectOf(PropTypes.object, PropTypes.array).isRequired,
  children: PropTypes.node.isRequired,
  rest: PropTypes.string.isRequired,
};

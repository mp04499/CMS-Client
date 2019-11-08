import * as React from 'react';
import * as Router from 'react-router';
import * as firebase from 'firebase/app';

import Template from './Template';
import Home from '../../routes/Home';
import Signup from '../../routes/Signup';
import Me from '../../routes/Me';
import Profile from '../../routes/Profile';
import Review from '../../routes/Review';

const { Route, Switch, Redirect } = Router;

const Complete: React.FC<{ user: firebase.User }> = ({ user }) => {
  return (
    <Switch>
      <Template user={user}>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/review" component={Review} />
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

interface PrivateRouteProps {
  user: firebase.User | null;
  children: React.ReactNode;
  path: string | string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  user,
  children,
  ...rest
}) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    render={({ location }) =>
      user ? (
        children
      ) : (
        <Redirect to={{ pathname: '/', state: { from: location } }} />
      )
    }
  />
);

export default Complete;

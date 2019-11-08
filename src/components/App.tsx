/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { UserContext } from './contexts/UserContext';

const App: React.FC<{}> = () => {
  const { lazy, Suspense } = React;
  const { user, loading } = React.useContext(UserContext);

  let MainComponent;
  if (!loading) {
    MainComponent = lazy(() => import('./template/Complete'));
  }

  return (
    <>
      <Suspense
        fallback={
          <progress className="progress is-small is-primary" max="100">
            15%
          </progress>
        }
      >
        {MainComponent ? <MainComponent user={user!} /> : null}
      </Suspense>
    </>
  );
};

export default App;

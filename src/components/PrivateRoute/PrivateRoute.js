import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../../layouts/Main/components/Loading/loading';

const PrivateRoute = ({ component: Component, layout: Layout, ...args }) => (
  <Route
    render={matchProps => (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    )}
    // component={withAuthenticationRequired(component, {
    //   onRedirecting: () => <Loading />
    // })}
    {...args}
  />
);

export default PrivateRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, ...rest}) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return(
    <Route {...rest} render={props => (
      isAuthenticated ? <Component {...props} /> : <Redirect to='/registration' />
    )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default PrivateRoute;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigator from './Navigator';
import routes from './routes';

const AppRouter = () => (
  <React.Fragment>
    <Switch>
      {routes.map((route) => (
        <Route key={route.id} exact path={route.path} component={route.component} />
      ))}
    </Switch>
    <Navigator />
  </React.Fragment>
);

export default AppRouter;

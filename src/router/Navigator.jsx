import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from './routes';

const Navigator = () => (
  <nav>
    <ul>
      {routes.map((route) => (
        <li key={route.id}>
          <NavLink to={route.path} activeClassName="active">
            {route.navText}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigator;

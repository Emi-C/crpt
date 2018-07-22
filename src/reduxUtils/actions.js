import appActions from 'App/redux/actions';
import homeActions from 'Home/redux/actions';
import commonActions from './commonActions';
import createActions from './actionsUtils';

const actions = {
  APP: createActions('APP', appActions),
  HOME: createActions('HOME', homeActions),
  COMMON: createActions('COMMON', commonActions),
};

export default actions;

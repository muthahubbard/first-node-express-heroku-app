import * as constants from '../constants';
import {fromJS}  from 'immutable';

//const defaultState = new Immutable.List();

const defaultState = fromJS({
    token: null,
    user: null,
    loggingIn: false,
    error: null
});

export default function LoginAuthReducer(state = defaultState, action ) {
  switch (action.type) {
    case constants.LOGIN_SUBMITTED:
      console.log('REDUCER - LOGIN_SUBMITTED');
      return state.concat(action.data);
     
     case 'AUTHENTICATE_USER':
      console.log('REDUCER - AUTHENTICATE_USER');
      console.log(action);
      return state.concat(action.data, action.loginStatus); 

      default:
          return state;
  }

}
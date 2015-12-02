

import * as constants from '../constants';

export function loginSubmitted(data) {
  console.log('ACTION - loginSubmitted');
  
  return (dispatch) => {
    return dispatch(authenticate(data));
  }
  
}


function authenticateUser(data) {

  console.log('ACTION - authenticateUser', data);

  return {
    type: 'AUTHENTICATE_USER',
    data,
    loginStatus: { busy: true },
    date: Date.now()
  };
}

function authenticate(data) {

  console.log('ACTION - authenticate');

  return dispatch => {
    dispatch(authenticateUser(data))
  }

}
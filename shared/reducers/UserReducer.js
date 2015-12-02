import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function UserReducer(state = defaultState, action) {
  switch (action.type) {

    case 'GET_USERS':
      return state.concat(action.res.data);
      
    case 'CREATE_USER':
      return state.concat(action.name);
    case 'EDIT_USER':
      return state.concat(action.id);
    case 'DELETE_USER':
      return state.concat(action.id);  
    default:
      return state;
  }
}
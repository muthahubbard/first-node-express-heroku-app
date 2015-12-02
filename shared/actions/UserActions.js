import axios from 'axios';

const API_URL = 'http://localhost:5000/api/admin/users';

export function authenticateUser(email, password) {
  return {
    type: 'AUTHENTICATE_USER',
    promise: axios.post('http://localhost:5000/api/authenticate', {
      email: name,
      password: password
    })
  }
}

export function getUsers() {
  return {
    type: 'GET_USERS',
    //data: 'test test'
    promise: axios.get(API_URL)
  };
}

export function createUser(name) {
  return {
    type: 'CREATE_USER',
    name,
    date: Date.now()
  };
}

export function editUser(id) {
  return {
    type: 'EDIT_USER',
    id,
    date: Date.now()
  };
}

export function deleteUser(id) {
  return {
    type: 'DELETE_USER',
    id,
    date: Date.now()
  };
}
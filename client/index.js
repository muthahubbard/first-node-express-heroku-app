import React                from 'react';
import { Router }           from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider }         from 'react-redux';
import thunk                from 'redux-thunk';
import { fromJS }           from 'immutable';
import * as reducers        from '../shared/reducers';
import routes               from '../shared/routes';
import promiseMiddleware    from '../shared/lib/promiseMiddleware';
import immutifyState        from '../shared/lib/immutifyState';
import { createStore,
         combineReducers,
         applyMiddleware }  from 'redux';

const initialState = immutifyState(window.__INITIAL_STATE__);

const history = createBrowserHistory();

const reducer = combineReducers(reducers);
const store   = applyMiddleware(promiseMiddleware,thunk)(createStore)(reducer, initialState);

React.render(
  <Provider store={store}>
    {() =>
      <Router children={routes} history={history} />
    }
  </Provider>,
  document.getElementById('app')
);
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import counter from 'src/reducers/counter';
import navigation from 'src/reducers/navigation';

const identity = x => x;

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, __DEV__ ? logger : identity)(createStore);

const reducer = combineReducers({
  counter,
  navigation,
});

export default () => createStoreWithMiddleware(reducer);

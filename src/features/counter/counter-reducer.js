import Immutable from 'immutable'

import * as actionTypes from '/src/features/counter/counter-action-types';


const initialState = Immutable.fromJS({count: 0})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
    return state.set('count', state.count + 1);

    case actionTypes.DECREMENT:
    return state.set('count', state.count - 1);

    default:
      return state;
  }
}

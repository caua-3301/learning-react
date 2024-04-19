import { initialState } from '.';
import * as actionType from './actions';

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.INCREASE: {
      return { ...state, counter: state.counter + 1 };
    }

    case actionType.DECREASE: {
      return { ...state, counter: state.counter - 1 };
    }

    case actionType.RESET: {
      return { initialState };
    }

    case actionType.SET_COUNTS: {
      return { ...state, ...action.payload };
    }

    case actionType.ASYNC_INCREASE_START: {
      return { ...state, loading: true };
    }

    case actionType.ASYNC_INCREASE_END: {
      return { ...state, counter: state.counter + 1, loading: false };
    }

    case actionType.ASYNC_INCREASE_ERROR: {
      return { ...state, loading: false };
    }
  }

  return state;
};

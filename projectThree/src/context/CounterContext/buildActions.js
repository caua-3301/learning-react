import * as actionTypes from './actions';

export const bulildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCounter: () => dispatch({ type: actionTypes.SET_COUNTS }),
    asyncINcrease: () => asyncIncrease(dispatch),
  };
};

const asyncIncrease = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((r) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_END });
      r('RESOLVED');
    }, 2000);
  });
};

const asyncIncreaseEnd = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((r, rej) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_ERROR });
      r('RESOLVED');
    }, 2000);
  });
};

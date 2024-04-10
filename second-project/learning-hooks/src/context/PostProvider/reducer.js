import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POST_SUCESS: {
      //atribuindo os posts ao state
      return { ...state, posts: action.payload, loading: false };
    }
    case types.POST_LOADING: {
      return { ...state, loading: true };
    }
  }
  console.log('Err');

  return { ...state };
};

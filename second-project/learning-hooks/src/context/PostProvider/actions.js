import * as types from './types';

export const loadPost = async (dispatch) => {
  dispatch({ type: types.POST_LOADING });

  const postRow = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postRow.json();

  setTimeout(() => {
    dispatch({ type: types.POST_SUCESS, payload: posts });
  }, 2000);
};

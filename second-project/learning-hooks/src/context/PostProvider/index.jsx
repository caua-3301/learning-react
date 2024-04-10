import { useReducer } from 'react';
import { PostContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import P from 'prop-types';

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

PostProvider.propTypes = {
  children: P.node,
};

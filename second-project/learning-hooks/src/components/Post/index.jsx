import P from 'prop-types';
import { useContext, useEffect } from 'react';
import { loadPost } from '../../context/PostProvider/actions';
import { PostContext } from '../../context/PostProvider/context';

export const Post = ({ children }) => {
  const {
    state,
    state: { posts },
    dispatch,
  } = useContext(PostContext);
  console.log(posts);

  useEffect(() => {
    console.log('Load Posts');
    loadPost(dispatch);
  }, [dispatch]);

  return (
    <div>
      {state.loading ? (
        <p>carregando</p>
      ) : (
        posts.map((e) => {
          return <p key={e.id}>{e.title}</p>;
        })
      )}
    </div>
  );
};

Post.propTypes = {
  children: P.node,
};

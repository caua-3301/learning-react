import React from 'react';
import { PostCard } from '../postCard';
import './style.css';

export const Posts = (posts = []) => {
  const post = posts.posts;

  return (
    <div className="App">
      {post.map((todo) => (
        <PostCard id={todo.id} key={todo.id} photoUrl={todo.photoUrl} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
};

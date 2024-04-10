import React from 'react';
import './App.css';
import './App.css';
import { PostProvider } from '../../context/PostProvider';
import { Post } from '../../components/Post';

function App() {
  return (
    <PostProvider>
      <Post />
    </PostProvider>
  );
}

export default App;

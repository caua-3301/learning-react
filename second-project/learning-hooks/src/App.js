import PropTypes from 'prop-types';
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import './App.css';

const Post = ({ myPost, onClick }) => {
  console.log('filho');
  return (
    <div key={myPost.id} className="post">
      <h1 onClick={() => onClick(myPost.title)}>{myPost.title}</h1>
      <p>{myPost.body}</p>
    </div>
  );
};

Post.propTypes = {
  myPost: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

function App() {
  console.log('renderizou pai');

  //guarda a referencia de qualquer coisa
  //o valor do input qunado alterado não gera re-renderização
  const input = useRef(null);
  const [post, setPosts] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((content) => content.json())
      .then((inJson) => setPosts(inJson));
  }, []);

  useEffect(() => {
    input.current.focus();
  }, [value]);

  const handleClick = (title) => {
    setValue(title);
  };

  //refenricia de input é definida (nesse caso) com ref={input} no meu input
  return (
    <div className="App">
      <input
        ref={input}
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>

      {useMemo(() => {
        return post.map((post) => {
          return <Post key={post.id} myPost={post} onClick={handleClick} />;
        });
      }, [post])}
    </div>
  );
}

export default App;

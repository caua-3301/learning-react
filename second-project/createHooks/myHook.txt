import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const isEqual = (itemA, itemB) => {
  return JSON.stringify(itemA) === JSON.stringify(itemB);
};

const useFetch = (url, options) => {
  let wait = false;
  const controle = new AbortController();
  const sgnal = controle.signal;

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [observer, setObserver] = useState(false);

  const refUrl = useRef(url);
  const refOptions = useRef(options);

  useEffect(() => {
    if (!isEqual(url, refUrl)) {
      refUrl.current = url;
      setObserver((e) => !e);
    }

    if (!isEqual(options, refOptions.current)) {
      refOptions.current = options;
      setObserver((e) => !e);
    }
  }, [url]);

  useEffect(() => {
    const getData = async () => {
      await new Promise((x) => setTimeout(x, 1000));

      try {
        const response = await fetch(refUrl.current, {
          ...refOptions.current,
          signal: sgnal,
        });
        const content = await response.json();

        if (!wait) {
          setResult(content);
          setLoading(false);
        }
      } catch (exception) {
        console.log(exception);
      }
    };

    getData();

    return () => {
      wait = true;
      controle.abort();
    };
  }, [observer]);

  return [result, loading];
};

function App() {
  const [idPost, setIdPost] = useState('');

  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + idPost,
    {
      method: 'GET',
    },
  );

  const handleClick = (id) => {
    setIdPost(id);
    console.log(idPost);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((item) => {
            return (
              <p onClick={() => handleClick(item.id)} key={item.id}>
                {item.title}
              </p>
            );
          })
        ) : (
          <p onClick={() => handleClick('')}>{result.title}</p>
        )}
      </div>
    );
  }
}

export default App;

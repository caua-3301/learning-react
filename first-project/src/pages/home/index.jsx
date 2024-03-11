import './style.css';

import { Component, useCallback, useEffect, useState } from 'react';
import { loadPosts } from '../../util/load-props.js';
import { Posts } from '../../components/postCard/Post';
import { MyButton } from '../../components/postCard/button/index.jsx';
import { MyInput } from '../../components/postCard/inputFilter'

//nao existe this aqui
export const Home = _ => {
  //useState retorna um array com dois elemento, o elemento em si,e , um função para que ele seja setado depois
  //useState recebe o valor inicial do estado
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage, setPostPeerPage] = useState(2);
  const [filterPage, setFilterPage] = useState('');

  
  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const photoAndPost = await loadPosts();

    setPosts(photoAndPost.slice(page, postsPerPage));
    setAllPosts(photoAndPost)
  }, []);

  const loadMorePosts = _ => {

    const nextPage = page + postsPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPost);

    setPosts(posts);
    setPage(nextPage);
  }

  const hadleChange = e => {
    const { value } = e.target;

    setFilterPage(value);
  }

  useEffect(_ => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const isMorePost = page + postsPerPage >= allPosts.length;

  //função de filtragem não pode ser diretamente no estado devido a perda do que estava na tela
  const filteredPost = !!filterPage ? posts.filter(post => {
    return post.title.toUpperCase().includes(filterPage.toUpperCase())
  }) : posts;

  return (
    <section className='container'>
      {!!filterPage && (
        <>
          <h1>Filter value: {filterPage}</h1>
        </>
      )}
      <MyInput hadleChange={hadleChange} filterPage={filterPage} />
      {/*parametro = resultado da filtragem*/}
      <Posts posts={filteredPost} />

      {!filterPage && (
        <MyButton disabled={isMorePost}
          loadMore={loadMorePosts} />
      )}
    </section>
  );
}

// class Home2 extends Component {
//   //o uso de parenteses indica o retorno de mais de uma linha em um map dentro do return()
//   //Isso é um estado
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 2,
//     filterPage: ''
//   };

//   componentDidMount() {
//     this.loadTodos();
//   }


//   render() {

//   }
// }

// function App() {
//   //JSX, tudo isso é convertido com Babel par JS, que o browser entende
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Home;
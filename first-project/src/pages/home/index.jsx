import './style.css';

import { Component } from 'react';
import { loadPosts } from '../../util/load-props.js';
import { Posts } from '../../components/postCard/Post';
import { MyButton } from '../../components/postCard/button/index.jsx';
import { MyInput } from '../../components/postCard/inputFilter'

class Home extends Component {
  //o uso de parenteses indica o retorno de mais de uma linha em um map dentro do return()
  //Isso é um estado
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    filterPage: ''
  };

  componentDidMount() {
    this.loadTodos();
  }

  loadMorePosts = _ => {
    const {allPosts, page, posts, postsPerPage} = this.state;

    const nextPage = page + postsPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPost);

    this.setState({posts, page: nextPage})

  }

  loadTodos = async _ => {
    const { page, postsPerPage } = this.state;

    const photoAndPost = await loadPosts();
    this.setState({
       posts: photoAndPost.slice(page, postsPerPage),
       allPosts: photoAndPost
     });
  }

  hadleChange = e => {
      const { value } = e.target

      this.setState({ filterPage: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, filterPage} = this.state;

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
        <MyInput hadleChange={this.hadleChange} filterPage={filterPage}/>
        {/*parametro = resultado da filtragem*/}
        <Posts posts={filteredPost}/>

        {!filterPage && (
                  <MyButton disabled={isMorePost}
                  loadMore={this.loadMorePosts} />
        )}


         {console.log("FOI")}
      </section>
    );
  }
}

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
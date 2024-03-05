import './style.css';

import { Component } from 'react';
import { loadPosts } from '../../util/load-props.js';
import { Posts } from '../../components/postCard/Post';
import { MyButton } from '../../components/postCard/button/index.jsx';

class Home extends Component {
  //o uso de parenteses indica o retorno de mais de uma linha em um map dentro do return()
  //Isso é um estado
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
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

  render() {
    const { posts, page, postsPerPage, allPosts} = this.state;

    const isMorePost = page + postsPerPage >= allPosts.length;

    return (
      <section className='container'>
        <Posts posts={posts}/>
        <MyButton disabled={isMorePost}
         loadMore={this.loadMorePosts} />
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
import './App.css';
import { Component } from 'react';
import { loadPosts } from './util/load-props';
import { Posts } from './components/postCard/Post';

class App extends Component {
  //o uso de parenteses indica o retorno de mais de uma linha em um map dentro do return()
  //Isso é um estado
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos = async _ => {
    const photoAndPost = await loadPosts();
    this.setState({ posts: photoAndPost });
  }

  render() {
    const { posts } = this.state;

    return (
      <Posts posts={posts}/>
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

export default App;
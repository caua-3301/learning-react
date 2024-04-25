import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MyRouterComponent from './components/router';
import './styles/global.css'
import Menu from './components/menu';
//pages
import Home from './components/home';
import About from './components/about';
import Post from './components/Post';
import Redirect from './components/redirect';
import NotFoundComp from './components/notFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRouterComponent HomeComponent={Home} AboutComponent={About} PostComponent={Post} RedirectComponent={Redirect} NotFoundComponent={NotFoundComp}>
      <Menu />
    </MyRouterComponent>
  </React.StrictMode>
);


reportWebVitals();

import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';
import './index.css';

const App = () => (
  <React.Fragment>
    <main>
    <div id="mySidenav" className="sidenav">
      <a href="#" id="about">About</a>
      <a href="#" id="blog">Blog</a>
      <a href="#" id="projects">Projects</a>
      <a href="#" id="contact">Ness Mitesh Demo</a>
      <a href="#" id="contact12">Ness Digital</a>
    </div>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;

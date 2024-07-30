import React from 'react';

import Article from './main/Article/Article';
import Aside from './main/Aside/Aside';
import Nav from './main/Nav/Nav';

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <div className='container md:flex justify-between mx-auto mt-[1vw]'>
        <Article />
        <Aside />
      </div>
    </>
    
  );
}

export default App;

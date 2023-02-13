import { useState } from "react";

import GlobalNav from './GlobalNav'
import Home from '/.Home';
import About from './About';

function Main({ page, onNav }) {


  return (
    <main>
      
      { page === 'Home' && <Home/> }
      { page === 'About' && <About/>}
      { page }
    </main>
  );
}

export default Main;
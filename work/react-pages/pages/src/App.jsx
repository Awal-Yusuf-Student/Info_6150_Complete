
import './App.css';
import Footer from './Footer';
import Main from './Main';
import Header from './header';
import { useState } from 'react';

function App() {
  const [ page, setPage ] = useState('Home');
  return (
    <div className="App">
      <Header setPage={setPage}/>
      <Main setPage={setPage} page={page}/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routing';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
    <Header passCount={count}/>
      <Routing changeCount={setCount}/>
    <Footer/>
    </div>
  );
}

export default App;
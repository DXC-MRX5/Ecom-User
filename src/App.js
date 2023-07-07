import './App.css';
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routing';


function App() {
  return (
    <div className="App">
    <Header/>
      <Routing/>
    <Footer/>
    </div>
  );
}

export default App;
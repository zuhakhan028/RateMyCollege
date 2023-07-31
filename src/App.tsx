import React from 'react';
import './App.css';
import Header from './components/header/header';
import building from "./assets/images/building_icon.svg"
import MiddleSection from './components/middleSection/middleSection';

function App() {
  return (
    
    <div className="App">
     <Header/>
    <MiddleSection/>
     
    </div>
  );
}

export default App;
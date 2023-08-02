import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light')
  const [red, setRed] = useState('light')
  const [yellow, setYellow] = useState('light')
  const [green, setGreen] = useState('light')

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      // document.body.style.backgroundColor = 'rgb(116, 116, 151)';

    }
    else{
      setMode('light')
      // document.body.style.backgroundColor = '#042743'
      setRed('light')
      setYellow('light')
      setGreen('light')
      document.body.style.backgroundColor = 'rgb(116, 116, 151)';
    }
  }

  // document.body.classList.remove('');
  // document.body.classList.remove('');
  // document.body.classList.remove('');
  // document.body.classList.remove('');
  let color = document.body.style.backgroundColor;
  const redColor = ()=>{
    
    if(color != 'rgb(83, 3, 3)'){
      
      setRed('red');
      document.body.style.backgroundColor = 'rgb(83, 3, 3)';
    }
    
  }
  const yellowColor = ()=>{
    if(color != 'rgb(143, 143, 33)'){
      setYellow('yellow');
      document.body.style.backgroundColor = 'rgb(143, 143, 33)';
    }
    
  }
  const greenColor = ()=>{
    if(color != 'rgb(20, 120, 38)'){
      setGreen('green');
      document.body.style.backgroundColor = 'rgb(20, 120, 38)';
    }
    
  }

  
  return (
    <>
    <BrowserRouter>
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} redColor={redColor} yellowColor={yellowColor} greenColor={greenColor}/>
      <Routes>
      {/* <Textform mode={mode} red={red} yellow={yellow} green={green}/> */}
        <Route path='/about' element={<About />}/>
        <Route path='/' element={<Textform mode={mode} red={red} yellow={yellow} green={green} />}/>
      
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

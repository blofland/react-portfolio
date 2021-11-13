import React from 'react';
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import './App.css'
import {Routes, Route} from 'react-router'


function App() {
  return (
    <>
    <Header/>
    
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
 </Routes>
   <Footer/>
    </>

  );
}

export default App;

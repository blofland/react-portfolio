import React from 'react';
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import './App.css'

function App() {
  return (
<div>
  <Header/>
<Contact/>
    <Projects/>
    <About/> 
     <main>
  </main>
  <Footer/>
  <Resume/>
  <Portfolio/>
</div>
  );
}

export default App;

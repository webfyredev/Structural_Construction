import { useState } from 'react'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './pages/services';
import About from './pages/about';
import Contacts from './pages/contacts';
import Projects from './pages/projects';
import PageToTop from './components/pageTop';
function App() {
  return (
      <Router>
        <PageToTop />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contacts' element={<Contacts />}></Route>
            <Route path='/projects' element ={<Projects />}></Route>
        </Routes>
      </Router>
  );
}

export default App

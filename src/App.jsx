import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import './components/Navbar.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import Head from './components/Head.jsx'
import Sales from './components/Sales.jsx'
import Info from './components/Info.jsx'
import { cards } from './components/Data.jsx'
import Card from './components/Card.jsx'
import "./components/Card.css";

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Head />
        <Sales />
        <Info />
        <div className='card-main'>
        {
          cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))
        }
      </div>
      </div>
    </>
  )
}

export default App

import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'


function App() {

  return (
    <>
          <BrowserRouter>
           <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
          
          <Route path='/' element={<Home />} />
        </Routes>
          </BrowserRouter>

       
       
     
     
    </>
  )
}

export default App
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Component/About';
import Home from './Component/Home';
import NotFound from './Component/NotFound';
import Contact from './Pages/Contact';
import User from './Pages/User';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

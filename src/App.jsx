import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

function App() {
  return <BrowserRouter>
  <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>;
}

export default App;

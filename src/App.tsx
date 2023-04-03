import { Routes, Route } from 'react-router-dom'
import { scrollReveal } from './util/scrollReveal'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'


window.addEventListener('load', scrollReveal)
window.addEventListener('scroll', scrollReveal)
window.addEventListener('resize', scrollReveal)

function App() {

  return (
    <div className="App container md:max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </div>
  )
}

export default App

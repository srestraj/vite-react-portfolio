import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { scrollReveal } from './util/scrollReveal'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/resume',
    element: <Resume />
  }
])


window.addEventListener('load', scrollReveal)
window.addEventListener('scroll', scrollReveal)
window.addEventListener('resize', scrollReveal)

function App() {

  return (
    <div className="App container md:max-w-7xl mx-auto">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App

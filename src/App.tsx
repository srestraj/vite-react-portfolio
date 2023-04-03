import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { scrollReveal } from './util/scrollReveal'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
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

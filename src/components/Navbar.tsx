import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="flex text-center md:text-left md:justify-between py-8 px-6 bg-white items-center w-full">
      <div className="mr-auto">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="md:flex hidden items-center gap-x-8 justify-around">
        <Link to="/portfolio" className="text-lg no-underline ml-2">
          Portfolio
        </Link>
        <Link to="/contact" className="text-lg no-underline ml-2">
          Contact
        </Link>
        <Link to="/resume" className="text-lg no-underline ml-2">
          Resume
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
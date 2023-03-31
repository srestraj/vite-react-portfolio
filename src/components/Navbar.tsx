import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="flex text-center md:text-left md:justify-between py-8 px-6 bg-white items-center w-full">
      <div className="mr-auto">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="md:flex hidden items-center gap-x-8 justify-around">
        <a href="/one" className="text-lg no-underline ml-2">
          About
        </a>
        <a href="/two" className="text-lg no-underline ml-2">
          Portfolio
        </a>
        <a href="/three" className="text-lg no-underline ml-2">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
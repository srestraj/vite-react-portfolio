import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'

const Home = () => {
  return (
    <div className="flex flex-col divide-y">
      <Hero />
      <About />
      <Experience />
    </div>
  )
}

export default Home
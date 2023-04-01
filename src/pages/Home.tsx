import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <div className="flex flex-col divide-y">
      <Hero />
      <About />
    </div>
  )
}

export default Home
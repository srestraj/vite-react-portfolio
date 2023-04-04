import { useRef } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import PreFooter from '../components/PreFooter'
import PastProjects from '../components/PastProjects'

const Home = () => {
  const targetElem = useRef()

  const scrollIntoView = () => {
    const elmnt: any = targetElem
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    })
  }

  return (
    <div className="flex flex-col divide-y">
      <Hero scrollToAbout={scrollIntoView} />
      <About ref={targetElem} />
      <Experience />
      <PastProjects />
      <PreFooter />
    </div>
  )
}

export default Home
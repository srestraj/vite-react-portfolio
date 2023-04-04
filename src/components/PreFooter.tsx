import { useNavigate } from "react-router-dom"
import Button from "./Button"

const PreFooter = () => {
  const navigateTo = useNavigate()
  const goToContact = () => {
    navigateTo('/contact')
  }
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
        <div className="place-self-start lg:col-span-7">
          <h2 className="mb-4 text-3xl font-normal tracking-normal xl:text-5xl md:text-4xl">
            Interested in working together? <span className="underline">Get in touch</span> today.
          </h2>
          <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit donec morbi lectus nisi egestas proin amet rhoncus scelerisque lorem feugiat amet hac ornare.
          </p>
        </div>
        <Button runFunc={goToContact} classNames="-rotate-90 lg:col-span-5 lg:w-28 lg:h-28 w-24 h-24 lg:place-self-center"  />
      </div>
    </section>
  )
}

export default PreFooter
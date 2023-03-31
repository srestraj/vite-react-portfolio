const Hero = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-normal tracking-normal md:text-5xl xl:text-6xl">
            I'm Sam Moore, a designer based in Los Angeles, CA
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit donec morbi lectus nisi egestas proin amet rhoncus sceleris lorem feugiat amet hac ornar morbi lectus.
          </p>
        </div>
        <div className="lg:order-first lg:mt-0 lg:col-span-5">
          <img src="https://assets.website-files.com/60e640d00fdb1e0bd76fae59/60ef759cce19af122ce53a19_sam-moore-about-v1-portfolio-x-webflow-template.jpg" alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero
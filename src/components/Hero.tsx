const Hero = () => {
  return (
    <section className="bg-white py-20 lg:py-48">
      <div className="relative grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-7">
          <h1 className="lg:max-w-2xl mb-4 text-4xl font-normal tracking-normal md:text-5xl xl:text-6xl">
            I'm Sam Moore, a designer based in Los Angeles, CA
          </h1>
          <p className="lg:max-w-2xl mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit donec morbi lectus nisi egestas proin amet rhoncus sceleris lorem feugiat amet hac ornar morbi lectus.
          </p>
        </div>
        <div className="lg:order-first lg:mt-0 lg:col-span-5">
          <img src="https://assets.website-files.com/60e640d00fdb1e0bd76fae59/60ef759cce19af122ce53a19_sam-moore-about-v1-portfolio-x-webflow-template.jpg" alt="hero" />
        </div>
        <div className="lg:absolute lg:-bottom-8 lg:right-4 lg:m-0 mt-5 w-24 h-24 inline-flex items-center justify-center rounded-full border-2 border-neutral-800">
          <i className="las la-angle-down text-4xl"></i>
        </div>
      </div>
    </section>
  )
}

export default Hero
const About = () => {
  return (
    <section className="bg-white py-20 lg:py-48">
      <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-6">
          <h1 className="lg:max-w-2xl mb-4 text-4xl font-normal tracking-normal md:text-5xl xl:text-6xl">
            About me
          </h1>
          <p className="lg:max-w-2xl mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit donec morbi lectus nisi egestas proin amet rhoncus scelerisque lorem feugiat amet hac ornare.
          </p>
          <p className="lg:max-w-2xl font-normal leading-relaxed text-gray-500 text-xl">
          Sed magna bibendum proin quisque pellentesque mi potenti bibendum. Eros habitant pellentesque tincidunt mi tortor et. Non in vulputate consequat pellentesque condimentum elementum dolor sit amen.
          </p>
        </div>
        <div className="lg:block hidden lg:mt-0 lg:col-span-6 max-w-sm justify-self-end self-end mr-6">
          <img src="https://assets.website-files.com/60e640d00fdb1e0bd76fae59/60ef783469abb1759dab2e33_02-about-me-portfolio-x-webflow-template.jpg" alt="aboout-1" />
        </div>
        <div className="lg:col-span-8 lg:justify-self-end self-start lg:max-w-lg">
          <img src="https://assets.website-files.com/60e640d00fdb1e0bd76fae59/60ef783469abb1a50aab2e32_01-about-me-portfolio-x-webflow-template.jpg" alt="aboout-2" />
        </div>
        <div className="lg:col-span-4 lg:justify-self-end lg:max-w-sm">
          <img
            className="absolute left-2/3 top-1/2 md:block hidden -translate-x-1/2 lg:-translate-y-1/2 w-52"
            src="https://assets.website-files.com/60e640d00fdb1e0bd76fae59/60ea6d2dbab737fb2ead66df_about-me-circle-text-portfolio-x-webflow-template.svg"
            alt="animated svg"
          />
          <img src="https://assets.website-files.com/60e640d00fdb1e0bd76fae59/60ef7834b39a8f5d5d68e5a1_03-about-me-portfolio-x-webflow-template.jpg" alt="aboout-3" />
        </div>
      </div>
    </section>
  )
}

export default About
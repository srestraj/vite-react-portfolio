import { forwardRef } from 'react'

const About = (props: any, ref: any) => {
  return (
    <section className="bg-white py-20 lg:py-32" ref={ref}>
      <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-6">
          <h2 className="lg:max-w-2xl mb-4 text-3xl font-normal tracking-normal md:text-4xl xl:text-5xl">
            About me
          </h2>
          <p className="lg:max-w-2xl mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit donec morbi lectus nisi egestas proin amet rhoncus scelerisque lorem feugiat amet hac ornare.
          </p>
          <p className="lg:max-w-2xl font-normal leading-relaxed text-gray-500 text-xl">
          Sed magna bibendum proin quisque pellentesque mi potenti bibendum. Eros habitant pellentesque tincidunt mi tortor et. Non in vulputate consequat pellentesque condimentum elementum dolor sit amen.
          </p>
        </div>
        <div className="relative lg:block hidden lg:mt-0 lg:col-span-6 max-w-sm justify-self-end self-end mr-6">
          <img src="/images/2.jpg" alt="aboout-1" className="transition-all duration-700 opacity-0 animating-image" />
          <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
        </div>
        <div className="relative lg:col-span-8 lg:justify-self-end self-start lg:max-w-lg">
          <img src="/images/3.jpg" alt="aboout-2" className="animating-image" />
          <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
        </div>
        <div className="relative lg:col-span-4 lg:justify-self-end lg:max-w-sm">
          <img src="/images/4.jpg" alt="aboout-3" className="animating-image" />
          <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
        </div>
        <img
          className="z-10 absolute left-2/3 top-1/2 md:block hidden -translate-x-1/2 lg:-translate-y-1/2 w-52"
          src="/images/about-circular.svg"
          alt="animated svg"
        />
      </div>
    </section>
  )
}

export default forwardRef(About)
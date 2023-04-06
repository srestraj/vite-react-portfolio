import ResumeTab from "../components/ResumeTab"
import resumeOptions from '../../resumeOptions.json'

const Resume = () => {
  return (
    <div className="flex flex-col divide-y dark:divide-gray-600 md:max-w-5xl mx-auto">
      <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
        <div className="flex flex-col gap-y-7 items-center justify-center text-center">
          <img
            src="/images/6.jpeg"
            alt="avatar"
            className="
              w-32
              h-32
              rounded-full
              object-cover
              object-center
            "
          />
          <h1 className="mb-4 text-4xl font-normal tracking-normal md:text-5xl">
            Resume
          </h1>
          <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit donec morbi lectus nisi egestas proin amet rhoncus scelerisque lorem feugiat amet hac ornare.
          </p>
        </div>
      </section>
      {
        resumeOptions.map((resumeOption: any, i) => <ResumeTab key={i} title={resumeOption.title} description={resumeOption.description} />)
      }
    </div>
  )
}

export default Resume
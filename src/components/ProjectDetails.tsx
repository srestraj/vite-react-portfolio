import { useMemo, useRef } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import raw from 'rehype-raw'
import projects from '../../portfolio.json'
import content from '../../markdownContent.json'
import Button from './Button'
import ArrowTopRight from './ArrowTopRight'
import PreFooter from './PreFooter'

const ProjectDetails = () => {
  const { slug } = useParams()
  const targetElem = useRef(null)

  const selectedProject: any = useMemo(() => {
    return slug ? projects.find((project: any) => project.slug.toLowerCase() == slug.toLowerCase()) : null
  }, [])

  const scrollToDetails = () => {
    const elmnt: any = targetElem
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    })
  }

  return (
    <>
      <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
        <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
          <div className="place-self-start lg:col-span-7">
            <h1 className="mb-4 text-4xl font-normal tracking-normal xl:text-6xl md:text-5xl">
              {selectedProject.title}
            </h1>
            <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
              {selectedProject.description}
            </p>
          </div>
          <Button runFunc={scrollToDetails} classNames="lg:col-span-5 lg:w-28 lg:h-28 w-24 h-24 lg:place-self-center"  />
        </div>
      </section>
      <section
        className="py-64 bg-neutral-950 w-full bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${selectedProject.banner})`
        }}
      />
      <div
        className="
          relative
          grid
          md:grid-cols-4
          grid-cols-2
          gap-8
          md:px-12
          px-8
          md:mx-auto
          mx-4
          md:py-12
          py-10
          -mt-16
          bg-white
          dark:bg-neutral-900
          md:max-w-2xl
          lg:max-w-4xl
          xl:max-w-5xl
        "
      >
        <div>
          <h3 className="font-semibold text-lg">
            Client
          </h3>
          <p className="text-xl mt-3 text-gray-500 font-normal">
            {selectedProject.company}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">
            Services
          </h3>
          <p className="text-xl mt-3 text-gray-500 font-normal">
            {selectedProject.company}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">
            Deliverables
          </h3>
          <p className="text-xl mt-3 text-gray-500 font-normal">
            {selectedProject.category}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">
            Website
          </h3>
          <a
            href="#"
            target="_blank"
            className="
              font-semibold
              text-lg
              inline-flex
              items-center
              gap-2
              group
              dark:text-white
            "
          >
            Live Preview
            <ArrowTopRight
              classNames="
                w-5
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition-all
                duration-200
                dark:fill-gray-300
              "
            />
          </a>
        </div>
     </div>
     <div ref={targetElem}>
       <ReactMarkdown
          className="markdown mx-auto md:max-w-2xl py-32 md:px-0 px-4"
          rehypePlugins={[raw]}
        >
          {content.content}
        </ReactMarkdown>
     </div>
     <hr className="my-12" />
     <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
        <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
          <div className="place-self-start lg:col-span-7">
            <h3 className="mb-4 text-4xl font-normal tracking-normal xl:text-5xl md:text-4xl">
              Project gallery
            </h3>
          </div>
          <div className="lg:col-span-5">
            <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae doloribus qui ullam eaque?
            </p>
          </div>
        </div>
        <div className="grid gap-6 px-4 grid-cols-12">
          <div className="group overflow-hidden md:col-span-6 col-span-12 relative">
            <img
              src="/images/gallery-1.jpg"
              className="w-full h-full object-cover object-center transition-all duration-700 opacity-0 animating-image group-hover:scale-150"
            />
            <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
          </div>
          <div className="md:col-span-6 col-span-12 grid grid-cols-2 gap-6">
            <div className="group relative overflow-hidden">
              <img
                src="/images/gallery-2.jpg"
                className="w-full h-full object-cover object-center transition-all duration-700 opacity-0 animating-image group-hover:scale-150"
              />
              <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
            </div>
            <div className="relative group overflow-hidden ">
              <img
                src="/images/gallery-3.jpg"
                className="w-full h-full object-cover object-center transition-all duration-700 opacity-0 animating-image group-hover:scale-150"
              />
              <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
            </div>
            <div className="group overflow-hidden relative">
              <img
                src="/images/gallery-4.jpg"
                className="w-full h-full object-cover object-center transition-all duration-700 opacity-0 animating-image group-hover:scale-150"
              />
              <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
            </div>
            <div className="group overflow-hidden relative">
              <img
                src="/images/gallery-5.jpg"
                className="w-full h-full object-cover object-center transition-all duration-700 opacity-0 animating-image group-hover:scale-150"
              />
              <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
            </div>
          </div>
        </div>
      </section>
     <hr className="my-12" />
     <PreFooter />
    </>
  )
}

export default ProjectDetails
import { Link } from 'react-router-dom'
interface Props {
  work: any
}
const ProjectPreview = ({ work }: Props) => {
  return (
    <Link to={`/portfolio/${work.slug}`} className="group">
      <div className="bg-white border my-8 transition-all group-hover:scale-95 duration-700">
        <div className="relative grid mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="lg:px-12 lg:py-auto px-6 py-6 place-self-center lg:col-span-6">
            <p className="font-medium tracking-wide text-lg md:text-xl mb-3">
              {work.company}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{work.category}
            </p>
            <h4 className="mb-4 text-2xl font-semibold md:text-3xl">
              {work.title}
            </h4>
            <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 md:text-xl text-lg">
              {work.description}
            </p>
          </div>
          <div className="lg:order-none order-first lg:mt-0 lg:col-span-6 relative overflow-hidden">
            <img src={work.image} alt="hero" className="transition-all duration-700 opacity-0 animating-image group-hover:scale-110" />
            <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectPreview
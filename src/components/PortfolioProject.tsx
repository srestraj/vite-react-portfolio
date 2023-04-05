import { Link } from 'react-router-dom'
interface Props {
  projects: any
}

const PortfolioProject = ({ projects }:Props) => {
  return (
    <>
      {
        projects.map((project: any) =>
            <div key={project.id} className="md:col-span-6 relative md:even:mt-16 overflow-hidden">
              <Link to={`/portfolio/${project.slug}`} className="group">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-auto transition-all duration-700 opacity-0 animating-image group-hover:scale-110" />
                  <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
                </div>
                <div className="my-8">
                  <p className="font-normal text-gray-500 tracking-wide text-lg md:text-xl mb-2">
                    {project.company}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{project.category}
                  </p>
                  <h4 className="font-semibold md:text-2xl text-xl">
                    {project.title}
                  </h4>
                </div>
              </Link>
            </div>
        )
      }
    </>
  )
}

export default PortfolioProject
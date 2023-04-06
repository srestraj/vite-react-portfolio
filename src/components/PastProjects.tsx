import ProjectPreview from "./ProjectPreview"
import projects from "../../projects.json"

const PastProjects = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 py-20 lg:py-48">
      <div className="w-full text-center mx-auto">
        <h2 className="mb-4 text-4xl font-normal tracking-normal xl:text-5xl">
          Projects
        </h2>
      </div>
      <div className="container mx-auto px-4">
        {
          projects.map((project, index) => <ProjectPreview key={index} work={project} />)
        }
      </div>
    </section>
  )
}

export default PastProjects
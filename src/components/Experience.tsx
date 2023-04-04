import AnimatedLink from './AnimatedLink'
import Position from './Position'
import pastRoles from '../../pastRoles.json'

const Experience = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
        <div className="mx-auto place-self-start lg:col-span-5 lg:sticky lg:top-8">
          <h2 className="mb-4 text-4xl font-normal tracking-normal xl:text-5xl">
            My past work experience
          </h2>
          <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
            Vulputate ut pharetra sit amet aliquam id diam dolor maecenas ultricies at in tellus integer feugiat ipum
          </p>
          <AnimatedLink title="Browse full resume" link="/resume" isExternal={false}  />
        </div>
        <div className="lg:mt-0 lg:col-span-7">
          <div className="w-full flex flex-col gap-y-4 divide-y">
            {
              pastRoles.map((role: any) => <Position key={role.id} job={role} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
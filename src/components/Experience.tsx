import { Link } from 'react-router-dom'
import ArrowTopRight from './ArrowTopRight'
import Position from './Position'

const Experience = () => {
  const pastRoles = [
    {
      id: 0,
      title: "Senior Product Designer",
      startYear: "2022",
      endYear: "2023",
      company: "Facebook",
      logo: "/images/facebook.svg",
      description: "Lorem ipsum dolor sit amet tragon consectetur dolseclm adipiscing elit mattis faucibus odio feugiat."
    },
    {
      id: 1,
      title: "Lead of Mobile Design",
      startYear: "2020",
      endYear: "2021",
      company: "YouTube",
      logo: "/images/youtube.svg",
      description: "Lorem ipsum dolor sit amet tragon consectetur dolseclm adipiscing elit mattis faucibus odio feugiat."
    },
    {
      id: 2,
      title: "Head of UX Engineering",
      startYear: "2019",
      endYear: "2020",
      company: "Twitter",
      logo: "/images/twitter.svg",
      description: "Lorem ipsum dolor sit amet tragon consectetur dolseclm adipiscing elit mattis faucibus odio feugiat."
    },
    {
      id: 3,
      title: "Mobile UI/UX Designer",
      startYear: "2017",
      endYear: "2018",
      company: "Twitch",
      logo: "/images/twitch.svg",
      description: "Lorem ipsum dolor sit amet tragon consectetur dolseclm adipiscing elit mattis faucibus odio feugiat."
    }
  ]

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
          <Link
            to="/resume"
            className="
              font-semibold
              md:text-2xl
              text-xl
              inline-flex
              items-center
              gap-2
              group
            "
          >
            Browse full resume
            <ArrowTopRight
              classNames="
                w-7
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition-all
                duration-200
              "
            />
          </Link>
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
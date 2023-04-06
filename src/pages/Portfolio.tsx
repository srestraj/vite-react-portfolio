import { useState, useEffect, useMemo } from 'react'
import categories from '../../categories.json'
import portfolioList from '../../portfolio.json'
import PortfolioProject from '../components/PortfolioProject'
import ArrowTopRight from '../components/ArrowTopRight'

const Portfolio = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [perPage, setPerPage] = useState(5)

  const updateTab = (category: any) => {
    setSelectedOption(category)
  }

  const filteredProjects = useMemo(() => {
    return selectedOption.toLowerCase() == 'all projects' ?
      portfolioList :  
      portfolioList.filter((project) => project.category.toLowerCase() == selectedOption.toLowerCase())
  }, [selectedOption])

  const loadMore = () => {
    setPerPage(perPage + 5)
  }

  useEffect(() => {
    setSelectedOption(categories[0].title)
  }, [])


  return (
    <div className="flex flex-col">
      <section className="w-full bg-white dark:bg-neutral-900 py-20 lg:py-32 md:max-w-4xl mx-auto px-4">
        <div className="flex flex-col gap-y-7 items-center justify-center text-center">
          <h1 className="mb-4 text-5xl font-normal tracking-normal md:text-6xl">
            Portfolio
          </h1>
          <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliquo.
          </p>
        </div>
        <div className="mx-auto md:px-0 px-3 flex gap-x-5 md:justify-center overflow-auto w-full scrollbar-hide">
          {
            categories.map((category) =>
              <button
                key={category.id}
                className={`
                  whitespace-nowrap
                  font-normal
                  border
                  dark:border-neutral-600
                  text-lg
                  px-7
                  py-4
                  hover:bg-neutral-950
                  hover:text-white
                  transition-all
                  duration-500
                  ${selectedOption.toLowerCase() == category.title.toLowerCase() ? 'bg-neutral-950 text-white' : 'bg-gray-50'}
                `}
                onClick={() => updateTab(category.title)}
              >
                {category.title}
              </button>
            )
          }
        </div>
      </section>
      <div className="relative grid max-w-screen-xl px-4 md:mx-auto gap-8 md:grid-cols-12">
        <PortfolioProject projects={filteredProjects.slice(0, perPage)} />
      </div>
      {
        filteredProjects.length > perPage &&
        <button
          className="
            my-10
            mx-auto
            font-semibold
            md:text-2xl
            text-xl
            inline-flex
            items-center
            gap-2
            group
            dark:text-white
          "
          onClick={loadMore}
        >
          Load more
          <ArrowTopRight
            classNames="
              w-7
              group-hover:translate-x-1
              group-hover:-translate-y-1
              transition-all
              duration-200
              dark:fill-gray-300
            "
          />
        </button>
      }
    </div>
  )
}

export default Portfolio
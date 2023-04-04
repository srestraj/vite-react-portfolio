import { useState, useEffect } from 'react'
import categories from '../../categories.json'

const Portfolio = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const updateTab = (category: any) => {
    setSelectedOption(category)
  }

  useEffect(() => {
    setSelectedOption(categories[0].title)
  }, [])


  return (
    <div className="flex flex-col">
      <section className="w-full bg-white py-20 lg:py-32 md:max-w-4xl mx-auto px-4">
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
    </div>
  )
}

export default Portfolio
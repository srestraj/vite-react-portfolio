import ArrowTopRight from './ArrowTopRight'

const PortfolioProject = () => {
  return (
    <>
      <button
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
        Next
        <ArrowTopRight
          classNames="
            w-7
            group-hover:translate-x-1
            group-hover:-translate-y-1
            transition-all
            duration-200
          "
        />
      </button>
    </>
  )
}

export default PortfolioProject
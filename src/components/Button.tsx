interface Props {
  runFunc: () => void,
  classNames?: string
}
const Button = ({ classNames, runFunc = () => {} }: Props) => {
  return (
    <div
      className={`
        lg:-bottom-8
        lg:right-4
        lg:m-0
        mt-5
        ${ classNames }
        rounded-full
        overflow-hidden
      `}
    >
      <button
        className={`
          relative
          w-full
          h-full
          inline-flex
          items-center
          justify-center
          rounded-full
          border-2
          border-neutral-800
          after:absolute
          after:left-0
          after:top-0
          after:content-['']
          after:bg-neutral-900
          after:w-0
          after:h-full
          hover:after:w-full
          after:transition-all
          duration-700
          group
        `}
        onClick={runFunc}
      >
        <i className="absolute las la-angle-down text-4xl z-10 group-hover:text-white transition-all duration-500"></i>
      </button>
    </div>
  )
}

export default Button
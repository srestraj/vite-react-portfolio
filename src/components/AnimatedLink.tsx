import { Link } from'react-router-dom'
import ArrowTopRight from './ArrowTopRight'

interface Props {
  title: string,
  link: string,
  isExternal: boolean
}

const AnimatedLink = ({ title, link, isExternal }:Props) => {
  return (
    <>
      {
        isExternal ?
          <a
          href={link}
          target="_blank"
          className="
            font-semibold
            md:text-2xl
            text-xl
            inline-flex
            items-center
            gap-2
            group
            dark:text-gray-300
          "
        >
          { title }
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
        </a> : 
        <Link
          to={link}
          className="
            font-semibold
            md:text-2xl
            text-xl
            inline-flex
            items-center
            gap-2
            group
            dark:text-gray-300
          "
        >
          { title }
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
        </Link>
      }
    </>
  )
}

export default AnimatedLink
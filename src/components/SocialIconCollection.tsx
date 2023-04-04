interface Props {
  links: any
}
const SocialIconConnection = ({ links }:Props) => {
  return (
    <div className="grid auto-cols-fr max-w-scree-xl md:grid-cols-3 grid-cols-1 gap-10">
      {
        links.map((link: any) => 
        <a key={link.link} href={link.link} target="_blank" className="inline-flex items-center gap-2">
          <i className={`lab ${link.iconClass} text-2xl`}></i>
          <span className="font-semibold text-xl">
            { link.title }
          </span>
        </a>
        )
      }
    </div>
  )
}

export default SocialIconConnection
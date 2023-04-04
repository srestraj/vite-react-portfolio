import ReactMarkdown from 'react-markdown'
import raw from 'rehype-raw'
import pastRoles from '../../pastRoles.json'
import skills from '../../skills.json'
import socialLinks from '../../socialLinks.json'
import Position from './Position'
import SocialIconConnection from './SocialIconCollection'

interface Props {
  title: string,
  description: string
}
const ResumeTab = ({ title, description }:Props) => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="relative grid auto-cols-fr gap-5 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
        <div className="place-self-start lg:col-span-5 lg:sticky lg:top-8">
          <ReactMarkdown
            className="text-3xl font-normal tracking-normal xl:text-5xl md:text-4xl"
            rehypePlugins={[raw]}
          >
            {title}
          </ReactMarkdown>
        </div>
        <div className="lg:col-span-7 divide-y">
          {
            title.toLowerCase().includes('experience') ?
            pastRoles.map((role: any) => <Position key={role.id} job={role} isResume={true} />) :
            title.toLowerCase().includes('skill') ?
            skills.map((skill: any) => <Position key={skill.id} job={skill} isResume={true} />) :
            title.toLowerCase().includes('follow') ?
            <SocialIconConnection links={socialLinks} /> :
            <ReactMarkdown
              className="font-normal leading-relaxed lg:mb-8 text-lg"
              rehypePlugins={[raw]}
            >
              {description}
            </ReactMarkdown>
          }
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default ResumeTab
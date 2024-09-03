import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import Image from 'next/image'

export default function ProjectsPage() {
  return (
    <div className='mx-auto max-w-7xl min-h-screen  lg:px-8 bg-white border-x-[1px] border-gray-100 pb-32'>
      <div className='relativ px-4 sm:px-8 lg:px-12 pt-32'>
        <div className='mx-auto max-w-5xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl'>Things I've explored.</h1>
          <p className='mt-6 text-base text-zinc-600 max-w-2xl'>These projects reflect my insatiable curiosity and drive to explore new things. Some projects from my professional engagements cannot be published due to confidentiality reasons.</p>
          <BentoGrid className='mt-6 '>
            {
              projects.map((project, index) => (
                <BentoGridItem
                  icon={project.icon}
                  key={index}
                  title={project.title}
                  description={project.description}
                  header={project.header}
                  className='bg-zinc-50 space-y-4'
                />
              ))
            }
          </BentoGrid>
        </div>
      </div>
    </div>
  )
}

const Header = ({ src }: { src: string }) => (
  <div className="relative aspect-video rounded-xl bg-zinc-100">
    {
      src.length > 0 && <Image className="rounded-lg object-cover" src={src} alt="" fill />
    }
  </div>
);

const _Icon = ({ src }: { src: string }) => (
  <div className="relative h-5 w-5 rounded-md ">
    <Image className="rounded-lg object-cover" src={src} alt="" fill />
  </div>
);

const projects = [

  {
    title: "Monster Pro",
    description: "Explore the birth of groundbreaking ideas and inventions. Explore the birth of groundbreaking ideas and inventions",
    header: <Header src={'/img-monster-pro.png'} />,
    icon: <_Icon src='/ic-monster-pro.png' />
  },
  {
    title: "Casso",
    description: "Explore the birth of groundbreaking ideas and inventions. Explore the birth of groundbreaking ideas and inventions",
    header: <Header src={''} />,
    icon: <_Icon src='/ic-casso.png' />
  },
  {
    title: "Inspection Machine",
    description: "Explore the birth of groundbreaking ideas and inventions. Explore the birth of groundbreaking ideas and inventions",
    header: <Header src={''} />,
    icon: <_Icon src='/ic-semen-merahputih.webp' />
  },
  {
    title: "Note Encryption",
    description: "Explore the birth of groundbreaking ideas and inventions. Explore the birth of groundbreaking ideas and inventions",
    header: <Header src={''} />,
    icon: <_Icon src='/ic-note-encryption.png' />
  },
  {
    title: "Cashback Count",
    description: "Explore the birth of groundbreaking ideas and inventions. Explore the birth of groundbreaking ideas and inventions",
    header: <Header src={''} />,
    icon: <_Icon src='/ic-cashbakck-count.png' />
  },

]
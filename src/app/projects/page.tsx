import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import Image from 'next/image'
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className='mx-auto max-w-7xl min-h-screen  lg:px-8 bg-white border-x-[1px] border-gray-100 pb-32'>
      <div className='relativ px-4 sm:px-8 lg:px-12 pt-32'>
        <div className='mx-auto max-w-5xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl'>Things I have explored.</h1>
          <p className='mt-6 text-base text-zinc-600 max-w-2xl'>These projects reflect my insatiable curiosity and drive to explore new things. Some projects from my professional engagements cannot be published due to confidentiality reasons.</p>
          <BentoGrid className='mt-6 '>
            {
              projects.map((project, index) => (
                <BentoGridItem
                  icon={project.icon}
                  linkProject={project.linkProject}
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
  <div className="relative h-7 w-7">
    <Image className="object-cover" src={src} alt="" fill />
  </div>
);

const _LinkProject = ({ link, text }: { link: string, text: string, }) => (
  <Link href={link}>
    <p className="relative pt-4 flex text-sm font-medium text-zinc-400 transition ">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
      </svg>
      <span className="ml-2">{text}</span>
    </p>
  </Link>
);

const projects = [

  {
    title: "Monster Pro",
    description: "Monster Pro is a property superapps that actively collaborates with property industry players such as: Property Developers, Service Vendors, Offices & Property Agents under the auspices of AREBI",
    header: <Header src={'/img-monster-pro.png'} />,
    icon: <_Icon src='/ic-monster-pro.png' />,
    linkProject:
      <div className="pt-5 flex items-center gap-2">
        <Link href={'https://apps.apple.com/us/app/monster-pro/id6450938268'}
          className="relative max-h-8 w-[94px] aspect-[3.1]">
          <Image src={'/img-download-appstore.webp'} alt="" fill />
        </Link>
        <Link href={'https://play.google.com/store/apps/details?id=id.monsterpro.apps&hl=en'}
          className="relative max-h-8 w-[94px] aspect-[3.1]">
          <Image src={'/img-download-playstore.png'} alt="" fill />
        </Link>
      </div>,
  },
  {
    title: "Casso",
    description: "A restaurant application that facilitates the order to payment process and provides various reports, thereby creating excellent service and a more satisfying dining experience.",
    header: <Header src={''} />,
    icon: <_Icon src='/ic-casso.png' />,
    linkProject: <_LinkProject link='https://github.com/masdaagus/Casso' text='github.casso' />,

  },
  {
    title: "Inspection Machine",
    description: "Explore the birth of groundbreaking ideas and inventions. Explore the birth of groundbreaking ideas and inventions",
    header: <Header src={''} />,
    icon: <_Icon src='/ic-semen-merahputih.webp' />,
    linkProject: <_LinkProject link='https://github.com/masdaagus/Inspection-App' text='github.inspection-app' />
  },
  {
    title: "Note Encryption",
    description: "a simple note-taking application encrypted using the DES(Data Encryption Standard) and RSA(Rivest Shamir Adleman) algorithms",
    header: <Header src={''} />,
    icon: <_Icon src='/ic-note-encryption.png' />,
    linkProject: <_LinkProject link='https://github.com/masdaagus/Note-Encryption-App' text='github.note-encryption' />
  },
  {
    title: "Cashback Count",
    description: "Cashback Count is an application to get us the best value posible in the era of cashback war.",
    header: <Header src={''} />,
    icon: <_Icon src='/ic-cashbakck-count.png' />,
    linkProject: <_LinkProject link='https://github.com/masdaagus/Cashback-count' text='github.cashback-count' />
  },

]
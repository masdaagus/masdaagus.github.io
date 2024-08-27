import Image from 'next/image'
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export default function AboutPage() {
  const socialMedia = [
    { 'title': 'LinkedIn', 'href': '' },
    { 'title': 'Github', 'href': '' },
    { 'title': 'Instagram', 'href': '' },
  ];

  return (
    <div className='mx-auto max-w-7xl lg:px-8 bg-white border-x-[1px] border-gray-100 pb-32'>
      <div className='relativ px-4 sm:px-8 lg:px-12 pt-32'>
        <div className='mx-auto max-w-2xl lg:max-w-5xl '>
          <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
            {/* Photo Profile */}
            <div className='lg:pl-20'>
              <div className='max-w-xs px-2.5 lg:max-w-none'>
                <Image
                  src={'/img-profile.jpg'}
                  alt=''
                  height={500}
                  width={500}
                  className='transition duration-1000 scale-100 blur-0 aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover'
                />
              </div>
            </div>
            {/* Information */}

            <div className='lg:order-first lg:row-span-2'>
              <h1 className='mb-12 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl'>I’m Zakiego. I live in South Borneo, where I build the future.</h1>
              <h2 className='mb-10 text-3xl font-semibold'>Who is 'Agus'?</h2>
              <p className='mb-7 text-gray-500 text-base font-light'>I am a generalist who enjoys exploring new things and expressing them through writing and tweets.</p>
              <p className='mb-7 text-gray-500 text-base font-light'>I work as a Frontend Engineer on a daily basis, but it doesn't stop there. I also enjoy working directly with databases and creating APIs, so maybe we can call it Fullstack Engineer?</p>
              <p className='mb-7 text-gray-500 text-base font-light'>I have been familiar with the world of technology since my middle school days. I started seriously delving into the coding world since late 2020. It began with learning Excel, then continued into the field of data science. However, I eventually found comfort and decided to anchor myself in the world of web development. I write code in TypeScript (JavaScript), Python, R, and Golang.</p>
              <p className='mb-7 text-gray-500 text-base font-light'>Currently (as of 2023), I am still a Sociology student at Lambung Mangkurat University, Banjarmasin, South Kalimantan.</p>
              <p className='mb-12 text-gray-500 text-base font-light'>I value usefulness and I am open to volunteering. I have been contributing to Pusara Digital for Healthcare Workers by LaporCovid-19 since August 2020.</p>
              <h2 className='mb-8 text-3xl font-semibold'>What i Belive In</h2>
              <p className='mb-12 text-gray-500 text-base font-light'>I want to live a life that goes beyond mere existence. I dedicate myself to being beneficial.</p>
              <div className='flex gap-8 mb-8'>
                <div className='border-l-2 border-gray-300'></div>
                <p className='text-gray-500 text-base font-light'>
                  <em>
                    If life is just about living, even pigs in the forest are alive. If work is just about working, monkeys also work. - Buya Hamka
                  </em>
                </p>
              </div>
              <div className='flex gap-8 mb-8'>
                <div className='border-l-2 border-gray-300'></div>
                <p className='text-gray-500 text-base font-light'>
                  <em>
                    We never know which deeds will lead us to heaven. ... What's certain is never underestimate righteous deeds, no matter how small they may be. Because in the past, a prostitute entered heaven simply by giving water to a thirsty dog. - Ustadz Aan Chandra Talib
                  </em>
                </p>
              </div>
              <div className='flex gap-8 mb-8'>
                <div className='border-l-2 border-gray-300'></div>
                <p className='text-gray-500 text-base font-light'>
                  <em>
                    Again, you can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life. - Steve Jobs
                  </em>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className='lg:ml-20 '>
              <div className='space-y-4'>
                <Link href={''}>
                  <div className='flex items-center gap-2 mb-3'>
                    <FaGithub className="h-6 w-6 text-gray-500" />
                    <p className='text-sm text-gray-500'>Follow on Github</p>
                  </div>
                </Link>
                <Link href={''}>
                  <div className='flex items-center gap-2 mb-3'>
                    <FaLinkedin className="h-6 w-6 text-gray-500" />
                    <p className='text-sm text-gray-500'>Follow on LinkedIn</p>
                  </div>
                </Link>
                <Link href={''}>
                  <div className='flex items-center gap-2 mb-3'>
                    <FaInstagram className="h-6 w-6 text-gray-500" />
                    <p className='text-sm text-gray-500'>Follow on Instagram</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export default function AboutPage() {

  return (
    <div className='mx-auto max-w-7xl lg:px-8 bg-white border-x-[1px] border-gray-100 pb-32'>
      <div className='relativ px-4 sm:px-8 lg:px-12 pt-32'>
        <div className='mx-auto max-w-2xl lg:max-w-5xl '>
          <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
            {/* Photo Profile */}
            <div className='lg:pl-20'>
              <div className='max-w-xs px-2.5 lg:max-w-none'>
                <Image
                  src={'/img-profile-2.jpg'}
                  alt=''
                  height={500}
                  width={500}
                  className='transition duration-1000 scale-100 blur-0 aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover'
                />
              </div>
            </div>
            {/* Information */}

            <div className='lg:order-first lg:row-span-2'>
              <h1 className='mb-12 text-4xl font-bold tracking-normal text-zinc-800 sm:text-5xl'>I’m Masda Agus. I live in North Sumatra, where I build the future.</h1>
              <h2 className='mb-10 text-3xl font-semibold'>Who is &apos;Agus&apos;?</h2>
              <p className='mb-7 text-gray-500 text-base font-light'>I am a generalist who enjoys exploring new things and expressing them through writing and tweets.</p>
              <p className='mb-7 text-gray-500 text-base font-light'>I work as a Mobile Developer on a daily basis, but it doesn&apos;t stop there. I also enjoy working directly with Web Developer</p>
              <p className='mb-7 text-gray-500 text-base font-light'>I have been familiar with the world of technology since my high school days. I started seriously delving into the coding world since late 2020. It began with learning Python, then continued createing simple calculator. However, I eventually found comfort and decided to anchor myself in the world of mobile development. I write code in Flutter (Dart), Nextjs (TypeScript), Python.</p>
              <p className='mb-12 text-gray-500 text-base font-light'>I find it incredibly satisfying to create digital experiences that are both functional and enjoyable to use, and I believe that good design can have a positive impact on people&apos;s lives.</p>
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
                    We never know which deeds will lead us to heaven. ... What&apos;s certain is never underestimate righteous deeds, no matter how small they may be. Because in the past, a prostitute entered heaven simply by giving water to a thirsty dog. - Ustadz Aan Chandra Talib
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
                <Link href={'https://www.linkedin.com/in/masda-agus-1393a01b4/'} target="_blank">
                  <div className='flex items-center gap-2 mb-3'>
                    <FaLinkedin className="h-6 w-6 text-gray-500" />
                    <p className='text-sm text-gray-500'>Follow on LinkedIn</p>
                  </div>
                </Link>
                <Link href={'https://github.com/masdaagus'} target="_blank">
                  <div className='flex items-center gap-2 mb-3'>
                    <FaGithub className="h-6 w-6 text-gray-500" />
                    <p className='text-sm text-gray-500'>Follow on Github</p>
                  </div>
                </Link>
                <Link href={'https://www.instagram.com/masdaagus/'} target="_blank">
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

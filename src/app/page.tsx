import { Container } from "@/components/container/container";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  const profilePhotos = [
    '/img-profile-4.jpg',
    '/img-profile-2.jpg',
    '/img-profile-5.jpg',
    '/img-profile-3.jpg',
    '/img-profile-1.jpg',
  ];

  return (
    <main className="">
      <div className="pt-[75px] mx-auto max-w-7xl bg-white border-x-[1px] border-gray-100 pb-32">
        <Container className="px-4 md:px-[80px] lg:px-[112px]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-8">

            <div className="max-w-[550px]">
              <div className="relative mb-6 h-16 w-16 rounded-full border border-gray-100">
                <Image className="rounded-full" src={'/img-profile.jpg'} alt="" fill />
              </div>
              <h1 className="mb-8 text-4xl font-bold tracking-normal text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Mobile Developer, Flutter, based in North Sumatera
              </h1>
              <p className="mt-6 mb-6 text-base font-light text-zinc-600 dark:text-zinc-400">
                I&apos;m Masda Agus Ruswoko, also known as Agus, a mobile engineer based in North Sumatera, Indonesia. I specialize in mobile development, handling everything in mobile development like notification, backround services, native functions and the others. My toolkit includes Flutter, Dart, TypeScript, Next.js, Nest.js, and more
              </p>

              <div className="flex gap-4">
                <Link href={'https://www.linkedin.com/in/masda-agus-1393a01b4/'} target="_blank">
                  <FaLinkedin className="h-6 w-6 text-gray-500 hover:text-black" />
                </Link>
                <Link href={'https://www.instagram.com/masdaagus/'} target="_blank">
                  <FaInstagram className="h-6 w-6 text-gray-500 hover:text-black" />
                </Link>
                <Link href={'https://github.com/masdaagus'} target="_blank">
                  <FaGithub className="h-6 w-6 text-gray-500 hover:text-black" />
                </Link>
              </div>
            </div>

            <div className="max-w-[550px] w-full flex flex-col gap-4 mt-4 p-6 rounded-2xl border border-zinc-100">
              <div className="flex items-center gap-2 my-2">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none"> <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path></svg>
                <h2 className="flex text-sm font-semibold text-zinc-900">Work</h2>
              </div>
              {
                experiences.map((data, i) => (
                  <ExperienceItem
                    key={i}
                    companyImage={data.companyImage}
                    companyName={data.companyName}
                    companyLocation={data.companyLocation}
                    jobTitle={data.jobTitle}
                    workingTime={data.workingTime}
                  />
                ))
              }
              <a
                href="https://www.linkedin.com/in/masda-agus/"
                target="_blank"
                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full no-underline">
                Go to LinkedIn
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>

        </Container>
      </div>

      <div className="-my-7 mb-16">
        <div className="flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {
            profilePhotos.map((photo, index) => (
              <div
                key={photo}
                className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                <Image
                  src={photo}
                  alt=""
                  fill
                  className="bg-transparent transition duration-1000  scale-100 blur-0 absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className="h-20"></div>
    </main>
  );
}

const ExperienceItem = ({
  companyImage,
  companyName,
  companyLocation,
  jobTitle,
  workingTime,
}: {
  companyImage: string
  companyName?: string
  companyLocation?: string
  jobTitle?: string
  workingTime?: string

}) => (
  <div className="flex gap-4">
    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
      <div className="relative h-8 w-8 flex rounded-full">
        <Image className="rounded-full" src={companyImage} alt="" fill />
      </div>
    </div>

    <div className="w-full flex flex-col gap-1">
      <p className="text-sm font-medium text-zinc-900">{companyName}</p>
      <p className="text-xs font-light  text-zinc-400">{companyLocation}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs font-light  text-zinc-500">{jobTitle}</p>
        <p className="text-xs font-light  text-zinc-500">{workingTime}</p>
      </div>
    </div>
  </div>
);


const experiences = [
  {
    "companyImage": '/ic-tog.jpg',
    "companyName": 'PT. Triple One Group',
    "companyLocation": 'Surabaya, Indonesia',
    "jobTitle": 'Mobile Developer',
    "workingTime": 'Aug 2022 — Present',
  },
  {
    "companyImage": '/img-empty-company.png',
    "companyName": 'Freelance',
    "companyLocation": 'Medan, Indonesia',
    "jobTitle": 'Mobile Developer',
    "workingTime": 'Aug 2020 — Present',
  },
  {
    "companyImage": '/ic-semen-merahputih.webp',
    "companyName": 'PT. Cemindo Gemilang',
    "companyLocation": 'Medan, Indonesia',
    "jobTitle": 'Patroller / IT Support',
    "workingTime": 'Aug 2018 — 2022',
  },
]
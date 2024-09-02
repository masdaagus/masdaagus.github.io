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
        <Container className="px-4 lg:px-[112px]">
          <div className="max-w-2xl">
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
    </main>
  );
}

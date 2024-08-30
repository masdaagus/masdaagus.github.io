'use client'
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';

export const Navbar = () => {

    const pathname = usePathname()

    const navList = [
        { title: 'About', href: '/about', },
        { title: 'Projects', href: '/projects', },
        { title: 'Uses', href: '/uses', },
        { title: 'Read', href: '/read', },
    ];

    const isHome = pathname != '/';

    return (
        <div className='mx-auto max-w-7xl w-full h-20 px-[112px] bg-white'>
            <div className={`h-full flex items-center ${!isHome ? 'justify-center' : 'justify-between'}`}>

                {
                    isHome &&
                    <Link className='hidden sm:block' href={'/'}>
                        <div className="relative h-10 w-10 rounded-full border border-gray-100">
                            <Image className="rounded-full" src={'/img-profile.jpg'} alt="" fill />
                        </div>
                    </Link>
                }

                <div className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
                    {
                        navList.map((data) => (
                            <Link
                                key={data.title}
                                href={data.href}>
                                <div>
                                    <p className='relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400'>{data.title}</p>
                                    {
                                        pathname == data.href.toLowerCase() &&
                                        <div className='mx-2 h-[1px] rounded-full bg-teal-500'></div>
                                    }
                                </div>
                            </Link>
                        ))
                    }
                </div>
                {isHome && <div className='hidden sm:block'></div>}
            </div>
        </div>
    )
}

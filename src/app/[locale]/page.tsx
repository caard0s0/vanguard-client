'use client'

import Image from 'next/image'
import Link from 'next/link'
import { User2, Menu, X, MoveRight } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const homeContent = useTranslations('home')
  const homeNavContent = useTranslations('home_nav')

  return (
    <div className="bg-white">
      <header>
        <nav className="relative flex items-center justify-between bg-white pr-5">
          <a href="#">
            <Image
              src="/united_atomic_bank_logo_black.svg"
              width={75}
              height={75}
              alt="UAB Logo"
            />
          </a>

          <div className="absolute right-20 flex">
            <a className="rounded-full p-2 hover:bg-gray-300" href="/en-US">
              <Image
                src="/united-states-flag.png"
                height={22}
                width={22}
                alt="United States Flag"
              />
            </a>

            <a className="rounded-full p-2 hover:bg-gray-300" href="/pt-BR">
              <Image
                src="/brazil-flag.png"
                height={22}
                width={22}
                alt="Brazil Flag"
              />
            </a>
          </div>

          {toggleMenu ? (
            <X
              size={28}
              className="cursor-pointer text-blue-950"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <Menu
              size={28}
              className="cursor-pointer text-blue-950"
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu ? (
            <div className="fixed right-0 top-[4.6875rem] z-[100] h-full w-full translate-x-0 overflow-auto bg-white pb-[4.6875rem] transition-all duration-500 ease-in-out md:hidden">
              <nav onClick={() => setToggleMenu(false)}>
                <ul className="mt-20 flex cursor-pointer flex-col items-center gap-10 text-xl font-semibold text-zinc-950">
                  <li>
                    <a>{homeNavContent('about_link')}</a>
                  </li>
                  <li>
                    <a>{homeNavContent('support_link')}</a>
                  </li>
                  <li>
                    <Link href="/signin" className="flex items-center gap-2">
                      <User2 size={19} color="black" />
                      {homeNavContent('signin_link')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup">
                      {homeNavContent('start_account_link')}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          ) : (
            <div className="fixed right-0 top-[4.6875rem] z-[100] h-full w-full translate-x-full overflow-auto bg-white pb-[4.6875rem] transition-all ease-in-out md:hidden"></div>
          )}
        </nav>
      </header>

      <main>
        <section>
          <div className="relative">
            <div className="absolute -top-1 left-0 h-16 w-6 bg-white"></div>
            <Image
              width={450}
              height={450}
              src="/home_image.jpg"
              alt="Mountains landscape"
            />
            <div className="absolute -bottom-1 right-0 h-7 w-32 bg-white"></div>
          </div>

          <div className="mt-10 flex flex-col items-center">
            <h1 className="text-4xl font-semibold text-blue-950">UAB</h1>
            <span className="mt-4 text-gray-600">{homeContent('span_1')}</span>
            <span className="text-extrabold mx-16 mt-1 text-center text-3xl text-zinc-950">
              {homeContent('span_2')}
            </span>
            <div className="mt-9 flex items-center justify-center gap-2 font-bold text-blue-900 hover:text-blue-700">
              <Link className="text-xl font-bold" href="/signup">
                {homeContent('start_account_link')}
              </Link>
              <MoveRight size={30} className="mt-1" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

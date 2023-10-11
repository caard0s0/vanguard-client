'use client'

import Image from 'next/image'
import Link from 'next/link'
import { User2, Menu, X, MoveRight } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="bg-white">
      <header>
        <nav className="flex items-center justify-between bg-white pr-5">
          <a href="#">
            <Image
              priority={true}
              src="/united_atomic_bank_logo_black.svg"
              width={75}
              height={75}
              alt="United Atomic Bank Logo"
            />
          </a>

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
                    <a>About</a>
                  </li>
                  <li>
                    <a>Support</a>
                  </li>
                  <li>
                    <Link href="/signin" className="flex items-center gap-2">
                      <User2 size={19} color="black" />
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup">Start Free Account</Link>
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
              alt="United Atomic Bank Logo"
            />
            <div className="absolute -bottom-1 right-0 h-7 w-32 bg-white"></div>
          </div>

          <div className="mt-10 flex flex-col items-center">
            <h1 className="text-4xl font-semibold text-blue-950">UAB</h1>
            <p className="mt-4 text-gray-600">More than a bank</p>
            <h2 className="text-extrabold mx-16 mt-1 text-center text-3xl text-zinc-950">
              A Super App that simplifies your life
            </h2>
            <div className="mt-9 flex items-center justify-center gap-2 font-bold text-blue-900 hover:text-blue-700">
              <Link className="text-xl font-bold" href="/signup">
                Start Free Account
              </Link>
              <MoveRight size={30} className="mt-1" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

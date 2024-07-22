import { X, Menu, LogIn } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const homeNavContent = useTranslations('home_nav')

  return (
    <nav className="flex items-center justify-between bg-white pr-5 xs:relative lg:static lg:mx-5">
      <a href="#">
        <Image
          src="/united_atomic_bank_logo_black.svg"
          width={75}
          height={75}
          alt="Vanguard Logo"
        />
      </a>

      <nav className="xs:hidden lg:flex">
        <ul className="flex cursor-pointer items-center text-xl font-semibold text-zinc-950 lg:gap-6 xl:gap-16">
          <li>
            <a>{homeNavContent('about_link')}</a>
          </li>
          <li>
            <a>{homeNavContent('support_link')}</a>
          </li>
          <li>
            <Link href="/signin" className="flex items-center gap-2">
              <LogIn size={19} color="black" />
              {homeNavContent('signin_link')}
            </Link>
          </li>
          <li>
            <Link href="/signup">{homeNavContent('start_account_link')}</Link>
          </li>
        </ul>
      </nav>

      <div className="right-20 flex gap-3 xs:absolute lg:static">
        <a href="/en-US">
          <Image
            src="/united-states-flag.png"
            height={22}
            width={22}
            alt="United States Flag"
          />
        </a>

        <a href="/pt-BR">
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
          className="cursor-pointer text-blue-950 lg:hidden"
          onClick={() => setToggleMenu(false)}
        />
      ) : (
        <Menu
          size={28}
          className="cursor-pointer text-blue-950 lg:hidden"
          onClick={() => setToggleMenu(true)}
        />
      )}

      {toggleMenu ? (
        <div className="fixed right-0 top-[4.6875rem] z-50 h-full w-full translate-x-0 bg-white pb-[4.6875rem] transition-all duration-500 ease-in-out lg:hidden">
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
                  <LogIn size={19} color="black" />
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
        <div className="fixed right-0 top-[4.6875rem] z-50 h-full w-full translate-x-full bg-white pb-[4.6875rem] transition-all lg:hidden"></div>
      )}
    </nav>
  )
}

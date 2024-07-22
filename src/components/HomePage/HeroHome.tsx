import { MoveRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

export function HeroHome() {
  const homeContent = useTranslations('hero_home')

  return (
    <>
      <div className="xs:relative lg:hidden">
        <div className="absolute -top-1 left-0 bg-white xs:h-16 xs:w-6 sm:h-24 sm:w-9 md:h-28 md:w-11"></div>
        <Image
          width={450}
          height={450}
          src="/home_image.jpg"
          alt="Mountains landscape"
        />
        <div className="absolute -bottom-1 right-0 bg-white xs:h-7 xs:w-32 sm:h-9 sm:w-48 md:h-11 md:w-56"></div>
      </div>

      <div className="lg:relative lg:h-screen lg:bg-[url('/home_image.jpg')] lg:bg-cover lg:bg-no-repeat">
        <div className="absolute bg-white/50 xs:h-7 xs:w-32 sm:w-48 md:h-11 lg:left-20 lg:top-64 lg:h-96 lg:w-[25rem]"></div>

        <div className="flex flex-col items-center bg-white/90 xs:mt-10 lg:absolute lg:left-40 lg:top-20 lg:mt-0 lg:py-40">
          <h1 className="text-4xl font-semibold text-blue-950">Vanguard</h1>
          <span className="mt-4 text-gray-600">{homeContent('span_1')}</span>
          <span className="mx-16 mt-1 text-center text-3xl text-zinc-950">
            {homeContent('span_2')}
          </span>

          <div className="mt-9 flex items-center gap-2 font-bold text-blue-900 hover:text-blue-700">
            <Link className="text-xl font-bold" href="/signup">
              {homeContent('start_account_link')}
            </Link>
            <MoveRight size={30} />
          </div>
        </div>
      </div>
    </>
  )
}

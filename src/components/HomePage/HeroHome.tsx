import { MoveRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

export function HeroHome() {
  const homeContent = useTranslations('hero_home')

  return (
    <>
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
        <div className="mt-9 flex items-center gap-2 font-bold text-blue-900 hover:text-blue-700">
          <Link className="text-xl font-bold" href="/signup">
            {homeContent('start_account_link')}
          </Link>
          <MoveRight size={30} />
        </div>
      </div>
    </>
  )
}

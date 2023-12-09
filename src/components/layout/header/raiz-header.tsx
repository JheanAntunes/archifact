import {
  TypographyList,
  TypographyListItem
} from '@/components/typography/typography'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

function RaizHeader() {
  return (
    <header>
      <nav className="container flex items-center justify-between gap-5 py-5">
        <Link href="#" className="flex flex-col font-sans font-medium">
          <span className="bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-sm text-transparent lg:transition-colors lg:hover:bg-gradient-to-l">
            Archifact
          </span>
          <span className="bg-gradient-to-l from-zinc-50 to-zinc-400 bg-clip-text text-lg text-transparent lg:transition-colors lg:hover:bg-gradient-to-r">
            Architects
          </span>
        </Link>
        <TypographyList>
          <TypographyListItem className="flex gap-5 font-sans font-medium text-zinc-50">
            <Link href="#">Home</Link>
            <Link
              href="#"
              className="text-zinc-400 lg:transition-colors lg:hover:text-zinc-50"
            >
              Working Process
            </Link>
            <Link
              href="#"
              className="text-zinc-400 lg:transition-colors lg:hover:text-zinc-50"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-zinc-400 lg:transition-colors lg:hover:text-zinc-50"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-zinc-400 lg:transition-colors lg:hover:text-zinc-50"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-zinc-400 lg:transition-colors lg:hover:text-zinc-50"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-zinc-400 lg:transition-colors lg:hover:text-zinc-50"
            >
              Contact Us
            </Link>
          </TypographyListItem>
        </TypographyList>
        <Link
          href="#"
          className={buttonVariants({
            variant: 'outline',
            className:
              'rounded-sm bg-transparent font-sans font-medium text-zinc-50'
          })}
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  )
}

export default RaizHeader

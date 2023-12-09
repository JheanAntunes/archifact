import { TypographyListItem } from '@/components/typography/typography'
import { dataLinksMenuRaiz } from '@/utils/data-links-menu-raiz'
import Link from 'next/link'
import MenuMobile from '../menu/mobile/menu-mobile'
import LinkStyleButton from '../nav/link-style-button'
import NavLinks from '../nav/nav-links'

function RaizHeader() {
  return (
    <header>
      <nav className="container flex items-center justify-between gap-5 py-5 md:justify-between">
        <Link href="#" className="flex flex-col font-sans font-medium">
          <span className="bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-sm text-transparent lg:transition-colors lg:hover:bg-gradient-to-l">
            Archifact
          </span>
          <span className="bg-gradient-to-l from-zinc-50 to-zinc-400 bg-clip-text text-lg text-transparent lg:transition-colors lg:hover:bg-gradient-to-r">
            Architects
          </span>
        </Link>
        <MenuMobile>
          <NavLinks
            dataLinks={dataLinksMenuRaiz}
            className="flex-col md:hidden"
          >
            <TypographyListItem>
              <LinkStyleButton
                href="#"
                className="flex w-full"
                variant="outline"
              />
            </TypographyListItem>
          </NavLinks>
        </MenuMobile>
        <NavLinks dataLinks={dataLinksMenuRaiz} className="hidden md:flex" />
        <LinkStyleButton
          href="#"
          className="hidden md:inline-flex"
          variant="outline"
        />
      </nav>
    </header>
  )
}

export default RaizHeader

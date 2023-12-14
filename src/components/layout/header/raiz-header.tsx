import { TypographyListItem } from '@/components/typography/typography'
import { dataLinksMenuRaiz } from '@/utils/data-links-menu-raiz'
import MenuMobile from '../menu/mobile/menu-mobile'
import LinkStyleButton from '../nav/link-style-button'
import NavLinks from '../nav/nav-links'
import Logo from './Logo'

function RaizHeader() {
  return (
    <header>
      <nav className="container flex items-center justify-between gap-5 py-5 md:justify-between">
        <Logo />
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
              >
                Get a Quote
              </LinkStyleButton>
            </TypographyListItem>
          </NavLinks>
        </MenuMobile>
        <NavLinks dataLinks={dataLinksMenuRaiz} className="hidden md:flex" />
        <LinkStyleButton
          href="#"
          className="hidden md:inline-flex"
          variant="outline"
        >
          Get a Quote
        </LinkStyleButton>
      </nav>
    </header>
  )
}

export default RaizHeader

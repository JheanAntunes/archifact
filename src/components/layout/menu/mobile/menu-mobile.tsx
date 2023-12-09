'use client'
import { Button } from '@/components/ui/button'
import { AnimatePresence } from 'framer-motion'
import { MenuIcon } from 'lucide-react'
import ButtonCloseMenu from './button-close-menu'
import ContainerContent from './container-content'
import Fundo from './fundo'
import { useMenuMobile } from './useMenu-mobile'

function MenuMobile({ children }: React.PropsWithChildren) {
  const {
    isMenuMobileOpen,
    handleClickToggleMenu,
    handleClickFundoCloseMenuOrLinks
  } = useMenuMobile()

  return (
    <>
      <Button
        size="icon"
        className="bg-transparent text-zinc-50 md:hidden"
        variant="ghost"
        aria-expanded={isMenuMobileOpen}
        onClick={handleClickToggleMenu}
      >
        <MenuIcon />
      </Button>
      <AnimatePresence>
        {isMenuMobileOpen && (
          <Fundo
            className="md:hidden"
            exit={{ opacity: 0 }}
            onClick={handleClickFundoCloseMenuOrLinks}
          >
            <ContainerContent>
              <ButtonCloseMenu onClick={handleClickToggleMenu} />
              {children}
            </ContainerContent>
          </Fundo>
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuMobile

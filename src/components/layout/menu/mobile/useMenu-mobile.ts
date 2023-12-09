import { useState } from 'react'

export const useMenuMobile = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false)

  const handleClickToggleMenu = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen)
    return
  }

  const handleClickFundoCloseMenuOrLinks = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target || e.currentTarget !== e.target)
      handleClickToggleMenu()
  }

  return {
    isMenuMobileOpen,
    handleClickToggleMenu,
    handleClickFundoCloseMenuOrLinks
  }
}

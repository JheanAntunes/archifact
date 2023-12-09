export type DataLinks = {
  href: string
  name: string
  icon?: unknown
}
export const dataLinksMenuRaiz: DataLinks[] = [
  {
    href: '#',
    name: 'Home'
  },
  {
    href: '#',
    name: 'Working Process'
  },
  {
    href: '#',
    name: 'About Us'
  },
  {
    href: '#',
    name: 'Projects'
  },
  {
    href: '#',
    name: 'Services'
  },
  {
    href: '#',
    name: 'Blog'
  },
  {
    href: '#',
    name: 'Contact Us'
  }
] as const

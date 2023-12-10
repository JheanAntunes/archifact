import { Poppins, Roboto } from 'next/font/google'

export const poppins = Poppins({
  weight: ['400', '500'],
  variable: '--font-poppins',
  subsets: ['latin']
})

export const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto',
  subsets: ['latin']
})

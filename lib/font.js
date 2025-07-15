import { Outfit, Lora } from 'next/font/google'

export const outfit = Outfit({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--outfit",
    display: 'swap',
})

export const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--lora",
    display: 'swap',
})

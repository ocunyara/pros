import React from 'react'
import localFont from 'next/font/local'
import { FontWrapperProps } from './FontWrapper.types'

const customFont = localFont({
  src: [
    {
      path: '../../../assets/fonts/Montserrat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/Montserrat-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/Montserrat-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
  adjustFontFallback: false,
})

export const FontWrapper: React.FC<FontWrapperProps> = ({ children }) => {
  return <div className={customFont.className}>{children}</div>
}

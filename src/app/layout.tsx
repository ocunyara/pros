import { ApolloWrapper } from '@/ApolloWrapper'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FontWrapper } from '@/app/components/FontWrapper'

import '../app/style/globals.css';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      <ApolloWrapper>
        <FontWrapper>
          <Header/>
            {children}
          <Footer/>
        </FontWrapper>
      </ApolloWrapper>
    </body>
    </html>
  )
}

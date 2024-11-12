import { Header } from '../Header'
import '@/style/globals.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
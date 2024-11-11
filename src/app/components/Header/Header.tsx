'use client'

import { useState } from "react";
import { useMedia } from 'react-use'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image'
import { useSuspenseQuery} from '@apollo/client';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import { GET_CONTACTS } from '@/queries/query';
import logo from '@/assets/logo.svg'

interface ContactsProps {
  phone: null
  email: string
  workTime: string
}
interface NavProps {
  items: {
    title: string
    slug: string
  }[]
}

const Header = () => {

  const { error, data } = useSuspenseQuery<{ contacts: ContactsProps, pageCollection: NavProps}>(GET_CONTACTS);
  const [openNav, setOpenNav] = useState(false);
  const isMobile = useMedia('(max-width: 1024px)', false)

  if (error) return <p>Error: {error.message}</p>;

  return <div className="bg-primary sticky top-0 z-10 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]">
    <nav className="2xl:container 2xl:mx-auto px-4 py-2 lg:p-4 flex justify-between items-center">
      <Link href='/' className="flex flex-col space-x-3 items-center">
        <Image className='w-14 lg:w-[75px]' src={logo} alt='logo' width='70' height='70'/>
      </Link>
      {!isMobile && (
        <div className="hidden lg:block w-full lg:w-1/2 px-6 m-auto">
          <ul className='flex'>
            {data?.pageCollection.items?.map((item, index) => (
              <li className='m-auto' key={index}>
                <Link href={item.slug}>
                      <span
                        className="text-lg text-black font-light uppercase">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex space-x-4 items-center ml-auto mr-4 lg:mr-0">
        <a className='flex font-semibold' href={`tel:${data?.contacts.phone}`}>
          <FaPhoneAlt className='text-gold mr-4 text-xl' />
          {data?.contacts.phone}</a>
        <Link
          href='/'
          className="hidden lg:block rounded-md transform font-bold py-4 px-5 items-center bg-gold text-white">Записатися на
          прийом</Link>
      </div>
      <button onClick={() => setOpenNav(!openNav)} className="focus:outline-none focus:ring-2 text-2xl focus:ring-offset-2 focus:ring-gray-800 flex justify-center items-center lg:hidden cursor-pointer">
        {openNav ? <RxCross2 /> : <RxHamburgerMenu /> }
      </button>
      {isMobile && openNav && (
        <div className='absolute top-[99%] left-0 bg-primary w-full shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]'>
          <ul className='flex flex-col'>
            {data?.pageCollection.items?.map((item, index) => (
              <li className='m-auto py-2' key={index}>
                <Link href={item.slug}>
                      <span
                        className="text-lg text-black font-light uppercase">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  </div>
}

export default Header
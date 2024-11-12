'use client'

import Image from "next/image";
import Link from "next/link";
import { useSuspenseQuery } from "@apollo/client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GET_CONTACTS } from "@/queries/query";
import logo from '@/assets/logo.svg'

const Footer = () => {
  const { error, data } = useSuspenseQuery<{ contacts: ContactsProps, pageCollection: NavProps}>(GET_CONTACTS);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <footer id="footer" className="relative z-50 pt-8 bg-global lg:mt-20 lg:pt-20">
      <Link href='/' className="flex flex-col space-x-3 mx-auto items-center mb-10">
        <Image className='w-[75px]' src={logo} alt='logo' width='70' height='70'/>
      </Link>
      <ul className='hidden lg:flex justify-center lg:mb-5'>
        {data?.pageCollection.items?.map((item, index) => (
          <li className='flex items-center last-of-type:after:hidden after:block after:w-[2px] after:h-5 after:bg-blue'
              key={index}>
            <Link href={item.slug} className='py-4 px-5'>
              <span className="text-lg text-black font-light uppercase">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className='flex justify-center text-gold mb-8 lg:mb-20'>
        <li className='flex items-center mx-5'>
          <a rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/mnvc.ploskiriv/"><FaFacebook className='text-3xl' /></a>
        </li>
        <li className='flex items-center mx-5'>
          <a rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/ploskyriv/"><FaInstagram className='text-3xl' /></a>
        </li>
      </ul>
      <div className='bg-blue text-center text-white p-2'>
        <p>МНВЦ "ПЛОСКИРІВ" м.Хмельницький | mnvcploskiriv by PVL</p>
      </div>
    </footer>
  );
};
export default Footer;

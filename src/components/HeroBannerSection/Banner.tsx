import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { BannerProps } from '@/components/HeroBannerSection/HeroBannerSection.types'
import { Button } from "@/components/Button";
import { RiArrowRightSLine } from "react-icons/ri";

export const Banner = ({
   bannerImage,
   title,
   subTitle,
   button
}: BannerProps) => {

  const scrollY = useRef<number>(0)
  const heroBanner = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    scrollY.current = window.scrollY

    if (heroBanner.current) {
      heroBanner.current.style.transform = `translateY(${
        scrollY.current / 1.35
      }px)`
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [handleScroll])

  return (
    <div className='flex flex-wrap 2xl:containe px-4 py-10 xl:py-20 lg:px-20 h-full bg-gold lg:bg-auto'>
      <div className='`relative z-10 self-end lg:w-10/12 xl:w-[1000px]'>
        {subTitle && (
          <div className='mb-4 lg:mb-6'>
              <span className='lg:text-xl text-white font-semibold leading-large'>
                {title}
              </span>
          </div>
        )}
        <div className='m lg:mt-6 lg:mb-16'>
            <span className='text-white font-semibold text-2xl leading-7 lg:text-5xl lg:leading-large'>
              {subTitle}
            </span>
        </div>
        {button && (
              <div className='link-block text-white mt-20 lg:mt-32 mb-10 hidden lg:block'>
            {button.buttonUrl &&
              <Link className='text-xl flex items-center' href={button.buttonUrl} title={button.buttonTitle}>
                {button.buttonTitle} <RiArrowRightSLine className='ml-2 text-2xl' />
              </Link>}
            {button.buttonUrl === null &&
              <Button className='text-xl flex items-center' title={button.buttonTitle}>
                {button.buttonTitle} <RiArrowRightSLine className='ml-2 text-2xl' />
              </Button>}
          </div>
        )}
      </div>
      <div
        ref={heroBanner}
        className='parallax-bg absolute w-full h-full inset-0 object-cover max-lg:!translate-y-0'>
        {bannerImage.url ? (
          <Image className='w-full lg:h-[820px] object-cover' src={bannerImage.url} width={1920} height={820} alt='text'/>
        ) : (
          <div className='bg-color-blue-3 w-full h-full' />
        )}
      </div>
      <div className='hidden lg:block absolute w-full h-full inset-0 bg-black/40' />
    </div>
  )
}

export const SimpleBanner = ({
   bannerImage,
   title,
   subTitle,
   button
}: BannerProps) => {
  return (
    <div className={`${bannerImage ? 'lg:h-[540px] relative' : 'bg-global lg:py-32'}`}>
      <div className='parallax-bg absolute w-full h-full inset-0 object-cover max-lg:!translate-y-0'>
        {bannerImage.url ? (
          <Image className='w-full h-full object-cover' src={bannerImage.url} width={1920} height={540}
                 alt='text'/>
        ) : (
          <div className='bg-color-blue-3 w-full h-full'/>
        )}
      </div>
      <div className='lg:block absolute w-full h-full inset-0 bg-black/40'/>
      <div className='flex flex-wrap 2xl:container m-auto px-4 py-24 xl:py-20 h-full relative z-10'>
        <div className='mb-4 mt-auto xl:w-9/12 lg:mb-6'>
          <span className='text-4xl lg:text-6xl text-white font-semibold leading-large'>
            {title}
          </span>
        </div>
        <div className='mt-4 lg:mt-6 lg:w-10/12'>
          <span className='text-white text-xl leading-7 lg:text-2xl lg:leading-large'>
            {subTitle}
          </span>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { BannerProps } from '@/app/components/HeroBannerSection/HeroBannerSection.types'
import {Button} from "@/app/components/Button";

export const Banner = ({
   heroBannerImage,
   heroBannerTitle,
   subTitle,
   heroBannerReference,
}: BannerProps) => {

  return (
    <div className='flex flex-wrap 2xl:container m-auto px-4 py-10 xl:py-20 lg:px-20 h-full bg-gold lg:bg-auto'>
      <div className='`relative z-10 self-end lg:w-10/12 xl:w-[1000px]'>
        {heroBannerTitle && (
          <div className='mb-4 lg:mb-6'>
              <span className='lg:text-xl text-white font-semibold leading-large'>
                {subTitle}
              </span>
          </div>
        )}
        <div className='m lg:mt-6 lg:mb-16'>
            <span className='text-white font-semibold text-2xl leading-7 lg:text-5xl lg:leading-large'>
              {heroBannerTitle}
            </span>
        </div>
        {heroBannerReference && (
              <div className='link-block text-white mt-20 lg:mt-32 mb-10 hidden lg:block'>
            {heroBannerReference.buttonUrl &&
              <Link href={heroBannerReference.buttonUrl} title={heroBannerReference.buttonTitle}>
                {heroBannerReference.buttonTitle}
              </Link>}
            {heroBannerReference.buttonUrl === null &&
              <Button title={heroBannerReference.buttonTitle}>
                {heroBannerReference.buttonTitle}
              </Button>}
          </div>
        )}
      </div>
      <div
        className='parallax-bg absolute w-full h-full inset-0 object-cover max-lg:!translate-y-0'>
        {heroBannerImage.url ? (
          <Image className='w-full lg:h-[750px] object-cover' src={heroBannerImage.url} width={1920} height={650} alt='text'/>
        ) : (
          <div className='bg-color-blue-3 w-full h-full' />
        )}
      </div>
      <div className='hidden lg:block absolute w-full h-full inset-0 bg-black/40' />
    </div>
  )
}

export const SimpleBanner = ({
  titleLabel,
  title,
  subtitle,
  link
}: BannerProps) => {
  return (
    <div className='bg-color-blue-3 pt-[200px] lg:pt-56 pb-[60px]'>
      <div className='2xl:container px-4'>
        <div className='xl:w-6/12'>
          {titleLabel && (
            <div className='mb-4 lg:mb-6'>
              <span className='text-lg text-white leading-large'>
                {titleLabel}
              </span>
            </div>
          )}
        </div>
        <div className='mt-4 lg:mt-6 lg:mb-16 lg:w-10/12'>
           <span className='text-white leading-7 lg:text-[32px] lg:leading-9'>
              {subtitle}
            </span>
        </div>
        {link && (
          <div className='link-block text-white pt-16 lg:pt-0'>
            <Link href={link.url} title={link.text}>
              {link.text}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

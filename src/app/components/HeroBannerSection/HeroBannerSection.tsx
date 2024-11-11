'use client'

import React, { useState, useRef } from 'react'
import { Pagination, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Banner, SimpleBanner } from '@/app/components/HeroBannerSection/Banner'
import { BannersProps } from './HeroBannerSection.types'

import 'swiper/css'
import 'swiper/css/effect-fade'
import {useSuspenseQuery} from "@apollo/client";
import {GET_HERO_BANNER} from "@/queries/query";

export const HeroBannerSection = () => {
  const { error, data } = useSuspenseQuery<{ heroBannerCollection: BannersProps }>(GET_HERO_BANNER);

  console.log(data)

  if (error) return <p>Error: {error.message}</p>;

  let fullHeight = true
  const [swiperIndex, setSwiperIndex] = useState(0)
  const swiperRef = useRef(null)
  const fullHeightView = fullHeight
    ? 'w-screen h-[540px] lg:h-[740px]'
    : 'h-[570px] lg:h-[340px]'

  return (
    <div>
      {data.heroBannerCollection.items.length ? (
        <div>
          <Swiper
            ref={swiperRef}
            className={`hero-banner max-w-full ${fullHeightView}`}
            slidesPerView={1}
            effect='fade'
            onSlideChange={(slider) => setSwiperIndex(slider.activeIndex)}
            modules={[Pagination, EffectFade]}>
            {data.heroBannerCollection.items.length
              ? data.heroBannerCollection.items.map((banner, index) => {
                  return (
                    <SwiperSlide className='hero-banner' key={index}>
                      <Banner {...banner} fullHeight={fullHeight} />
                    </SwiperSlide>
                  )
                })
              : []}
          </Swiper>
        </div>
      ) : (
        <SimpleBanner {...props.slides[0]} />
      )}
    </div>
  )
}

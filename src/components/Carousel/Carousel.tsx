import React, {Suspense, useEffect, useState} from 'react';
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BannersProps } from './HeroBannerSection.types'
import { getCarousel } from "@/queries/contentful";
import {IdProps} from "@/types/entry";
import Image from "next/image";

const Carousel = (props: IdProps) => {
  const [cmsData, setSmcData] = useState<splitMediaSection | null>(null);
  const [error, setError] = useState<Error | string | null>(null);
  const { sys } = props;

  useEffect(() => {
    getCarousel(sys.id)
      .then((result) => {
        setSmcData(result)
      })
      .catch((err: Error) => {
        setError(err);
        console.error(error);
      })
  }, []);

  if (!cmsData) return <p>Loading...</p>;

  console.log(cmsData)
  const { title, subTitle, slidersCollection } = cmsData

  return (
    <div className='bg-primary'>
      <div className={`2xl:container px-4 lg:self-center flex flex-wrap lg:pt-20 lg:pb-20`}>
        <h2 className='text-center w-full text-2xl font-bold mb-4 lg:mb-10 lg:text-4xl'>{title}</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Swiper
            slidesPerView={5}
            autoplay={true}
            pagination={true}
          >
            {slidersCollection.items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='px-2'>
                  <Image className='w-full object-cover' src={item.url} width={item.width}
                         height={item.height} alt={item.title}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Suspense>
      </div>
    </div>
  )
}
export default Carousel;
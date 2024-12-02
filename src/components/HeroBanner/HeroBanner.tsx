'use client'
import { Suspense } from 'react';

import { useSuspenseQuery} from '@apollo/client';
import { GET_HERO_BANNER } from '@/queries/query';
import Image from 'next/image';
import { ImageType } from '@/types/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface ProjectProps {
  items: {
    heroBannerTitle: string
    subTitle: string
    heroBannerDescription?: string
    heroBannerImage: ImageType
  }[]
}
const HeroBanner = () => {
  const { error, data } = useSuspenseQuery<{ heroBannerCollection: ProjectProps }>(GET_HERO_BANNER);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Swiper
        slidesPerView={1}
        autoplay={true}
        pagination={true} modules={[Pagination]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.heroBannerCollection.items.map((item, index) => (
          <SwiperSlide className='' key={item.heroBannerTitle + index}>
            <Image className='w-full lg:h-[750px] object-cover' src={item.heroBannerImage.url} width={1920} height={740}
                   quality={50} alt={item.heroBannerTitle}/>
            <div className='absolute w-full h-full inset-0 bg-black/60'></div>
            <h2
              className='absolute left-[20%] top-[30%] text-4xl sm:text-5xl lg:text-6xl font-semibold text-gold sm:w-8/12'>
              {item.heroBannerTitle}
            </h2>
            <h3
              className='absolute left-[20%] top-[39%] text-2xl sm:text-3xl lg:text-4xl font-semibold text-gold sm:w-8/12'>
              {item.subTitle}
            </h3>
            <h3
              className='absolute left-[20%] top-[45%] text-2xl text-white sm:w-4/12'>
              {item.heroBannerDescription}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </Suspense>
  );
};

export default HeroBanner;
import React, { Suspense, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { getCarousel } from "@/queries/contentful";
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { IdProps } from "@/types/entry";
import { CarouselTypes } from "@/components/Carousel/Carousel.types";
import Image from "next/image";
import 'swiper/css/navigation';

const Carousel = (props: IdProps) => {
  const [cmsData, setSmcData] = useState<CarouselTypes | null>(null);
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

  const { title, subTitle, slidersCollection } = cmsData

  return (
    <div className='2xl:container py-15 px-4 lg:self-center flex flex-wrap py-14 lg:py-20'>
      <h2 className='text-center w-full text-2xl font-bold mb-8 lg:mb-10 lg:text-4xl'>{title}</h2>
      {subTitle && <div className=''>{subTitle}</div>}
      <Suspense fallback={<div>Loading...</div>}>
        <Swiper
          slidesPerView={1.4}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          breakpoints={{
            440: {
              slidesPerView: 3.4,
            },
            768: {
              slidesPerView: 5,
            },
          }
          }
        >
          {slidersCollection.items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='px-2'>
                <Image className='w-full object-cover' src={item.url} width={item.width}
                       height={item.height} alt={item.title ? item.title : 'Certificate'}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </div>
  )
}
export default Carousel;
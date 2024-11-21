import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import { AboutUsProps } from "@/components/AboutUs/AboutUs.types";
import { RichText } from "@/components/RichText";
import { getAboutUs } from "@/queries/contentful";
import { IdProps } from "@/types/entry";

import 'swiper/css';

export const AboutUs = (props: IdProps) => {
  const [cmsData, setSmcData] = useState<AboutUsProps | null>(null);
  const [error, setError] = useState<Error | string | null>(null);
  const { sys } = props;

  useEffect(() => {
    getAboutUs(sys.id)
      .then((result) => {
        setSmcData(result)
      })
      .catch((err: Error) => {
        setError(err);
        console.error(error);
      });
  }, []);

  if (!cmsData) return <p>Loading...</p>;

  const {
    title,
    aboutUsDescription,
    doctorsListCollection
  } = cmsData

  const pagination = {
    clickable: true,
    bulletActiveClass: `active`,
    renderBullet(index: number, className: string) {
      return `
        <div class="h-2 w-2 rounded-full bg-global mx-3 lg:w-full lg:h-[250px] overflow-hidden object-cover mt-4 lg:rounded lg:mx-auto lg:bg-none ${className}">
            <Image class="hidden lg:block" src="${doctorsListCollection.items[index].image.url}" width="450" height="200" alt="${doctorsListCollection.items[index].name}">
        </div>`
    },
  }

  return (
    <div className='doctors-slider m-auto 2xl:container px-4 pt-10 lg:pt-20'>
      <div className='relative'>
        <div className='lg:pr-4'>
          <h2 className='text-2xl font-bold mb-4 lg:mb-14 lg:text-4xl text-center'>{title}</h2>
          <p className='text-xl lg:text-3xl lg:w-4/12 lg:pr-10 lg:h-[230px] mb-4 overflow-hidden block'>{aboutUsDescription}</p>
        </div>
        <Swiper
          className={`w-full lg:-mt-[240px] lg:!ml-auto lg:!mr-0 lg:w-8/12`}
          slidesPerView={1}
          effect='fade'
          modules={[Pagination, EffectFade]}
          pagination={pagination}
        >
          {doctorsListCollection.items.length
            ? doctorsListCollection.items.map((item, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <div className='lg:flex lg:h-full'>
                    <Image src={item.image.url} alt={item.name} width={500} height={700} className='rounded aspect-[3.5/5] object-cover mb-14 lg:mb-0 lg:mr-4 h-[340px] object-top lg:h-full'/>
                    <div>
                      <h3 className='text-xl font-semibold my-4'>{item.name}</h3>
                      <div><RichText {...item.description.json} /></div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
            : []}
        </Swiper>
      </div>
    </div>
  )
}

export default AboutUs;
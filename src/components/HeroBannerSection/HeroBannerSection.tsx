import React, {useState, useRef, useEffect} from 'react'
import { Pagination, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Banner, SimpleBanner } from '@/components/HeroBannerSection/Banner'
import { IdProps } from "@/types/entry";
import { BannersProps } from './HeroBannerSection.types'
import { getHeroBanner } from "@/queries/contentful";

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

export const HeroBannerSection= (props: IdProps) => {
  const [cmsData, setSmcData] = useState<BannersProps | null>(null);
  const [error, setError] = useState<Error | string | null>(null);
  const [swiperIndex, setSwiperIndex] = useState(0)
  const swiperRef = useRef(null)
  let fullHeight = true


  const fullHeightView = fullHeight
    ? 'w-screen h-[640px] lg:h-[820px]'
    : 'h-[570px] lg:h-[340px]'
  const { sys } = props;

  useEffect(() => {
    getHeroBanner(sys.id)
      .then((result) => {
        setSmcData(result)
      })
      .catch((err: Error) => {
        setError(err);
        console.error(error);
      });
  }, []);

  if (!cmsData) return <p>Loading...</p>;

  const pagination = {
    clickable: true,
    bulletActiveClass: `active`,
    renderBullet(index: number, className: string) {
      return `
        <div class="${className}">
          <span class="absolute w-max right-6 text-lg text-white top-2/4 mt-[-16px]">
            ${cmsData.banersCollection.items[index].tabTitle ? cmsData.banersCollection.items[index].tabTitle : 'Slider item'}
          </span>
        </div>`
    },
  }

  console.log(cmsData)

  return (
    <div>
      {cmsData.banersCollection.items.length > 1 ? (
        <div>
          <Swiper
            ref={swiperRef}
            className={`hero-banner max-w-full ${fullHeightView}`}
            slidesPerView={1}
            pagination={pagination}
            effect='fade'
            onSlideChange={(slider) => setSwiperIndex(slider.activeIndex)}
            modules={[Pagination, EffectFade]}
            breakpoints={{
              1024: {
                direction: 'vertical',
              },
            }}
          >
            {cmsData.banersCollection.items.length
              ? cmsData.banersCollection.items.map((banner, index) => {
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
        <SimpleBanner {...cmsData.banersCollection.items[0]} />
      )}
    </div>
  )
}

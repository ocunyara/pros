import React, {useEffect, useRef} from 'react';
import { Document } from '@contentful/rich-text-types'
import {RichText} from '@/components/RichText'
import {Button} from '@/components/Button'
import {useSuspenseQuery} from '@apollo/client';
import {GET_SPLIT_MEDIA_SECTION} from '@/queries/query';
import Image from 'next/image';
import {ImageType} from '@/types/image'

interface splitMediaSection {
  items: {
    title: string
    description: Document
    media: ImageType
    addButton: boolean
    imagePosition: boolean
  }[]
}

const SplitMediaSection = () => {


  return <h1>SplitMediaSection</h1>
  // const {title, aboutUsDescription, doctorsListCollection} = data.splitMediaSection

  const refsToComponents = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    async function animate() {
      const sr = (await import('scrollreveal')).default;

      // Apply ScrollReveal to each component ref
      refsToComponents.current.forEach((ref) => {
        if (ref) {
          sr().reveal(ref, {
            origin: 'bottom',
            distance: '50px',
            duration: 300,
            delay: 200,
            reset: true,
          });
        }
      });
    }

    animate();
  }, []);

  // Helper function to attach refs dynamically
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !refsToComponents.current.includes(el)) {
      refsToComponents.current.push(el);
    }
  };

  return (
    <div className='m-auto 2xl:container'>{data?.splitMediaSectionCollection.items.map((item, index) => (
      <div ref={addToRefs} key={index} className='px-4 lg:self-center flex flex-wrap lg:p-20 lg:pb-0'>
        <div className={`self-center py-10 lg:w-1/2 lg:pr-20 ${
          item.imagePosition && 'lg:order-1 pr-0 lg:pl-20'
        }`}>
          <h2 className='text-2xl font-bold mb-4 lg:mb-8 lg:text-4xl'>{item.title}</h2>
          {item.description ? <RichText {...item.description.json}/> : ''}
          {item.addButton &&
            <Button title={'Book a home cleaning'} onClick={() => console.log('Button clicked!')} className="mt-8">
              Book a home cleaning
            </Button>}
            </div>
            <div className='pb-10 lg:w-1/2'>
              <Image className='w-full max-h-screen object-cover rounded-[24px]' src={item.media.url} width={1920}
                     height={740}
                     quality={50} alt={item.media.title || 'Image'}/>
            </div>
          </div>
        ))}
    </div>
  )
}

export default SplitMediaSection
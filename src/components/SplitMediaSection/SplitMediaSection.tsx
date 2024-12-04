import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button'
import { RichText } from '@/components/RichText'
import { getSplitMediaSection } from "@/queries/contentful";
import { Document } from '@contentful/rich-text-types'
import { IdProps } from "@/types/entry";
import { ImageType } from '@/types/image'

interface splitMediaSection {
  title: string
  description: {
    json: Document
  }
  media: ImageType
  addButton: boolean
  imagePosition: boolean
  addBackground: boolean
}

const SplitMediaSection = (props: IdProps) => {
  const [cmsData, setSmcData] = useState<splitMediaSection | null>(null);
  const [error, setError] = useState<Error | string | null>(null);
  const { sys } = props;

  useEffect(() => {
    getSplitMediaSection(sys.id)
      .then((result) => {
        setSmcData(result)
      })
      .catch((err: Error) => {
        setError(err);
        console.error(error);
      })
  }, []);

  if (!cmsData) return <p>Loading...</p>;

  const {
    title,
    imagePosition,
    addButton,
    description,
    media,
    addBackground
  } = cmsData

  return (
    <div className={`${addBackground && 'bg-lite'}`}>
      <div className={`2xl:container px-4 lg:self-center flex flex-wrap lg:pt-20 lg:pb-10`}>
        <div className={`self-center py-10 lg:w-1/2 lg:pr-20 ${
          imagePosition && 'lg:order-1 pr-0 lg:pl-20'
        }`}>
          <h2 className='text-2xl font-bold mb-4 lg:mb-8 lg:text-4xl'>{title}</h2>
          {description ? <RichText {...description.json}/> : ''}
          {addButton &&
            <Button title={'Book a home cleaning'} onClick={() => console.log('Button clicked!')} className="mt-8">
              Book a home cleaning
            </Button>}
        </div>
        <div className='pb-10 lg:w-1/2'>
          <Image className='w-full max-h-screen object-cover rounded-[24px]' src={media.url} width={1920}
             height={740}
             quality={50} alt={media.title || 'Image'}/>
        </div>
      </div>
    </div>
  )
}

export default SplitMediaSection
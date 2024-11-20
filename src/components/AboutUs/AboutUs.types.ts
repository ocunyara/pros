import { ImageType } from '@/types/image'
import { DescriptionProps } from '@/types/entry'

export interface AboutUsProps {
  title: string
  aboutUsDescription: string
  doctorsListCollection: {
    items: {
      name: string
      description: {
        json: DescriptionProps
      }
      image: ImageType
    }[]
  }
}

import { ImageType } from '@/types/image'
import { DescriptionProps } from '@/types/entry'

export interface AboutUsProps {
  title: string
  aboutUsDescription: string
  fullInfo: boolean
  doctorsListCollection: {
    items: {
      name: string
      description: {
        json: DescriptionProps
      }
      image: ImageType
      certificates: {
        json: DescriptionProps
      }
      education: {
        json: DescriptionProps
      }
    }[]
  }
}

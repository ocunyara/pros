import { ImageType } from '@/types/image'

interface Link {
  text: string
  url: string
}

export interface BannerProps {
  heroBannerImage: ImageType
  heroBannerTitle: string
  subTitle?: string
  link?: Link
  fullHeight?: boolean
  heroBannerReference: {
    buttonTitle: string
    buttonUrl: string
  }
}

export interface BannersProps {
  slides: BannerProps[]
  fullHeight: boolean
}

import { ImageType } from '@/types/image'
import { DescriptionProps } from "@/types/entry";

interface Link {
  text: string
  url: string
}

export interface BannerProps {
  bannerImage: ImageType
  title: string
  subTitle?: string
  link?: Link
  tabTitle: string
  fullHeight?: boolean
  heroBannerReference: {
    buttonTitle: string
    buttonUrl: string
  }
}

export interface BannersProps {
  banersCollection: {
    items: BannerProps[]
  }
  fullHeight: boolean
}

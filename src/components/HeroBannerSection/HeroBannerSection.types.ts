import { ImageType } from '@/types/image'
import { ButtonProps } from "@/types/link";

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
  button: ButtonProps
}

export interface BannersProps {
  banersCollection: {
    items: BannerProps[]
  }
  fullHeight: boolean
}

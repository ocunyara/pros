import {ImageType} from "@/types/image";

export interface CarouselTypes {
  title: string
  subTitle?: string
  slidersCollection: {
    items: ImageType[]
  }
}
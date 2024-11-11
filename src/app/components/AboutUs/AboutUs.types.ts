import { ImageType } from '@/types/image'
import { Link } from '@/types/link'


export interface AboutUsProps {
  title: string
  aboutUsDescription: string
  doctorsListCollection: {
    items: {
      name: string
      description: {
        json: object
      }
      image: ImageType
    }[]
  }

  /**
   * Component classes override
   */
  theme?: Record<string, string>
}

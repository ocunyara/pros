import { Document } from '@contentful/rich-text-types'

export type DescriptionProps = {
  description: Document
}

export type IdProps = {
  sectionPosition: number
  sys: {
    id: string
  }
}
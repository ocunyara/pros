import { Document } from '@contentful/rich-text-types'

export type DescriptionProps = {
  description: Document
}

export type IdProps = {
  sys: {
    id: string
  }
  __typename?: string
}
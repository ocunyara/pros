import { Document, Link } from '@contentful/rich-text-types'

export interface DescriptionSectionTypes {
  title: string
  desciprtion: {
    json: Document
    links: Link
  }
}

export interface EmbeddedAssetNode {
  data: {
    target: {
      sys: {
        id: string;
      };
    };
  };
}
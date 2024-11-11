import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import { richTextOptions } from '@/app/components/RichText'
import classes from '@/app/components/RichText/styles/RichText.module.css'

const RichText = (richTextField: Document) => {
  return (
    <div className={classes['rich-text']}>
      {documentToReactComponents(richTextField, richTextOptions)}
    </div>
  )
}

export default RichText

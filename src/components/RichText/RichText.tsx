import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { richTextOptions } from '@/components/RichText'
import classes from '@/components/RichText/styles/RichText.module.css'

const RichText = (richTextField: any) => {
  return (
    <div className={classes['rich-text']}>
      {documentToReactComponents(richTextField, richTextOptions)}
    </div>
  )
}

export default RichText

import React from 'react'
import { INLINES, Node } from '@contentful/rich-text-types'
import Link from 'next/link'

export const richTextOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
      const url = node.data.uri
      const isExternalLink =
        url?.startsWith('http') ||
        url?.startsWith('https') ||
        !url?.startsWith('/')
      if (isExternalLink) {
        return (
          <a href={node.data.uri} target='_blank' rel='noopener noreferrer'>
            {children}
          </a>
        )
      }

      if (node.data.uri.startsWith('/')) {
        return <Link href={node.data.uri}>{children}</Link>
      }
    },
  },
}

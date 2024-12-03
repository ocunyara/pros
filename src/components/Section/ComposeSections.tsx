import allSections from '@/components/Section'
import { IdProps } from '@/types/entry'

interface SectionProp {
  sections: {
    items: IdProps[]
  }
}
type SectionKeys = keyof typeof allSections;

const ComposeSections = ({sections}: SectionProp) => {

  console.log(sections)

  return (
    <>
      {sections.items.map((section, index: number) => {
        const { __typename, ...rest } = section
        const Component = allSections[__typename as SectionKeys];
        console.log(rest)
        if (!Component) {
          console.error(`Section not registered: ${__typename}`)
          return null
        }
        return (
          <Component
            key={section.sys.id}
            {...rest}
          />
        )
      })}
    </>
  )
}

export default ComposeSections;
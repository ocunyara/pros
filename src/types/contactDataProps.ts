export interface ContactDataProps {
  contacts: {
    email: string
    phone: number
    workTime: string
  }
  pageCollection: {
    items: {
      slug: string
      title: string
    }[]
  }
}

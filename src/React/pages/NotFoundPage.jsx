import React from 'react'
import { H3Page404, NotFoundPageSection, Sentence } from '../../styles/pages/notFoundPage'

const NotFoundPage = () => {
  return (
    <NotFoundPageSection>
      <H3Page404>404</H3Page404>
      <Sentence>Sorry, page not found</Sentence>
    </NotFoundPageSection>
  )
}

export default NotFoundPage

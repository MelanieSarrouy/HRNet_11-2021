// IMPORTS // ______________________________________________________________

import React from 'react'
// styles imports
import { H3Page404, NotFoundPageSection, Sentence } from '../../styles/pages/notFoundPage'

// JSX // _________________________________________________________________

/**
 * NotFoundPage component to display website's not found page
 * @name NotFoundPage
 * @returns {?JSX}
 */

 const NotFoundPage = () => {
  return (
    <NotFoundPageSection>
      <H3Page404>404</H3Page404>
      <Sentence>Sorry, page not found</Sentence>
    </NotFoundPageSection>
  )
}

// EXPORT // ______________________________________________________________

export default NotFoundPage

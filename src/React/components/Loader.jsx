// IMPORTS // ______________________________________________________________

import React from 'react'
// styles imports
import { LoaderContainer, LoaderWrapper } from '../../styles/components/loader'

// JSX // _________________________________________________________________

/**
 * Loader component to display a loader while loading data
 * @name Loader
 * @returns {?JSX}
 */

const Loader = () => {
  return (
    <LoaderWrapper data-testid='loader'>
      <LoaderContainer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderContainer>
    </LoaderWrapper>
  )
}

// EXPORT // ______________________________________________________________

export default Loader
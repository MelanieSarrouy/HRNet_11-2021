import React from 'react'
import { LoaderContainer, LoaderWrapper } from '../../styles/components/loader'

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

export default Loader

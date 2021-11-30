import React from 'react'
import close from '../assets/close.svg'
import { IMG, ModaleContent, ModaleDiv } from '../styles/components/modale'

const Modale = ({ hideModale }) => {
  return (
    <ModaleDiv>
      <ModaleContent>
        <p>Employee Created !</p>
        <IMG src={close} alt="close" onClick={hideModale} />
      </ModaleContent>
    </ModaleDiv>
  )
}

export default Modale

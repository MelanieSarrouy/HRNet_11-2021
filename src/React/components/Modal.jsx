import React from 'react'
import close from '../../assets/close.svg'
import { useKeyPress } from '../../helpers/useKeyPress'
import {
  IMG,
  ModalContent,
  ModalDiv,
  Content,
} from '../../styles/components/modal'


const Modal = (props) => {
  useKeyPress('Escape', (props.hideModal))
  return (
<ModalDiv style={props.styleModalBackground} onClick={props.hideModal} animation={props.animation} >
      <ModalContent style={props.styleModal} animation={props.animation} >
        <Content style={props.styleModalContent}>{props.children}</Content>
        {props.closeButton && <IMG src={close} alt="close" onClick={props.hideModal} />}
      </ModalContent>
    </ModalDiv>
  )
}

export default Modal

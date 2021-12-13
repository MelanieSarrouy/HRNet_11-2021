// IMPORTS // ______________________________________________________________

import React, { useState } from 'react'
// components imports
import Form from '../components/Form'
// Modal npm package import
import { Modal } from 'simple-react-modal-ui'

// JSX // _________________________________________________________________

/**
 * Homepage component to display website's homepage
 * @name Homepage
 * @returns {?JSX}
 */

const Homepage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <h2 className="sr-only">Create employee</h2>
      <Form setModalIsOpen={setModalIsOpen} />

      {/* modal */}

      {modalIsOpen && (
        <Modal
          hideModal={closeModal}
          styleModalBackground
          styleModal
          styleModalContent
          animation={true}
          closeButton={true}
        >
          <p>New employee created !</p>
        </Modal>
      )}
    </>
  )
}

// EXPORT // ______________________________________________________________

export default Homepage

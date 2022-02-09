// ModalBox component

import React from 'react'
import { ModalContainer } from './styles'

const ModalBox = ({ children, title }) => {
  return (
    <>
      <ModalContainer>
        <div className="content_box">
          <div className="modal_card">
            <h2>{title}</h2>
            <div className="modal_content">{children}</div>
          </div>
        </div>
        <div className="modal_back" />
      </ModalContainer>
    </>
  )
}

export default ModalBox

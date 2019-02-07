import React, { Component } from 'react'

import bus, { closeModal } from 'Modals/bus'

import Help from 'Modals/contents/Help'
import UploadImage from 'Modals/contents/UploadImage'

const Header = ({ children }) => (
  <div class="modal-header">
    <h4 class="modal-title">{children}</h4>
    <button class="close" onClick={closeModal} style={{ outline: 'none' }}>
      &times;
    </button>
  </div>
)

const Modal = ({ children, title }) => (
  <div class="modal d-block">
    <div class="modal-dialog">
      <div class="modal-content">
        <Header>{title}</Header>
        <div class="modal-body">{children}</div>
      </div>
    </div>
  </div>
)

const Backdrop = () => <div class="modal-backdrop" style={{ opacity: 0.5 }} />

class ModalContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { queue: [] }
    const getQueue = () => this.state.queue

    bus.take('OPEN_MODAL', ({ name }) => {
      this.setState({ queue: [name, ...getQueue()] })
    })

    bus.take('CLOSE_MODAL', () =>
      this.setState({
        queue: getQueue().slice(1, getQueue().length),
      })
    )
  }

  render() {
    const modal = this.state.queue[0]

    return (
      <>
        {modal === 'UPLOAD_IMAGE' && (
          <Modal title="Upload Image">
            <UploadImage />
          </Modal>
        )}

        {modal === 'VIEW_HELP' && (
          <Modal title="Help">
            <Help />
          </Modal>
        )}

        {modal && <Backdrop />}
      </>
    )
  }
}

export default ModalContainer

import React, { Component } from 'react'

import bus, { closeModal } from 'Modals/bus'

import Help from 'Modals/contents/Help'
import UploadImage from 'Modals/contents/UploadImage'

const Header = ({ children }) => (
  <div className="modal-header">
    <h4 className="modal-title">{children}</h4>
    <button className="close" onClick={closeModal} style={{ outline: 'none' }}>
      &times;
    </button>
  </div>
)

const Modal = ({ children, title }) => (
  <div className="modal d-block">
    <div className="modal-dialog">
      <div className="modal-content">
        <Header>{title}</Header>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  </div>
)

const getErrorMessage = payload => {
  if (payload && payload.code && payload.code === 401)
    return 'Unauthorized action, please login first.'
  if (payload && payload.message) return payload.message
  return 'Something went wrong, please try again'
}

const Backdrop = () => (
  <div className="modal-backdrop" style={{ opacity: 0.5 }} />
)

class ModalContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { queue: ['UPLOAD_IMAGE'] }
    const getQueue = () => this.state.queue

    bus.take('OPEN_MODAL', ({ name, payload }) => {
      this.setState({ queue: [{ name, payload }, ...getQueue()] })
    })

    bus.take('CLOSE_MODAL', () =>
      this.setState({
        queue: getQueue().slice(1, getQueue().length),
      })
    )
  }

  render() {
    const { name, payload } = this.state.queue[0]

    return (
      <>
        {name === 'ERROR' && (
          <Modal title="Error">{getErrorMessage(payload)} </Modal>
        )}

        {name === 'UPLOAD_IMAGE' && (
          <Modal title="Upload Image">
            <UploadImage />
          </Modal>
        )}

        {name === 'VIEW_HELP' && (
          <Modal title="Help">
            <Help />
          </Modal>
        )}

        {name && <Backdrop />}
      </>
    )
  }
}

export default ModalContainer

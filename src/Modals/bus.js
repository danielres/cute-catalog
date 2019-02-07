import { createBus } from 'suber'

const bus = createBus()

export const closeModal = () => bus.send('CLOSE_MODAL')
export const openModal = name => bus.send('OPEN_MODAL', { name })

export default bus

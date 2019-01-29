export const toAdmin = () => ({ type: 'ADMIN' })

export const toHome = () => ({ type: 'HOME' })

export const toLogin = () => ({ type: 'LOGIN' })

export const toProduct = ({ productId }) => ({
  type: 'PRODUCT',
  payload: { productId },
})

export const toProfile = () => ({ type: 'PROFILE' })

import { FETCH_PRODUCT_SUCCESS, FETCH_PRODUCTS_SUCCESS } from '../types'

const initialState = {
  items: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_SUCCESS:
      const { id, ...rest } = payload.product
      return {
        ...state,
        items: { ...state.items, [id]: rest },
      }

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          ...payload.products.reduce(
            (acc, { id, ...rest }) => ({ ...acc, [id]: rest }),
            {}
          ),
        },
      }

    default:
      return state
  }
}

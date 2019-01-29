import {
  FETCH_CURRENT_USER_FAILURE,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
} from '../types'

const initialState = { currentUser: {}, isLoading: false }

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case FETCH_CURRENT_USER_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      }

    case FETCH_CURRENT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: payload.currentUser,
        isLoading: false,
        error: null,
      }

    default:
      return state
  }
}

import Cookies from 'js-cookie'
import { redirect } from 'redux-first-router'

import { toHome, toLogin } from 'store/routerActions'

import { fetchCurrentUser } from 'store/currentUser/actions'
import { fetchProducts } from 'store/products/actions'

const maybeFetchCurrentUser = (dispatch, state) => {
  if (Cookies.get('authExpiresAt') && !state.currentUser.email)
    return dispatch(fetchCurrentUser()).catch(console.error)
}

const routesMap = {
  ADMIN: {
    path: '/admin',
    thunk: async (dispatch, getState) => {
      const currentUser = await maybeFetchCurrentUser(dispatch, getState())
      if (!(currentUser && currentUser.isAdmin)) return dispatch(toLogin())
      dispatch(fetchProducts())
    },
  },

  HOME: {
    path: '/',
    thunk: (dispatch, getState) => {
      maybeFetchCurrentUser(dispatch, getState())
      dispatch(fetchProducts())
    },
  },

  LOGIN: {
    path: '/login',
  },

  PRODUCT: {
    path: '/products/:productId',
    thunk: (dispatch, getState) => {
      maybeFetchCurrentUser(dispatch, getState())
      dispatch(fetchProducts())
    },
  },

  PROFILE: {
    path: '/profile',
    thunk: async (dispatch, getState) => {
      const currentUser = await maybeFetchCurrentUser(dispatch, getState())
      if (!currentUser) dispatch(toLogin())
    },
  },

  CATCH_ALL_REDIRECT: {
    path: '*',
    thunk: dispatch => dispatch(redirect(toHome())),
  },
}

export default routesMap

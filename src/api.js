import { fetch } from 'whatwg-fetch'

class ApiResponseError extends Error {
  constructor(response, message) {
    super()
    this.code = response.status
    this.message = message
  }
}

const fetchResource = async url => {
  const response = await fetch(url, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  if (response.ok) return json
  throw new ApiResponseError(response, json.error)
}

const postResource = (url, body) => {
  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export const onLogin = () =>
  postResource('/api/login', { username: 'John', password: 'pw' })

export const fetchCurrentUser = () => fetchResource('/api/users/current')

export const fetchProducts = () => fetchResource('/api/products')

export const fetchProduct = id => fetchResource(`/api/products/${id}`)

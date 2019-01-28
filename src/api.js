const getUrl = url => {
  fetch(url, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

const postUrl = (url, body) => {
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
  postUrl('/api/login', { username: 'John', password: 'pw' })

export const onFetchPrivateData = () => getUrl('/api/private')

export const fetchProducts = async () =>
  await (await fetch('/api/products')).json()

export const fetchProduct = async id =>
  await (await fetch(`/api/products/${id}`)).json()

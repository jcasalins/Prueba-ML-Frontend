import env from '../environments/environment'

export const getItems = (search) => {
  return fetch(`${env.PROTOCOL}://${env.HOST}:${env.PORT}${env.BASE_URL}/items?q=${search}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const getItem = (id) => {
  return fetch(`${env.PROTOCOL}://${env.HOST}:${env.PORT}${env.BASE_URL}/items/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
import env from '../environments/environment'

export const getItems = (search) => {
  const res = fetch(`${env.PROTOCOL}://${env.HOST}:${env.PORT}${env.BASE_URL}/items?q=${search}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return res
}

export const getItem = (id) => {
  const res = fetch(`${env.PROTOCOL}://${env.HOST}:${env.PORT}${env.BASE_URL}/items/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return res
}
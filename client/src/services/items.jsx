export const getItems = (search) => {
  const res = fetch(`http://localhost:3000/api/items?q=${search}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return res
}

export const getItem = (id) => {
  const res = fetch(`http://localhost:3000/api/items/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return res
}
import formats from '../utils/formats.utils.js'

export const getItems = async (req, res) => {
  const search = req.query.q || req.params.search
  if (search === undefined) {
    return res.status(404).json({ message: 'Route not found' })
  }
  const mlItems = await formats.itemsList(req.query.q)
  res.json(mlItems)
}

export const getItemById = async (req, res) => {
  const mlItem = await formats.item(req.params.id)
  res.json(mlItem)
}

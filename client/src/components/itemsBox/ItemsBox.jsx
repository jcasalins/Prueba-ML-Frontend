import ItemCard from '../itemCard/ItemCard'

function ItemsBox({ items }) {
  return (
    <div className="items bg-white">
      {items.map((item, index) => {
        return (
          <ItemCard key={index} item={item} />
        )
      })}
    </div>
  )
}

export default ItemsBox

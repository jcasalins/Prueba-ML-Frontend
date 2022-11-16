import ItemCard from '../itemCard/ItemCard'
import PropTypes from 'prop-types'
function ItemsBox({ items }) {
  return (
    <div className="items bg-white">
      {items.map((item, index) => {
        return <ItemCard key={index} item={item} />
      })}
    </div>
  )
}
ItemsBox.prototype = {
  items: PropTypes.array.isRequired,
}

export default ItemsBox

import { Link } from 'react-router-dom'
import { FaShippingFast } from 'react-icons/fa'

function ItemCard({ item }) {
  return (
    <div className="grid item-card p-15">
      <div className="item-image grid">
        <Link to={`/items/${item.id}`}>
          <img
            src={
              item.picture
                ? item.picture
                : 'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.1/mercadolibre/logo__large_plus.png'
            }
            alt={item.title}
          />
        </Link>
      </div>
      <div className="item-info">
        <div className="item-price">
          <span className="item-price-currency">$</span>
          <span className="item-price-amount">{item.price.amount}</span>
          {item.price.decimals !== 0 ? (
            <span className="item-price-decimals">.{item.price.decimals}</span>
          ) : (
            '.00'
          )}
          {item.free_shipping ? (
            <span className="item-shipping">
              <FaShippingFast />
            </span>
          ) : (
            ''
          )}
        </div>
        <div className="grid item-title">
          <Link to={`/items/${item.id}`}>{item.title}</Link>
        </div>
      </div>
    </div>
  )
}

export default ItemCard

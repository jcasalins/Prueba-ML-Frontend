import PropTypes from 'prop-types'
import { translateCondition, formatPrice } from '../../utils/converter'
function ItemDetails({ item }) {
  return (
    <div className="item bg-white">
      <div className="grid item-details py-40 px-20">
        <div className="item-image">
          <img src={item.picture} alt={item.title} />
        </div>
        <div className="item-info">
          <div className="item-condition">
            <span className="item-condition-text">{ translateCondition(item.condition)}</span>
            <span className="item-sold-quantity"> - { item.sold_quantity > 1 ? item.sold_quantity + ' vendidos' : item.sold_quantity + ' vendido' }</span>
          </div>
          <div className="item-title">
            <h1>{item.title}</h1>
          </div>
          <div className="item-price">
            <span className="item-price-amount">{ formatPrice( item.price.amount, item.price.currency )}</span>
            <sup className="item-price-decimals">{ item.price.decimals !== 0 ? item.price.decimals : '00' }</sup>
          </div>
          <div className="item-buy">
            <button className="item-buy-button">Comprar</button>
          </div>
        </div>
        <div className="item-description">
          <h2>Descripción del producto</h2>
          <p dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, '<br />') }}></p>
        </div>
      </div>
    </div>
  )
}

ItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ItemDetails

import PropTypes from 'prop-types'
function ItemDetails({ item }) {
  return (
    <div className="item bg-white">
      <div className="grid item-details py-40 px-20">
        <div className="item-image">
          <img src={item.picture} alt={item.title} />
        </div>
        <div className="item-info">
          <div className="item-condition">
            <span className="item-condition-text">Nuevo</span>
            <span className="item-sold-quantity"> - 0 vendidos</span>
          </div>
          <div className="item-title">
            <h1>{item.title}</h1>
          </div>
          <div className="item-price">
            <span className="item-price-currency">$</span>
            <span className="item-price-amount">0</span>
            <span className="item-price-decimals">.00</span>
          </div>
          <div className="item-buy">
            <button className="item-buy-button">Comprar</button>
          </div>
        </div>
        <div className="item-description">
          <h2>Descripción del producto</h2>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

ItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ItemDetails

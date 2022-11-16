import './breadcrumbs.scss'
import PropTypes from 'prop-types'
function Breadcrumbs({ categories }) {
  return (
    <div className="breadcrumbs py-15">
      {categories.map((category, index) => {
        return (
          <span key={index} className="d-ib breadcrumb">
            {category}
          </span>
        )
      })}
    </div>
  )
}

Breadcrumbs.prototype = {
  categories: PropTypes.array.isRequired,
}

export default Breadcrumbs

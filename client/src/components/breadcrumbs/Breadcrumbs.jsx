import './breadcrumbs.scss'
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

export default Breadcrumbs

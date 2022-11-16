import { Title, Meta, Link } from 'react-head'
import PropTypes from 'prop-types'

function Index({ title, description }) {
  return (
    <>
      <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <Title>{title} | Mercado Libre</Title>
      <Meta name="description" content={description} />
    </>
  )
}

Index.defaultProps = {
  title: 'Mercado Libre',
  description:
    'Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles.',
}

Index.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Index

import PropTypes from 'prop-types'
export function translateCondition(condition) {
  switch (condition) {
    case 'new':
      return 'Nuevo'
    case 'used':
      return 'Usado'
    default:
      return 'Nuevo'
  }
}
translateCondition.propTypes = {
  condition: PropTypes.string.isRequired,
}
export function formatPrice(price, currency) {
  const cy = currencies[currency]
  return new Intl.NumberFormat(cy.local, {
    style: 'currency',
    currency: cy.code,
    minimumFractionDigits: 0,
  }).format(price)
}
formatPrice.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}
export const currencies = {
  ARS: {
    symbol: '$',
    name: 'Peso Argentino',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'ARS',
    name_plural: 'pesos argentinos',
    local: 'es-AR',
  },
  BRL: {
    symbol: 'R$',
    name: 'Real Brasileño',
    symbol_native: 'R$',
    decimal_digits: 2,
    rounding: 0,
    code: 'BRL',
    name_plural: 'reales brasileños',
    local: 'pt-BR',
  },
  CLP: {
    symbol: '$',
    name: 'Peso Chileno',
    symbol_native: '$',
    decimal_digits: 0,
    rounding: 0,
    code: 'CLP',
    name_plural: 'pesos chilenos',
    local: 'es-CL',
  },
  COP: {
    symbol: '$',
    name: 'Peso Colombiano',
    symbol_native: '$',
    decimal_digits: 0,
    rounding: 0,
    code: 'COP',
    name_plural: 'pesos colombianos',
    local: 'es-CO',
  },
  MXN: {
    symbol: '$',
    name: 'Peso Mexicano',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'MXN',
    name_plural: 'pesos mexicanos',
    local: 'es-MX',
  },
  PEN: {
    symbol: 'S/.',
    name: 'Nuevo Sol',
    symbol_native: 'S/.',
    decimal_digits: 2,
    rounding: 0,
    code: 'PEN',
    name_plural: 'nuevos soles',
    local: 'es-PE',
  },
  UYU: {
    symbol: '$U',
    name: 'Peso Uruguayo',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'UYU',
    name_plural: 'pesos uruguayos',
    local: 'es-UY',
  },
  USD: {
    symbol: '$',
    name: 'Dólar Estadounidense',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'USD',
    name_plural: 'dólares estadounidenses',
    local: 'en-US',
  },
}

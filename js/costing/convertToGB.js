function convertNumToGBP (n) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currencyDisplay: 'symbol', currency: 'GBP' }).format(n)
}

export default convertNumToGBP

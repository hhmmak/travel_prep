const currencyFormat = (num: number) => {

  // round number to 2 decimal places
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export default currencyFormat

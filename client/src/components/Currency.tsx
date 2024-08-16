import { useEffect, useState } from "react";
import axios from "axios";
import currencyFormat from "../util/currencyFormat";
import { useLocation } from "../hooks/LocationService";
import { countries } from "../util/countries"

type CurrencyDataType = {
  date : string 
} & {
  [key: string] : {[toCurrency: string]: number}
}


const Currency = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("usd")
  const [toCurrency, setToCurrency] = useState<string>("hkd")
  const [currencyData, setCurrencyData] = useState<CurrencyDataType | null>(null)
  const {origin, destinationCity, destinationCountry} = useLocation()

  // Currency API credit to: https://github.com/fawazahmed0/exchange-api
  useEffect(() => {
    setFromCurrency(countries[origin].currency?.toLowerCase())
    setToCurrency(countries[destinationCity]?.currency?.toLowerCase() || countries[destinationCountry].currency?.toLowerCase())
    axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${countries[origin].currency?.toLowerCase()}.json`)
      .then(res => {
        setCurrencyData(res.data)
      })
      .catch(err => console.error(err))
  },[destinationCity, destinationCountry, fromCurrency, origin]);

  return (
    <div>
      <h2 className="text-xl my-4">Currency</h2>
      { currencyData && currencyData[fromCurrency] && currencyData[fromCurrency][toCurrency] ?
        <div>
          <div>From {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()} : {currencyData && currencyFormat(currencyData[fromCurrency][toCurrency])}</div>
          <div className="text-sm text-gray-500">as recorded on {currencyData.date}</div>
        </div>
        :
        <div>Currency exchange rate not available</div>
      }
    </div>
  )
}
export default Currency

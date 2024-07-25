import { useEffect, useState } from "react";
import axios from "axios";
import currencyFormat from "../util/currencyFormat";

type CurrencyDataType<FromCurrency extends string> = {
  date : string 
} & {
  [key in FromCurrency] : {[toCurrency: string]: number}
}


const Currency = () => {

  const [currencyData, setCurrencyData] = useState<CurrencyDataType<"usd"> | null>(null)

  useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${"usd"}.json`)
      .then(res => 
        setCurrencyData(res.data)
        // console.log(res.data)
      )
      .catch(err => console.error(err))
  },[]);

  return (
    <div>
      <h2 className="text-xl my-4">Currency</h2>
      { currencyData ?
        <div>
          <div>From USD to HKD : {currencyData && currencyFormat(currencyData["usd"]["hkd"])}</div>
          <div className="text-sm text-gray-500">as recorded on {currencyData.date}</div>
        </div>
        :
        <div>Currency not available</div>
      }
    </div>
  )
}
export default Currency

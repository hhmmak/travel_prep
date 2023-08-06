import { useEffect, useState } from "react";
import axios from "axios";

type CurrencyDataType = {
  base?: string
  date?: string
  motd?:{
    [key: string]: number
  }
  rates?:{
    [key: string]: number
  }
  success: boolean
}


const Currency = () => {

  const [currencyData, setCurrencyData] = useState<CurrencyDataType>({success: false})

  useEffect(() => {
    axios.get(`https://api.exchangerate.host/latest?base=USD`)
      .then(res => 
        setCurrencyData(res.data)
      )
      .catch(err => console.error(err))
  },[]);

  return (
    <div>
      <h2>Currency</h2>
      <div>From USD to JPY : {currencyData.rates?.["JPY"]}</div>
      <div>as recorded on {currencyData.date}</div>
    </div>
  )
}
export default Currency
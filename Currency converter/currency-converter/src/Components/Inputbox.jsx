import React, { useState } from 'react'
import Inputform from './inputform'
import useCurrencyInfo from '../Custom Hook/useCurrencyInfo'

function Inputbox() {
  const [amount, setAmount] = useState()
  const [to, setTo] = useState("inr")
  const [from, setFrom] = useState("usd")
  const [convertedamount, setConvertedamount] = useState()
  const currencyInfo = useCurrencyInfo(from)
  const options= Object.keys(currencyInfo)
  
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    // setConvertedamount(amount)
    // setAmount(convertedamount)
  }
  console.log(currencyInfo)

  const convert =() => {setConvertedamount(amount * currencyInfo[to])}
  console.log(currencyInfo[to])
  return (
    <div className='bg-slate-500 h-fit p-4 relative flex flex-col rounded gap-2'  >
  <Inputform
    holder="Enter your value"
    currencyOptions={options}
    amount={amount}
    selectCurrency={from}
    onCurrencyChange={(currency)=> setFrom(currency)}
    onamountchange={(amount)=> setAmount(amount)}
    label="From">
  </Inputform>
     <button onClick={swap} className='absolute bg-blue-600 py-[2px] px-1 rounded border-white border-2   top-[36.5%] left-[44%] text-white'>SWAP</button>
  <Inputform
     PriceDisable
     currencyOptions={options}
     selectCurrency={to}
     onCurrencyChange={(currency)=> setTo(currency)}
     amount={convertedamount}
     label="To">
  </Inputform>
     <button onClick={convert} className=' bg-blue-600 py-[2px] px-1 rounded border-blue-600 text-white border-2 '>CONVERT {from.toUpperCase()} TO {to.toUpperCase()}</button>
    </div>
  )
}

export default Inputbox
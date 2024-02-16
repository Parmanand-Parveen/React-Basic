import React from 'react'

function Inputform({
  label,
  PriceDisable,
  holder,
  amount,
  selectCurrency='usd',
  onCurrencyChange,
  onamountchange,
  currencyOptions = []
}) {
  return (              
    <>
    <div className='bg-white max-w-xl p-4 flex justify-between gap-5 border-2 rounded-sm '>
  <div className='flex flex-col-reverse'>
    <input 
      disabled={PriceDisable}
      value={amount}
      onChange={(e)=> onamountchange && onamountchange(Number(e.target.value))}
      type='number'      
      id='CurrencyNumber'
      className='bg-gray-300 rounded-md px-2' 
      placeholder={holder}>
    </input>

    <label htmlFor='CurrencyNumber' className='text-black/50'>
    {label}
    </label>
  </div>
  <div>
    <p className='text-black/50'>Currency Type</p>
    <select placeholder='Select currency'
     className='w-24
      bg-gray-300'
       value={selectCurrency}
       onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
        {currencyOptions.map((value)=><option
          key={value} value={value} >
         {value}
          </option>)}
    </select>
    </div>
    </div>
    </>
  )
}

export default Inputform
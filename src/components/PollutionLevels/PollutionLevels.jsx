import React from 'react'
import { getDarkerGradient, getGradient, getBg, generateNumber } from '../../utils'

const PollutionLevels = ({title, contaminant}) => {

  return (
    <div className={`flex w-full flex-col h-52 p-1 rounded ${getBg(contaminant.bg)}`}>
      <div className='flex basis-1/3 flex-row justify-center items-center'>
        <p className='text-neutral-50 text-3xl'>{title}</p>
      </div>
      <div className='flex basis-2/3 flex-row justify-center items-center gap-5'>
        <div className={`flex flex-col basis-1/2 items-center justify-center p-2 rounded-sm shadow bg-gradient-to-r ${getDarkerGradient(contaminant.bg)}`}>
          <p className='text-white text-xl'>Min</p>
          <p className='text-white font-bold text-3xl'>{generateNumber(4,0)}</p>
        </div>
        <div className={`flex flex-col basis-1/2 items-center justify-center p-2 rounded-sm shadow bg-gradient-to-r ${getDarkerGradient(contaminant.bg)}`}>
         <p className='text-white text-xl'>Mean (Prediction)</p>
          <p className='text-white font-bold text-3xl'>{generateNumber(4,8)}</p>
        </div>
        <div className={`flex flex-col basis-1/2 items-center justify-center p-2 rounded-sm shadow bg-gradient-to-r ${getDarkerGradient(contaminant.bg)}`}>
          <p className='text-white text-xl'>Max</p>
          <p className='text-white font-bold text-3xl'>{generateNumber(8,10)}</p>
        </div>
      </div>
    </div>
  )
}

export default PollutionLevels
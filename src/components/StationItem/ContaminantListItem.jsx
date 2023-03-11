import React from 'react'
import { getGradient, getContaminantListGradient } from '../../utils'

const ContaminantListItem = ({label, data}) => {
  return (
    <div className={`flex justify-between rounded-sm p-3 bg-gradient-to-r ${getContaminantListGradient(label, data)}`}>
      <div className={`flex items-center justify-center basis-2/3 `}>
        <p className='text-xl text-white'>{label.toUpperCase()} </p>
      </div>
      <div className='flex items-center justify-center basis-1/3'>
        <p className='text-white'>{data}</p>
      </div>
    </div>
  )
}

export default ContaminantListItem
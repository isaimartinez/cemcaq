import React from 'react'
import LineChart from '../Charts/LineChart'
import { getGradient } from '../../utils'
import {generateData} from '../../utils'

const ContaminantItem = ({contaminant}) => {
  return (
    <div className={`flex flex-col w-full h-52  rounded cursor-pointer bg-gradient-to-r ${getGradient(contaminant.bg)}`}>
      <div className='flex flex-col items-center justify-center p-1'>
        <p className='text-xl text-neutral-50'>{contaminant.name}</p>
        <p className='text-base text-neutral-50'>{contaminant.id} ({contaminant.unit})</p>
      </div>
      <LineChart id={contaminant.id} series={[{data: generateData(10, {min:10, max:100})}]}/>
    </div>
  )
}

export default ContaminantItem
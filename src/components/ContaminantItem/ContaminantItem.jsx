import React from 'react'
import LineChart from '../Charts/LineChart'
import { getGradient } from '../../utils'
import {generateData} from '../../utils'

const ContaminantItem = ({contaminant}) => {
  return (
    <div className={`flex flex-col w-full h-52  rounded cursor-pointer bg-gradient-to-r ${getGradient(contaminant.bg)}`}>
      <div className='flex flex-col items-center justify-center p-1 '>
        <p className='text-base text-neutral-50'>{contaminant.name} {contaminant.id}</p>
        <p className='text-xl text-neutral-50'> {contaminant.data} ({contaminant.unit})</p>
      </div>
      <div className='flex flex-row'>
       <LineChart id={contaminant.id} series={[{data: generateData(10, {min:10, max:100})}]}/>
      </div>
    </div>
  )
}

export default ContaminantItem
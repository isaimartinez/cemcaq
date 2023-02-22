import React from 'react'
import LineChart from '../Charts/LineChart'
import { getGradient } from '../../utils'
import {useNavigate} from 'react-router-dom'
import {generateData} from '../../utils'
 
const StationItem = ({station}) => {
  const navigate = useNavigate()

  const goToDetails = () => {
    navigate(`/estaciones/${station.id}`)
  }

  return (
    <div className={`flex flex-col w-full h-52  rounded cursor-pointer bg-gradient-to-r ${getGradient(station.bg)}`}
      onClick={goToDetails}
    >
      <div className='flex flex-col items-center justify-center p-1'>
        <p className='text-xl text-neutral-50'>{station.name}</p>
        <p className='text-base text-neutral-50'>{station.id}</p>
      </div>
      <LineChart id={station.id} series={[{data: generateData(10, {min:10, max:100})}]}/>
    </div>
  )
}

export default StationItem
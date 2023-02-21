import React from 'react'
import LineChart from '../LineChart'
import { getGradient } from '../../utils'
import {useNavigate} from 'react-router-dom'

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
        <p className='text-xl'>{station.name}</p>
        <p className='text-base'>{station.id}</p>
      </div>
      <LineChart id={station.id}/>
    </div>
  )
}

export default StationItem
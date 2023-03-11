import React from 'react'
import LineChart from '../Charts/LineChart'
import { getDarkerGradient, getGradient, getBg } from '../../utils'
import {generateData} from '../../utils'
import {useNavigate} from 'react-router-dom'

const ContaminantItem = ({contaminant, station}) => {
  const navigate = useNavigate()

  const goToPollutant = () => {
    if(contaminant.prediction) {
      navigate(`/estaciones/${station.id}/${contaminant.id}`)
    }
  }

  return (
    <div className={`flex flex-col w-full h-52 p-1  rounded ${contaminant.prediction && 'cursor-pointer'}  ${getBg(contaminant.bg)}`}
      onClick={goToPollutant}
    >
      <div className='flex flex-col basis-1/3 items-center justify-center  '>
        <p className='text-2xl text-neutral-50'>{contaminant.name}</p>
        <p className='text-xl text-neutral-50'>{contaminant.id} ({contaminant.unit})</p>
      </div>
      <div className='flex flex-row basis-2/3 items-center justify-center gap-2 '>
        <div className={`flex flex-col basis-1/2 items-center justify-center p-2 rounded-sm shadow bg-gradient-to-r ${getDarkerGradient(contaminant.bg)}`}>
          <p className='text-white text-xl'>Current Level</p>
          <p className='text-white font-bold text-3xl'>{contaminant.data}</p>
        </div>
        {
          contaminant.prediction && (
            <div className={`flex flex-col basis-1/2 items-center justify-center p-2 rounded-sm shadow bg-gradient-to-r ${getDarkerGradient(contaminant.bg)}`}>
              <p className='text-white text-xl'>Upcoming Prediction</p>
              <p className='text-white font-bold text-3xl'>{contaminant.prediction}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ContaminantItem
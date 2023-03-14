import React from 'react'
import {useNavigate} from 'react-router-dom'
import ContaminantListItem from './ContaminantListItem'
 
const StationItem = ({station}) => {
  const navigate = useNavigate()

  const goToDetails = () => {
    navigate(`/estaciones/${station.id}`)
  }

  return (
    <div className={`flex flex-col w-full p-3 m-5 bg-secondary-dark  rounded cursor-pointer`}
      onClick={goToDetails}
    >
      <div className='flex flex-col items-center justify-center p-1'>
        <p className='text-2xl text-neutral-50'>{station.id}</p>
        <p className='text-xl md:text-base text-neutral-50'>{station.name}</p>
      </div>
      <div className='flex flex-col gap-2 mt-5'>
        {
          Object.keys(station.data).map((key) => (
            <ContaminantListItem label={key} data={station.data[key]} key={`${station.id}-${key} `}/>
          ))
        }
      </div>
    </div>
  )
}

export default StationItem
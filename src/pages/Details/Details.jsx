import React from 'react'
import { useDetails } from './useDetails'
import {Header, ContaminantItem} from '../../components'
import { contaminants } from '../../data'

const Details = () => {
  const {id, station} = useDetails()
  
  if(station) 
  return (
    <>
      <Header title={`${station.name} ${station.id}`}/>
      <section className='flex w-full mt-10 '>
        <div className='grid grid-cols-3 justify-items-center w-full gap-10 m-5 p-3 bg-secondary-dark rounded'>
          {
            contaminants.map((contaminant, i) => (<ContaminantItem contaminant={contaminant} key={`StationItem-${i}`}/>))
          }
        </div>
      </section>
    </>
  )
}

export default Details
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
      <section className='flex flex-col w-full  '>
        <div className='flex flex-row  w-full'>
          <div className='grid basis-3/4 grid-cols-3 justify-items-center w-full gap-10 m-5 p-3 bg-secondary-dark rounded'>
            {
              contaminants.map((contaminant, i) => (<ContaminantItem contaminant={contaminant} key={`StationItem-${i}`}/>))
            }
          </div>
          <div className='flex flex-col basis-1/4 m-5  gap-10'>
            <div className='basis-1/2 p-3  bg-secondary-dark rounded'>
              <p className='text-neutral-50 text-2xl'>Predictions</p>
            </div>
            <div className='basis-1/2 p-3  bg-secondary-dark rounded'>
              <p className='text-neutral-50 text-2xl'>Recommendations</p>
            </div>
          </div>
        </div>
        <div className='flex m-5 p-3 bg-secondary-dark rounded'>
          <p className='text-neutral-50 text-3xl'>HeatMap</p>
        </div>

      </section>
    </>
  )
}

export default Details
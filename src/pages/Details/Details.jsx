import React from 'react'
import { useDetails } from './useDetails'
import {Header, ContaminantItem, HeatMapChart, AreaChart, RadarChart} from '../../components'
import { contaminants } from '../../data'
import {seriesPM, seriesPpm} from '../../data/chartsConfig'

const Details = () => {
  const {id, station,pred36Cat} = useDetails()
  
  if(station) 
  return (
    <>
      <Header title={`${station.name} ${station.id}`}/>
      <section className='flex flex-col w-full  '>
        <div className='flex flex-row  w-full'>
          <div className='grid bg-main dark:bg-main-dark grid-cols-3 justify-items-center w-full gap-10 m-5 p-3 rounded'>
            {
              contaminants.map((contaminant, i) => (<ContaminantItem contaminant={contaminant} station={station} key={`StationItem-${i}`}/>))
            }
          </div>
        </div>
        <div className='flex bg-main dark:bg-main-dark flex-col m-5 p-3  rounded'>
          <p className='text-zinc-800 dark:text-neutral-50 text-3xl'>HeatMap</p>
          <div className='flex  items-center justify-center'>
            <HeatMapChart />
          </div>
        </div>


        <div className='flex bg-main dark:bg-main-dark flex-col m-5 p-3 rounded'>
          <p className='text-zinc-800 dark:text-neutral-50 text-3xl'>Predicted Values PM10 vs PM2.5 (36 hrs)</p>
          <div className='flex  items-center justify-center'>
            <AreaChart series={seriesPM} categories={pred36Cat}/>
          </div>
        </div>

      </section>
    </>
  )
}

export default Details
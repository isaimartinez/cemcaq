import React from 'react'
import {Header, ContaminantItem, HeatMapChart, AreaChart, RadarChart} from '../../components'
import { contaminants } from '../../data'
import {seriesPM, seriesPpm, seriesRadar} from '../../data/chartsConfig'
import { usePollutant } from './usePollutant'

const Pollutant = () => {
  const {id, station, pm10Data, pm10Cat} = usePollutant()
  
  if(station) 
  return (
    <>
      <Header title={`${station.name} ${station.id}`}/>
      <section className='flex flex-col w-full  '>
        <div className='flex flex-row  w-full'>
          <div className='grid grid-cols-3 justify-items-center w-full gap-10 m-5 p-3 bg-secondary-dark rounded'>
            {
              contaminants.map((contaminant, i) => (<ContaminantItem contaminant={contaminant} key={`StationItem-${i}`}/>))
            }
          </div>
        </div>
        <div className='flex flex-col m-5 p-3 bg-secondary-dark rounded'>
          <p className='text-neutral-50 text-3xl'>HeatMap</p>
          <HeatMapChart />
        </div>

        <div className='flex flex-row  w-full'>
          <div className='flex flex-col basis-1/2 grid-cols-3 justify-items-center w-full m-5 p-3 bg-secondary-dark rounded'>
            <p className='text-neutral-50 text-2xl'>NO2 vs CO vs O3 vs SO2</p>
            <AreaChart series={seriesPpm}/>
          </div>
          <div className='flex flex-col basis-1/2 grid-cols-3 justify-items-center w-full m-5 p-3 bg-secondary-dark rounded'>
            <p className='text-neutral-50 text-2xl'>PM10 vs PM2.5</p>
            <AreaChart series={seriesPM}/>
          </div>
        </div>

        <div className='flex flex-row  w-full'>
          <div className='flex flex-col basis-1/2 grid-cols-3 justify-items-center w-full  m-5 p-3 bg-secondary-dark rounded'>
            <p className='text-neutral-50 text-2xl'>PM10 Radar</p>
            <RadarChart series={seriesRadar}/>
          </div>
          <div className='flex flex-col basis-1/2 grid-cols-3 justify-items-center w-full m-5 p-3 bg-secondary-dark rounded'>
            <p className='text-neutral-50 text-2xl'>PM10 Mean-Max-Min EWMA</p>
            <AreaChart series={pm10Data} categories={pm10Cat}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pollutant
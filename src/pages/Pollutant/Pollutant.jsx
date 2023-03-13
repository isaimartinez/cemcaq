import React from 'react'
import {Header, AreaChart, PollutionLevels} from '../../components'
import {seriesPM, seriesHistVsPred} from '../../data/chartsConfig'
import { usePollutant } from './usePollutant'

const Pollutant = () => {
  const {id, station, pm10Data, pm10Cat, pollutant, histVsPredCat} = usePollutant()
  console.log(seriesHistVsPred)
  if(station) 
  return (
    <>
      <Header title={`${station.name} ${pollutant}`}/>
      <section className='flex flex-col w-full  '>
        <div className='flex flex-col m-5 p-3 bg-secondary-dark rounded gap-4'>
          <p className='text-neutral-50 text-3xl'>Forecasted Pollution Levels</p>
          {/* <div className='flex w-full justify-center items-center flex-row gap-2'> */}
            <PollutionLevels title="6am - 6pm (24 hrs)" contaminant={{bg: 'green'}}/>
            <PollutionLevels title="6am - 6pm (36 hrs)" contaminant={{bg: 'yellow'}}/>
          {/* </div> */}
        </div>

        <div className='flex flex-col m-5 p-3 bg-secondary-dark rounded'>
          <p className='text-neutral-50 text-3xl'>{pollutant} Mean-Max-Min EWMA</p>
          <AreaChart series={pm10Data} categories={pm10Cat}/>
        </div>
        <div className='flex flex-col m-5 p-3 bg-secondary-dark rounded'>
          <p className='text-neutral-50 text-3xl'>{pollutant} Historical vs Predictions</p>
          <AreaChart series={seriesHistVsPred} categories={histVsPredCat}/>
        </div>

        {/* <div className='flex flex-row  w-full'>
          <div className='flex flex-col basis-1/2 grid-cols-3 justify-items-center w-full m-5 p-3 bg-secondary-dark rounded'>
            <p className='text-neutral-50 text-2xl'>{pollutant} Mean-Max-Min EWMA</p>
            <AreaChart series={pm10Data} categories={pm10Cat}/>
          </div>
          <div className='flex flex-col basis-1/2 grid-cols-3 justify-items-center w-full m-5 p-3 bg-secondary-dark rounded'>
            <p className='text-neutral-50 text-2xl'>{pollutant} Historical vs Predictions</p>
            <AreaChart series={seriesHistVsPred} categories={histVsPredCat}/>
          </div>
        </div> */}
      </section>
    </>
  )
}

export default Pollutant
import React from 'react'
import {Header, AreaChart, PollutionLevels} from '../../components'
import {seriesHistVsPred, seriesActualVsPred3} from '../../data/chartsConfig'
import { usePollutant } from './usePollutant'

const Pollutant = () => {
  const {id, station, pm10Data, pm10Cat, pollutant, histVsPredCat, actualVsPred, actualVsPredCat} = usePollutant()
  if(station) 
  return (
    <>
      <Header title={`${station.name} ${pollutant}`}/>
      <section className='flex flex-col w-full  '>
        <div className='flex bg-main dark:bg-main-dark flex-col m-5 p-3  rounded gap-4'>
          <p className='text-zinc-800 dark:text-neutral-50 text-3xl'>Forecasted Pollution Levels</p>
          <div className='flex w-full justify-center items-center flex-row gap-2'>
            <PollutionLevels title="6am - 6pm (24 hrs)" contaminant={{bg: 'green'}}/>
            <PollutionLevels title="6am - 6pm (36 hrs)" contaminant={{bg: 'yellow'}}/>
          </div>
        </div>

        {
          actualVsPred.length > 0 ? (

            <div className='flex bg-main dark:bg-main-dark flex-col m-5 p-3  rounded'>
              <p className='text-zinc-800 dark:text-neutral-50 text-3xl'>{pollutant} Mean-Max-Min Actual Vs Predict</p>
              {/* <AreaChart series={pm10Data} categories={pm10Cat}/> */}
              <div className='flex  items-center justify-center'>
                <AreaChart series={actualVsPred} categories={actualVsPredCat}/>
              </div>
            </div>

          ) : (
            <>

            <div className='flex bg-main dark:bg-main-dark flex-col m-5 p-3  rounded'>
              <p className='text-zinc-800 dark:text-neutral-50 text-3xl'>{pollutant} Mean-Max-Min EWMA</p>
              <div className='flex  items-center justify-center'>
                <AreaChart series={pm10Data} categories={pm10Cat}/>
              </div>
              {/* <AreaChart series={actualVsPred} categories={actualVsPredCat}/> */}
            </div>
            <div className='flex bg-main dark:bg-main-dark flex-col m-5 p-3  rounded'>
              <p className='text-zinc-800 dark:text-neutral-50 text-3xl'>{pollutant} Historical vs Predictions (Last 7 days)</p>
              <div className='flex  items-center justify-center'>
                <AreaChart series={seriesHistVsPred} categories={histVsPredCat}/>
              </div>
            </div>
            </>
          )
        }

        {/* <div className='flex flex-row  w-full'>
          <div className='flex flex-col basis-1/2 grid-cols-3 justify-items-center w-full m-5 p-3 bg-secondary-dark rounded'>
            <p className='text-zinc-800 dark:text-neutral-50 text-2xl'>{pollutant} Mean-Max-Min EWMA</p>
            <AreaChart series={pm10Data} categories={pm10Cat}/>
          </div>
          <div className='flex flex-col basis-1/2 grid-cols-3 justify-items-center w-full m-5 p-3 bg-secondary-dark rounded'>
            <p className='text-zinc-800 dark:text-neutral-50 text-2xl'>{pollutant} Historical vs Predictions (Last 7 days)</p>
            <AreaChart series={seriesHistVsPred} categories={histVsPredCat}/>
          </div>
        </div> */}
      </section>
    </>
  )
}

export default Pollutant
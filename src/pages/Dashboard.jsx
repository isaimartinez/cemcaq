import React from 'react'
import {Header, StationItem} from '../components'
import {stations} from '../data'

const Dashboard = () => {
  return (
    <>
      <Header title={"CALIDAD DEL AIRE ACTUAL"}/>
      <section className='flex w-full mt-10 '>
        <div className='grid grid-cols-3 justify-items-center w-full gap-10 m-5 p-3 bg-secondary-dark rounded'>
          {
            stations.map((station, i) => (<StationItem station={station} key={`StationItem-${i}`}/>))
          }
        </div>
      </section>
    </>
  )
}

export default Dashboard
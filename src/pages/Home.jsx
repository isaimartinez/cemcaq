import React from 'react'
import {Header, StationItem} from '../components'
import {stations} from '../data'

const Home = () => {
  return (
    <>
      <Header title={"CALIDAD DEL AIRE ACTUAL"}/>
      <section className='flex w-full '>
        <div className='grid grid-cols-6 justify-items-center m-5 w-full 2xl:gap-5 md:gap-1  rounded'>
          {
            stations.map((station, i) => (<StationItem station={station} key={`StationItem-${i}`}/>))
          }
        </div>
      </section>
    </>
  )
}

export default Home
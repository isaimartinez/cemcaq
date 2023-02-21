import React from 'react'
import { useDetails } from './useDetails'
import {Header} from '../../components'

const Details = () => {
  const {id, station} = useDetails()
  
  if(station) 
  return (
    <>
      <Header title={`${station.name} ${station.id}`}/>
      <div>{station.id}</div>
    </>
  )
}

export default Details
import React from 'react'
import Chart from 'react-apexcharts'
import {optionsRadar} from '../../data/chartsConfig'

const RadarChart = ({series}) => {
  return (
    <div className=''>
      <Chart type="radar" height={380}  options={optionsRadar} series={series}/>
    </div>
  )
}

export default RadarChart
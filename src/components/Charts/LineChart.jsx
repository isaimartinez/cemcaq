import React from 'react'
import Chart from 'react-apexcharts'
import { smoothLineOptions } from '../../data/chartsConfig'

const LineChart = ({series}) => {
  return (
    <div className='flex m-auto'>
        <Chart type='line' height={120}  options={smoothLineOptions} series={series}/>
    </div>
  )
}

export default LineChart
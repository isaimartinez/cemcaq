import React from 'react'
import Chart from 'react-apexcharts'
import { smoothLineOptions } from '../../data'

const LineChart = ({series}) => {
  return (
    <div className='flex m-auto'>
      <div className=''>
        <Chart type='line' height={120}  options={smoothLineOptions} series={series}/>
      </div>
    </div>
  )
}

export default LineChart
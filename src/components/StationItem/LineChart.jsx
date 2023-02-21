import React from 'react'
import Chart from 'react-apexcharts'
import { smoothLineOptions } from '../../data'

const series = [{
  data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
}]

const LineChart = ({id}) => {
  return (
    <div className='flex m-auto'>
      <div className=''>
        <Chart type='line' height={120}  options={smoothLineOptions} series={series}/>
      </div>
    </div>
  )
}

export default LineChart
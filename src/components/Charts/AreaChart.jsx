import React from 'react'
import {optionsArea} from '../../data/chartsConfig'
import Chart from 'react-apexcharts'

const AreaChart = ({series, categories}) => {
  return (
    <div>
      <Chart type="area" height={350}  options={
          categories ? {...optionsArea, xaxis:{categories: categories}} : optionsArea
        } 
      
        series={series}
      />
    </div>
  )
}

export default AreaChart
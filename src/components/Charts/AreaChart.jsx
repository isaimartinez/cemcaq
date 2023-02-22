import React from 'react'
import {optionsArea} from '../../data/chartsConfig'
import Chart from 'react-apexcharts'

const AreaChart = ({series}) => {
  return (
    <div>
      <Chart type="area" height={350}  options={optionsArea} series={series}/>
    </div>
  )
}

export default AreaChart
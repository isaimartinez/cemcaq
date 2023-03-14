import React from 'react'
import Chart from 'react-apexcharts'
import { seriesHeatMap, optionsHeatMap } from '../../data/chartsConfig'

const HeatMapChart = () => {
  return (
    // <div className=' bg-red-400  justify-center items-center'>
      <Chart type='heatmap' height={350} width="100%" options={optionsHeatMap} series={seriesHeatMap}/>
    // </div>
  )
}

export default HeatMapChart
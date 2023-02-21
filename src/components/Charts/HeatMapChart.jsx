import React from 'react'
import Chart from 'react-apexcharts'
import { seriesHeatMap, optionsHeatMap } from '../../data/staticCharts'

const HeatMapChart = () => {
  return (
    <div className='flex w-full  justify-center items-center'>
      <Chart type='heatmap' height={350} width={1200} options={optionsHeatMap} series={seriesHeatMap}/>
    </div>
  )
}

export default HeatMapChart
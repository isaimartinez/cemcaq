import React from 'react'
import Chart from 'react-apexcharts'
import { seriesHeatMap, optionsHeatMap } from '../../data/chartsConfig'
import { useSelector } from 'react-redux'

const HeatMapChart = () => {
  const {currentMode} = useSelector((state) => state.view)

  return (
    // <div className=' bg-red-400  justify-center items-center'>
      <Chart type='heatmap' height={350} width="100%" options={optionsHeatMap(currentMode)} series={seriesHeatMap}/>
    // </div>
  )
}

export default HeatMapChart
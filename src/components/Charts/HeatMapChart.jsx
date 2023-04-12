import React from 'react'
import Chart from 'react-apexcharts'
import { seriesHeatMap, optionsHeatMap } from '../../data/chartsConfig'
import { useSelector } from 'react-redux'

const HeatMapChart = () => {
  const {currentMode} = useSelector((state) => state.view)

  return (
    <div className='w-11/12'>
      <Chart type='heatmap' height={400} width="100%" options={optionsHeatMap(currentMode)} series={seriesHeatMap}/>
    </div>
  )
}

export default HeatMapChart
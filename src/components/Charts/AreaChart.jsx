import React from 'react'
import {optionsArea} from '../../data/chartsConfig'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'

const AreaChart = ({series, categories}) => {
  const {currentMode} = useSelector((state) => state.view)

  return (
    <div>
      <Chart type="area" height={350}  options={
          categories ? {...optionsArea(currentMode), xaxis:{...optionsArea(currentMode).xaxis,categories: categories}} : optionsArea
        } 
      
        series={series}
      />
    </div>
  )
}

export default AreaChart
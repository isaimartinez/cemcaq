import React from 'react'
import {optionsArea} from '../../data/chartsConfig'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'

const AreaChart = ({series, categories}) => {
  const {currentMode} = useSelector((state) => state.view)

  return (
    <div className='w-11/12'>
      <Chart type="area" height={400}  options={
          categories ? {...optionsArea(currentMode), xaxis:{...optionsArea(currentMode).xaxis,categories: categories}} : optionsArea
        } 
      
        series={series}
      />
    </div>
  )
}

export default AreaChart
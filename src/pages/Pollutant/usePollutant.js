import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {stations} from '../../data'
import capPM10 from '../../data/dataCap12H.json'

export const usePollutant = () => {
  const [station, setStation] = useState(null)
  const [pm10Data, setPm10Data] = useState([])
  const [pm10Cat, setPm10Cat] = useState([])
  const {id} = useParams()

  useEffect(() => {
    getStationData()
  }, [])

  const getStationData = () => {
    const x = stations.filter((item) => item.id == id)[0]
    setStation(x)
    adaptData()
  }

  const adaptData = () => {
    let categories = capPM10.map((obj) => {
      const inputDateString = obj.Date_Time
      const [dateStr, timeStr] = inputDateString.split(' ');
      const [day, month, year] = dateStr.split('/');
      const [hours, minutes] = timeStr.split(':');
      const dateObj = new Date(`20${year}`,month-1,day,hours,minutes,0);
      const outputDateString = new Date(dateObj.toString().split('GMT')[0]+' UTC').toISOString()
      return outputDateString
    })
    const data = [
      {
        name: "Mean_EWMA",
        data: capPM10.map((obj) => parseFloat(obj.Mean_EWMA)),
      },
      {
        name: "Max_EWMA",
        data: capPM10.map((obj) => parseFloat(obj.Max_EWMA)),
      },
      {
        name: "Min_EWMA",
        data: capPM10.map((obj) => parseFloat(obj.Min_EWMA)),
      },
    ];
    setPm10Data(data)
    setPm10Cat(categories)
  }
  

  return {id, station, pm10Data, pm10Cat}
}

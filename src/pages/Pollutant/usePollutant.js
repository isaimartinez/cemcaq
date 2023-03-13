import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {stations} from '../../data'
import capPM10 from '../../data/dataCap12H.json'

export const usePollutant = () => {
  const [station, setStation] = useState(null)
  const [pm10Data, setPm10Data] = useState([])
  const [pm10Cat, setPm10Cat] = useState([])
  const [histVsPredCat, setHistVsPredCat] = useState([])
  const {id, pollutant} = useParams()

  useEffect(() => {
    getStationData()
    generateHistVsPredCat()
    console.log(id, pollutant)
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

  const generateHistVsPredCat = () => {
    const currentDate = new Date();
    const dates = [];

    for (let i = 1; i <= 7; i++) {
      const sixPmDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - i, 18, 0, 0);
      const strpm = new Date(sixPmDate.toString().split('GMT')[0]+' UTC').toISOString()
      dates.push(strpm);
      const sixAmDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - i, 6, 0, 0);
      const stram = new Date(sixAmDate.toString().split('GMT')[0]+' UTC').toISOString()
      dates.push(stram);
    }
    setHistVsPredCat(dates.reverse())
  }


  

  return {id, station, pollutant, pm10Data, pm10Cat, histVsPredCat}
}

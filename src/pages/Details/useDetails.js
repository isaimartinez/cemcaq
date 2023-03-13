import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {stations} from '../../data'
import capPM10 from '../../data/dataCap12H.json'

export const useDetails = () => {
  const [station, setStation] = useState(null)
  const [pred36Cat, setPred36Cat] = useState([])
  const {id} = useParams()

  useEffect(() => {
    getStationData()
    generate36HrsCat()
  }, [])

  const getStationData = () => {
    const x = stations.filter((item) => item.id == id)[0]
    setStation(x)
  }

  const generate36HrsCat = () => {
    const currentDate = new Date();
    const dates = [];
    for (let i = 1; i <= 3; i++) {
      const sixAmDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i, 6, 0, 0);
      const stram = new Date(sixAmDate.toString().split('GMT')[0]+' UTC').toISOString()
      dates.push(stram);
      const sixPmDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i, 18, 0, 0);
      const strpm = new Date(sixPmDate.toString().split('GMT')[0]+' UTC').toISOString()
      dates.push(strpm);
    }
    setPred36Cat(dates)
  }
  

  return {id, station, pred36Cat}
}
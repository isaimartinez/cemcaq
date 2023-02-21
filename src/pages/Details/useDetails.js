import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {stations} from '../../data'

export const useDetails = () => {
  const [station, setStation] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    getStation()
  }, [])

  const getStation = () => {
    const x = stations.filter((item) => item.id == id)[0]
    setStation(x)
    console.log(x)
  }
  

  return {id, station}
}
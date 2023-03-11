import {generateNumber} from '../utils'
export const stations = [
  {
    name: "Carrillo Puerto",
    id: "CAP",
    data: {
      pm25: generateNumber(5, 35),
      pm10: generateNumber(5, 35),
      o3: generateNumber(2.5, 0.001),
      no2: generateNumber(2.5, 0.001),
      so2: generateNumber(2.5, 0.001),
      co: generateNumber(2.5, 0.001),
    },
    bg: "green"
  },
  {
    name: "Corregidora",
    id: "COR",
    data: {
      pm25: generateNumber(5, 35),
      pm10: generateNumber(5, 35),
      o3: generateNumber(2.5, 0.001),
      no2: generateNumber(2.5, 0.001),
      so2: generateNumber(2.5, 0.001),
      co: generateNumber(2.5, 0.001),
    },
    bg: "green"
  },
  {
    name: "Epigmenio González",
    id: "EPG",
    data: {
      pm25: generateNumber(5, 35),
      pm10: generateNumber(5, 35),
      o3: generateNumber(2.5, 0.001),
      no2: generateNumber(2.5, 0.001),
      so2: generateNumber(2.5, 0.001),
      co: generateNumber(2.5, 0.001),
    },
    bg: "yellow"
  },
  {
    name: "Félix Orores",
    id: "FEO",
    data: {
      pm25: generateNumber(5, 35),
      pm10: generateNumber(5, 35),
      o3: generateNumber(2.5, 0.001),
      no2: generateNumber(2.5, 0.001),
      so2: generateNumber(2.5, 0.001),
      co: generateNumber(2.5, 0.001),
    },
    bg: "green"
  },
  {
    name: "Josefa Vergara",
    id: "JOV",
    data: {
      pm25: generateNumber(5, 35),
      pm10: generateNumber(5, 35),
      o3: generateNumber(2.5, 0.001),
      no2: generateNumber(2.5, 0.001),
      so2: generateNumber(2.5, 0.001),
      co: generateNumber(2.5, 0.001),
    },
    bg: "orange"
  },
  {
    name: "San Juan del Rio",
    id: "SJU",
    data: {
      pm25: generateNumber(5, 35),
      pm10: generateNumber(5, 35),
      o3: generateNumber(2.5, 0.001),
      no2: generateNumber(2.5, 0.001),
      so2: generateNumber(2.5, 0.001),
      co: generateNumber(2.5, 0.001),
    },
    bg: "red"
  },
]

export const contaminants = [
  {
    id: "PM2.5",
    name: "Material Particulado",
    data: 5,
    prediction: 4,
    unit: "ug/㎥",
    bg: "yellow"
  },{
    id: "PM10",
    name: "Material Particulado",
    data: 34,
    prediction: 37,
    unit: "ug/㎥",
    bg: "green"
  },{
    id: "NO2",
    name: "Dióxido de Nitrógeno",
    data: 0.001,
    unit: "ppm",
    bg: "red"
  },{
    id: "CO",
    name: "Mónoxido de Carbono",
    data: 1.03,
    unit: "ppm",
    bg: "orange"
  },{
    id: "O3",
    name: "Ozono promedio horario",
    data: 0.29,
    unit: "ppm",
    bg: "red"
  },{
    id: "SO2",
    name: "Dióxido de Azufre",
    data: 0.006,
    unit: "ppm",
    bg: "green"
  },
]

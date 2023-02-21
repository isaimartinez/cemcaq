export const stations = [
  {
    name: "Carrillo Puerto",
    id: "CAP",
    bg: "green"
  },
  {
    name: "Corregidora",
    id: "COR",
    bg: "green"
  },
  {
    name: "Epigmenio González",
    id: "EPG",
    bg: "yellow"
  },
  {
    name: "Félix Orores",
    id: "FEO",
    bg: "green"
  },
  {
    name: "Josefa Vergara",
    id: "JOV",
    bg: "orange"
  },
  {
    name: "San Juan del Rio",
    id: "SJU",
    bg: "red"
  },
]

export const contaminants = [{
  id: "NO2",
  name: "Dióxido de Nitrógeno",
  unit: "ppm",
  bg: "red"
},{
  id: "CO",
  name: "Mónoxido de Carbono",
  unit: "ppm",
  bg: "yellow"
},{
  id: "O3",
  name: "Ozono promedio horario",
  unit: "ppm",
  bg: "red"
},{
  id: "SO2",
  name: "Dióxido de Azufre",
  unit: "ppm",
  bg: "green"
},{
  id: "PM2.5",
  name: "Material Particulado",
  unit: "ug/m^3",
  bg: "yellow"
},{
  id: "NO2",
  name: "Material Particulado",
  unit: "ug/m^3",
  bg: "green"
},]


export const smoothLineOptions = {
  chart: {
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  colors: ['rgba(255, 255, 255, 1)'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}
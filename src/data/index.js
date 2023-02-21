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
      opacity: 0.2,
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
  colors: ['#fff'],
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
import {generateData} from '../utils'

export const seriesHeatMap = [
  {
    name: 'Jan',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Feb',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Mar',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Apr',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'May',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Jun',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Jul',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Aug',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Sep',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  }
]

export const optionsHeatMap = {
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      enableShades: true,
      radius: 0,
      useFillColorAsStroke: true,
      colorScale: {
        ranges: [{
            from: -30,
            to: 5,
            name: 'low',
            color: '#00A100'
          },
          {
            from: 6,
            to: 20,
            name: 'medium',
            color: '#128FD9'
          },
          {
            from: 21,
            to: 45,
            name: 'high',
            color: '#FFB200'
          },
          {
            from: 46,
            to: 55,
            name: 'extreme',
            color: '#FF0000'
          }
        ]
      }
    }
  },
  chart: {
    toolbar: {
      show: false,
    },
    selection: {
      enabled: false, 
      show: false,
      type: 'x',
      fill: {
        color: '#24292e',
        opacity: 0.9
      },
      stroke: {
        width: 1,
        dashArray: 3,
        color: '#24292e',
        opacity: 0.4
      },
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    fontSize: '18px',
    color: "#fff",
    labels: {
      colors: "#fff",
      useSeriesColors: false
  },
  },
  stroke: {
    width: 1
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      align: 'right',
      minWidth: 0,
      maxWidth: 160,
      style: {
          colors: ["#fff"],
          fontSize: '15px',
      },
    }
  },
  xaxis: {
    labels: {
      show: false
    }
  }
}

export const optionsArea = {
  chart: {
    toolbar: {
      show: false,
    },
    selection: {
      enabled: false
    }
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    fontSize: '18px',
    color: "#fff",
    labels: {
      colors: "#fff",
      useSeriesColors: false
    },
  },
  states: {
    hover: {
        filter: {
            type: 'none',
        }
    },
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
    labels: {
      show: true,
      style: {
        colors: "white",
        fontSize: '18px',
      }
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
}

export const seriesPM = [{
  name: 'PM10',
  data: generateData(7, {min:10, max:100})
}, {
  name: 'PM2.5',
  data: generateData(7, {min:10, max:100})
}]

export const seriesPpm = [
  {
    name: 'NO2',
    data: generateData(7, {min:10, max:100})
  },
  {
    name: 'CO',
    data: generateData(7, {min:10, max:100})
  },
  {
    name: 'O3',
    data: generateData(7, {min:10, max:100})
  },
  {
    name: 'SO2',
    data: generateData(7, {min:10, max:100})
  },
]
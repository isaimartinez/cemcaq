import {generateData} from '../utils'


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

export const optionsHeatMap = (mode) => {
  return {
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
      color: mode === "Dark" ? '#fff' : '#000',
      labels: {
        colors: mode === "Dark" ? '#fff' : '#000',
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
            colors: [mode === "Dark" ? '#fff' : '#000'],
            fontSize: '15px',
        },
      }
    },
    xaxis: {
      labels: {
        show: false,
        style: {
          colors: "white",
          fontSize: '15px',
        }
      }
    }
  }
}

  export const optionsArea =(mode) => {
   return {
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
      color: mode === "Dark" ? '#fff' : '#000',
      labels: {
        colors: mode === "Dark" ? '#fff' : '#000',
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
          colors: mode === "Dark" ? '#fff' : '#000',
          fontSize: '15px',
        }
      }
    },
    yaxis: {
      labels: {
        style:{
          colors: mode === "Dark" ? '#fff' : '#000'
        }
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }
}

export const optionsRadar = {
  chart: {
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1
    }
  },
  stroke: {
    width: 2
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
  fill: {
    opacity: 0.1
  },
  markers: {
    size: 0
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    labels: {
      show: true,
      style: {
        colors: "white",
        fontSize: '10px',
      }
    }
  },
  yaxis: {
    labels: {
      style:{
        colors: "white"
      }
    }
  }
}


// =============== SERIES ===============
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

export const seriesPM = [{
  name: 'PM10',
  data: generateData(7, {min:10, max:100})
}, {
  name: 'PM2.5',
  data: generateData(7, {min:10, max:100})
}]

export const seriesHistVsPred = [{
  name: 'Historical',
  data: generateData(14, {min:5, max:50})
}, {
  name: 'Prediction',
  data: generateData(14, {min:5, max:50})
}]

export const seriesActualVsPred3 = [{
  name: 'Actual Max_PM10',
  data: generateData(21, {min:5, max:50})
},{
  name: 'Actual Min_PM10',
  data: generateData(21, {min:5, max:50})
},{
  name: 'Actual Mean_PM10',
  data: generateData(21, {min:5, max:50})
},{
  name: 'Predict Max_PM10',
  data: generateData(21, {min:5, max:50})
},{
  name: 'Predict Min_PM10',
  data: generateData(21, {min:5, max:50})
},{
  name: 'Predict Mean_PM10',
  data: generateData(21, {min:5, max:50})
},

]



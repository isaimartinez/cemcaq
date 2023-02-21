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
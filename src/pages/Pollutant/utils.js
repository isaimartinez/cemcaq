import { getDataByStation, parseDateTime } from "../../utils/dataParser"
export const parseActualVsPred = (station, pollutant) => {
  const data = getDataByStation(station, pollutant)
  let serie = [];
  let dates = []
  for (var i = 0; i < data.length; i++) {
    var label = Object.keys(data[i])[0]; // Get the label of the current object
    var actualValue = data[i][label].map((item) => item.actual)
    var predictValue = data[i][label].map((item) => item.predict)
    serie.push({data: actualValue, name: label.slice(0, -4) + '_Actual'});
    serie.push({data: predictValue, name: label.slice(0, -4) + '_Predict'});
    if (i === data.length - 1) {
      dates = data[i][label].map((item) => item.datetime)
    }
  }
  let category = dates.map((obj) => {
    return parseDateTime(obj)
  })
  console.log("serie", serie)
  return [serie, category]
}
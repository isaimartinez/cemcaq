import data from '../csv/output.json'

export const getDataByStation = (station, pollutant) => {
  let x = data.filter(item => 
      {
        let i = item[station]
        let isPollulant = true
        if(i) {
          let flag = checkKey(i[0], pollutant)
          isPollulant = flag
        }
        return Object.keys(item).indexOf(station) !== -1 && isPollulant
      }
  
    )
  if(x.length > 0) return x[0][station]
  else return []
}
const checkKey = (json, pollutant) => {
  var key = Object.keys(json)[0]; // Get the key of the object
  return key.includes(pollutant); // Check if the key includes 'PM25'
}

export const parseDateTime = (date) => {
  const inputDateString = date
  const [dateStr, timeStr] = inputDateString.split(' ');
  const [year, month, day] = dateStr.split('-');
  const [hours, minutes] = timeStr.split(':');
  const dateObj = new Date(`${year}`,month-1,day,hours,minutes,0);
  const outputDateString = new Date(dateObj.toString().split('GMT')[0]+' UTC').toISOString()
  return outputDateString
}
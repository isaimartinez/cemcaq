import data from '../csv/output.json'

export const getDataByStation = (station, pollutant) => {
  console.log("entra", station, pollutant)
  let x = data.filter(item => 
      {
        return Object.keys(item).indexOf(station) !== -1
      }
  
    )
  console.log("sale")
  if(x) return x[0][station]
  else return []
}

export const parseDateTime = (date) => {
  // const inputDateString = date
  // const [dateStr, timeStr] = inputDateString.split(' ');
  // const [day, month, year] = dateStr.split('-');
  // const [hours, minutes] = timeStr.split(':');
  // const dateObj = new Date(`20${year}`,month-1,day,hours,minutes,0);
  // const outputDateString = new Date(dateObj.toString().split('GMT')[0]+' UTC').toISOString()
  // return outputDateString
  const timestamp = new Date(date);
  const isoTimestamp = timestamp.toISOString();
  return isoTimestamp
}
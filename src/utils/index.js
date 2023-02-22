
export const getGradient = (bg) => {
  switch (bg) {
    case "green":
      return 'from-green-600 to-green-700'
    case "yellow":
      return 'from-yellow-600 to-yellow-700'  
    case "orange":
      return 'from-orange-600 to-orange-700' 
    case "red":
      return 'from-red-600 to-red-700' 
  }
}

export const generateData = (l, range) => {
    const {max, min} = range
    let data = []
  for (let index = 0; index < l; index++) {
    const x = Math.floor(Math.random() * (max - min + 1) + min)
    data.push(x)
  }
  return data
}
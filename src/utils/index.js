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

export const getBg = (bg) => {
  switch (bg) {
    case "green":
      return 'bg-green-600'
    case "yellow":
      return 'bg-yellow-600'  
    case "orange":
      return 'bg-orange-600' 
    case "red":
      return 'bg-red-600' 
  }
}


export const getDarkerGradient = (bg) => {
  switch (bg) {
    case "green":
      return 'from-green-500 to-green-500'
    case "yellow":
      return 'from-yellow-500 to-yellow-500'  
    case "orange":
      return 'from-orange-500 to-orange-500' 
    case "red":
      return 'from-red-500 to-red-500' 
  }
}

export const getContaminantListGradient = (key, x) => {
  if (key.includes('pm')) {
    return getUgmGradient(x)
  } else {
    return getPpmGradient(x)
  }
}

export const getUgmGradient = (x) => {
    if (x < 20) {
      return 'from-green-600 to-green-700';
    } else if (x >= 20 && x < 25) {
      return 'from-yellow-600 to-yellow-700';
    } else if (x >= 25 && x < 30) {
      return 'from-orange-600 to-orange-700';
    } else {
      return 'from-red-600 to-red-700'; 
    }
}

export const getPpmGradient = (x) => {
  console.log("hey")
    if (x < 0.09) {
      return 'from-green-600 to-green-700';
    } else if (x >= 0.09 && x < 0.5) {
      return 'from-yellow-600 to-yellow-700';
    } else if (x >= 0.5 && x < 2) {
      return 'from-orange-600 to-orange-700';
    } else {
      return 'from-red-600 to-red-700'; 
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

export const generateNumber = (max, min) => {
  const randomNum = Math.random() * (max - min) + min;
  return Number(randomNum.toFixed(3));
}
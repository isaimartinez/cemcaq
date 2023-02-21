
export const getGradient = (bg) => {
  switch (bg) {
    case "green":
      return 'from-green-400 to-green-500'
    case "yellow":
      return 'from-yellow-400 to-yellow-500'  
    case "orange":
      return 'from-orange-400 to-orange-500' 
    case "red":
      return 'from-red-400 to-red-500' 
  }
}
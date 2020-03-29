// find quadrant for given x,y in cartesian coordinate system

const quadrant = (x, y) => {
  let result = ''
  if (x > 0 && y > 0) result = 'lies in i quadrant ( + + )'
  else if (x < 0 && y > 0) result = 'lies in ii quadrant ( - + )'
  else if (x < 0 && y < 0) result = 'lies in iii quadrant ( - - )'
  else if (x > 0 && y < 0) result = 'lies in iv quadrant ( + - )'

  return result
}

console.log(quadrant(25, -15))
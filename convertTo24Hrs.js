// convert to 24 hrs

let time12 = '07.30PM'

const convert24 = timeStr => {
  let formattedTime = timeStr.substr(0, 5)
  if (timeStr.search('PM') != -1) {
    let hour = timeStr.substr(0, 2)
    hour = parseInt(hour) + 12
    formattedTime = hour + timeStr.substr(2, 3)
  }

  return formattedTime
}

console.log(convert24(time12))

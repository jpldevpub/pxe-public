function getQuickPrice () {
  var x, y, min, max, z, a, b, c, text

  // Get the value of the input field with id="numb"
  x = document.getElementById('miles').value
  y = x * 1.8
  min = y * 0.9
  max = y * 1.1
  z = Math.round(min / 10) * 10
  a = Math.round(max / 10) * 10
  b = Math.round(min / 10) * 20
  c = Math.round(max / 10) * 20

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 1000) {
    text = 'Input invalid. Please enter the distance in miles'
  } else if (z < 121) {
    text = 'We estimate that this will cost somewhere between £120 and £150 <br> <br> To get a more accurate price, please use our online enquiry page to get live prices from our hauliers'
  } else {
    text = 'We estimate that this will cost somewhere between £' + (z) + ' and £' + (a) + ' <br> <br> To get a more accurate price, please use our online enquiry page to get live prices from our hauliers'
  }
  document.getElementById('demo').innerHTML = text
}

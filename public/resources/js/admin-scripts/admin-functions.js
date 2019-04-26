/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function displayDateAndTime (data) {
  var readable = moment(data).format('Do MMMM YYYY, h:mm:ss a')
  return document.write(readable)
}

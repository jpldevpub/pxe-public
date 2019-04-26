/* eslint-disable no-unused-vars */
function hideToggles () {
  document.getElementById('curtains').style.display = 'none'
  document.getElementById('flats').style.display = 'none'
  document.getElementById('JPL').style.display = 'none'
  document.getElementById('full-enquiry').style.display = 'none'
  // document.getElementById('collPostcode').style.display = 'none'
  // document.getElementById('delPostcode').style.display = 'none'
}

function hideSomeToggles () {
  document.getElementById('curtains').style.display = 'none'
  document.getElementById('flats').style.display = 'none'
  document.getElementById('JPL').style.display = 'none'
  // document.getElementById('collPostcode').style.display = 'none'
  // document.getElementById('delPostcode').style.display = 'none'
}

function fullEnquiryMulti () {
  showFullEnquiry()
  anchorFullEnquiry()
}

function showFullEnquiry () {
  document.getElementById('full-enquiry').style.display = 'block'
}

function anchorFullEnquiry (e) {
  document.getElementById('full-enquiry').scrollIntoView(true)
  // e.preventDefault()
}

function switchCase (value) {
  switch (value) {
    case '13.6m Curtain Sider':
      document.getElementById('curtains').style.display = 'block'
      document.getElementById('flats').style.display = 'none'
      document.getElementById('JPL').style.display = 'none'
      document.getElementById('everything').style.display = 'block'
      document.getElementById('trailers').style.display = 'block'
      document.getElementById('wait').style.display = 'block'
      break
    case '13.6m Megatrailer':
      document.getElementById('curtains').style.display = 'block'
      document.getElementById('flats').style.display = 'none'
      document.getElementById('JPL').style.display = 'none'
      document.getElementById('everything').style.display = 'block'
      document.getElementById('trailers').style.display = 'block'
      document.getElementById('wait').style.display = 'block'
      break
    case '13.6m Flatbed':
      document.getElementById('flats').style.display = 'block'
      document.getElementById('curtains').style.display = 'none'
      document.getElementById('JPL').style.display = 'none'
      document.getElementById('everything').style.display = 'block'
      document.getElementById('trailers').style.display = 'block'
      document.getElementById('wait').style.display = 'block'
      break
    case 'Other option':
      document.getElementById('flats').style.display = 'none'
      document.getElementById('curtains').style.display = 'none'
      document.getElementById('JPL').style.display = 'block'
      document.getElementById('trailerOptions').style.display = 'block'
      document.getElementById('everything').style.display = 'none'
      document.getElementById('trailers').style.display = 'none'
      document.getElementById('wait').style.display = 'none'
      break
    default:
      alert('Try Again')
  }
}

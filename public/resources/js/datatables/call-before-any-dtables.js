
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
$('#openEnq').one('click', () => {
  $('#custEnq').hide('slow', openEnquiries())
  $('#custBook').hide()
  $('#custQuo').hide()
  $('#custRes').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#openBook').one('click', () => {
  $('#custBook').hide('slow', openBookings())
  $('#custEnq').hide()
  $('#custQuo').hide()
  $('#custRes').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#openQuo').one('click', () => {
  $('#custQuo').hide('slow', openQuotations())
  $('#custEnq').hide()
  $('#custBook').hide()
  $('#custRes').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#openRes').one('click', () => {
  $('#custRes').hide('slow', openRes())
  $('#custEnq').hide()
  $('#custBook').hide()
  $('#custQuo').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#openEnq').click(() => {
  $('#custEnq').toggle('slow')
  $('#custBook').hide()
  $('#custQuo').hide()
  $('#custRes').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#closeEnq').click(() => {
  $('#custEnq').toggle('slow')
  $('#custBook').hide()
  $('#custQuo').hide()
  $('#custRes').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#openBook').click(() => {
  $('#custBook').toggle('slow')
  $('#custEnq').hide()
  $('#custQuo').hide()
  $('#custRes').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#closeBook').click(() => {
  $('#custBook').toggle('slow')
  $('#custEnq').hide()
  $('#custQuo').hide()
  $('#custRes').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#openQuo').click(() => {
  $('#custQuo').toggle('slow')
  $('#custEnq').hide()
  $('#custBook').hide()
  $('#custRes').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#closeQuo').click(() => {
  $('#custQuo').toggle('slow')
  $('#custEnq').hide()
  $('#custBook').hide()
  $('#custRes').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#openRes').click(() => {
  $('#custRes').toggle('slow')
  $('#custEnq').hide()
  $('#custBook').hide()
  $('#custQuo').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$('#closeRes').click(() => {
  $('#custRes').toggle('slow')
  $('#custEnq').hide()
  $('#custBook').hide()
  $('#custQuo').hide()
  $('#custPay').hide()
  $('#custBlank').hide()
})

$(() => {
  $('#openPay').click(() => {
    $('#custPay').toggle()
    $('#custEnq').hide()
    $('#custBook').hide()
    $('#custQuo').hide()
    $('#custRes').hide()
    $('#custBlank').hide()
  })
})

$(() => {
  $('#openBlank').click(() => {
    $('#custBlank').toggle()
    $('#custEnq').hide()
    $('#custBook').hide()
    $('#custQuo').hide()
    $('#custRes').hide()
    $('#custPay').hide()
  })
})

$('#extraFeatures-1').click(() => {
  $('#custEnq .buttonMoon').toggle()
})

$(() => {
  $('#extraFeatures-2').click(() => {
    $('#features2').toggle()
  })
})

$(() => {
  $('#extraFeatures-3').click(() => {
    $('#features3').toggle()
  })
})

$(() => {
  $('#extraFeatures-4').click(() => {
    $('#features4').toggle()
  })
})

$(() => {
  $(document).ready(() => {
    // eslint-disable-next-line no-unused-expressions
    $('#custEnq').hide()
    $('#custBook').hide()
    $('#custQuo').show()
    $('#custRes').hide()
    $('#custPay').hide()
    $('#custBlank').hide()
  })
})

function isProvided (data) {
  if (data) {
    return data
  } else {
    return '<i class="fas fa-times"></i>'
  }
}

function isRequired (boolean) {
  if (boolean) {
    // return ' Required'
    return '<i class="fas fa-check"></i>'
  } else {
    // return ' Not Required'
    return '<i class="fas fa-times"></i>'
  }
}

function displayDate (data, type) {
  if (type === 'display') {
    if (data) {
      var mDate = moment(data)
      data = (mDate && mDate.isValid()) ? mDate.format('Do MMMM YYYY') : ''
    }
  }
  return data
}

function displayDateAndTime (data, type) {
  if (type === 'display') {
    if (data) {
      var mDate = moment(data)
      data = (mDate && mDate.isValid()) ? mDate.format('Do MMMM YYYY @ hh:mma') : ''
    }
  }
  return data
}

function adminDate (data, type) {
  if (type === 'display') {
    if (data) {
      var mDate = moment(data)
      data = (mDate && mDate.isValid()) ? mDate.format('DD/MM/YY') : ''
    }
  }
  return data
}

function adminDateAndTime (data, type) {
  if (type === 'display') {
    if (data) {
      var mDate = moment(data)
      data = (mDate && mDate.isValid()) ? mDate.format('DD/MM/YY @hh:mma') : ''
    }
  }
  return data
}

function profilePic (url) {
  if (url) return `<img height='32px' width='32px' src='${url}'/>`
  else return '<i class="fas fa-times"></i>'
}

function convertNumToGBP (n) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currencyDisplay: 'symbol', currency: 'GBP' }).format(n)
}

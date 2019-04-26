/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function showStatusChangeModal (data) {
  $('#titleRef').text(`${data}`)
  $('#quoteIdValue').val(`${data}`)
  $('#status-modal').modal('show')
}
$(document).ready(() => {
  $('#admin-reservations-dt').DataTable({
    ajax: { url: '/admin/reservation-requests-dt', type: 'POST', dataType: 'json', data: (d) => { d._csrf = _csrf } },
    deferRender: true,
    language: { loadingRecords: 'Reservations will appear here...' },
    dom: "<'row'<'col-md-6'l><'#features2.col-md-6'Bf>>" +
      "<'row'<'col-md-6'><'col-md-6'>>" +
      "<'row'<'col-md-12't>><'row'<'col-md-12'ip>>",
    columns: [
      { data: null,
        title: 'Status:',
        orderable: false,
        fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
          let html
          switch (sData.quoteStatus) {
            case 'Quoted':
              html = `<button onclick='showStatusChangeModal(${sData.quoteID})', style='width:100%;opacity:unset;'class='btn btn-light btn-block'>
                    Quote Provided</button>`
              break
            case 'Booked':
              html = `<button onclick='showStatusChangeModal(${sData.quoteID})', style='width:100%;opacity:unset;'class='btn btn-primary btn-block'>
                    Booked</button>`
              break
            case 'Cancelled':
              html = `<button onclick='showStatusChangeModal(${sData.quoteID})', style='width:100%;opacity:unset;'class='btn btn-dark btn-block'>
                    Cancelled</button>`
              break
            case 'Reservation Requested':
              html = `<button onclick='showStatusChangeModal(${sData.quoteID})', style='width:100%;opacity:unset;'class='btn btn-success btn-block'>
                    Reserve NOW</button>`
              break
            case 'Trailers Unavailable':
              html = `<button onclick='showStatusChangeModal(${sData.quoteID})', style='width:100%;opacity:unset;'class='btn btn-danger btn-block'>
                    Trailer's Unavailable</button>`
              break
            case 'Reserved':
              html = `<button onclick='showStatusChangeModal(${sData.quoteID})', style='width:100%;opacity:unset;'class='btn btn-dark btn-block'>
                    Reserved With Haulier</button>`
              break
            default:
              html = `<div style="width: 100%" class='btn btn-danger btn-block'>Error (Contact Support)</div>`
              break
          }
          $(nTd).html(html)
        }
      },
      { data: 'updatedAt', type: 'datetime-moment', title: 'Last Update:', render: (x, t) => adminDateAndTime(x, t) },
      { data: 'createdAt', type: 'datetime-moment', title: 'Created:', render: (x, t) => adminDateAndTime(x, t) },
      { data: 'quoteID', title: 'Quote Ref:', render: (x) => isProvided(x) },
      { data: 'adminHandler', title: 'Quoted By:', render: (x) => isProvided(x) },
      { data: 'cusID', title: 'Customers ID:', render: (x) => isProvided(x) },
      { data: 'enquiryID', title: 'Enquiry ID:', render: (x) => isProvided(x) },
      { data: 'hauliersID', title: 'Hauliers ID:', render: (x) => isProvided(x) },
      { data: 'haulierHandlersName', title: 'Haulier Handler:', render: (x) => isProvided(x) },
      { data: 'haulierInternalRef', title: 'Haulier Internal Ref:', render: (x) => isProvided(x) },
      { data: 'quotedRate', title: 'Quote Rate:', render: (x) => convertNumToGBP(x) },
      { data: 'totalNet', title: 'Total Net:', render: (x) => convertNumToGBP(x) },
      { data: 'vatPrice', title: 'VAT:', render: (x) => convertNumToGBP(x) },
      { data: 'totalGross', title: 'Total Gross:', render: (x) => convertNumToGBP(x) },
      { data: 'extraInfo', title: 'Extra Info:', render: (x) => isProvided(x) }
    ],
    'order': [[2, 'desc']]
  })
})

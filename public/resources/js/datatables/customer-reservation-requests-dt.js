/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function openRes () {
  $(document).ready(() => {
    $('#customer-dt-reservation-requests').DataTable({
      ajax: { url: '/quotation/customer-dt-reservation-requests', type: 'POST', dataType: 'json', data: (d) => { d._csrf = _csrf } },
      deferRender: true,
      language: { loadingRecords: 'Reservations will appear here...' },
      dom: "<'row'<'col-md-6'l><'#features4.buttonMoon.col-md-6'Bf>><'row'<'col-md-6'><'col-md-6'>><'row'<'col-md-12't>><'row'<'col-md-12'ip>>",
      responsive: { details: { type: 'column', target: -1 } },
      columnDefs: [{ className: 'control', orderable: false, targets: -1 }],
      columns: [
        { data: null,
          orderable: false,
          title: 'Action Required',
          fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
            let html
            switch (sData.quoteStatus) {
              case 'Reservation Requested':
                html = `<button disabled style='width:100%;opacity: unset;'class='btn btn-warning btn-block'>Reservation Requested</button>`
                break
              case 'Trailers Unavailable':
                html = `<button disabled style='width:100%;opacity: unset;'class='btn btn-danger btn-block'>Trailer's Unavailable</button>`
                break
              case 'Reserved':
                html = `<form method="POST" action="/bookings/create"><input type="hidden" name="_csrf" value=${_csrf}></input><input type="hidden" name="quoteID" value=${sData.quoteID} step="any"></input><button type="submit" value="Submit" style="width: 100%" class='btn btn-success btn-block'> Reserved! Book Now!</button></form>`
                break
              case 'Started':
                html = `<form method="POST" action="/bookings/continue-booking"><input type="hidden" name="_csrf" value=${_csrf}></input><input type="hidden" name="quoteID" value=${sData.quoteID} step="any"></input><button type="submit" value="Submit" style="width: 100%" class='btn btn-success btn-block'> Started</button></form>`
                break
              default:
                html = `<div style="width: 100%" class='btn btn-danger btn-block'>Error (Contact Support)</div>`
                break
            }
            $(nTd).html(html)
          }
        },
        { data: 'hauilerFakeName', title: 'Provider By:', render: (x) => isProvided(x) },
        { data: 'quotedRate', title: 'Quote Price:', render: (x) => convertNumToGBP(x) },
        { data: 'createdAt', type: 'datetime-moment', title: 'Received:', render: (x, t) => displayDateAndTime(x, t) },
        { data: 'enquiryID', title: 'Quoted For Enquiry:', render: (x) => isProvided(x) },
        { data: 'extraInfo', title: 'Additional Info:', render: (x) => isProvided(x) },
        { data: 'quoteID', title: 'Quote Ref:', render: (x) => isProvided(x) },
        { data: null, defaultContent: '' } // View Details + Button
      ],
      order: [[1, 'desc']]
    })
  })
}

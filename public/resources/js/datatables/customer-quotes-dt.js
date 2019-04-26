/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function openQuotations () {
  $(document).ready(() => {
    $('#customer-quotes-dt').DataTable({
      ajax: { url: '/quotation/customer-quotes', type: 'POST', dataType: 'json', data: (d) => { d._csrf = _csrf } },
      responsive: { details: { type: 'column', target: -1 } },
      deferRender: true,
      language: { emptyTable: 'Quotes will appear here...', loadingRecords: 'Quotes will appear here...' },
      dom: "<'row'<'col-md-6'l><'#features3.buttonMoon.col-md-6'Bf>><'row'<'col-md-6'><'col-md-6'>><'row'<'col-md-12't>><'row'<'col-md-12'ip>>",
      columnDefs: [{ className: 'control', orderable: false, targets: -1 }],
      columns: [
        {
          data: null, // RESERVER TRAILER
          orderable: false,
          title: 'Action',
          fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
            var html = ''
            if (sData) html = `<form method="POST" action="/quotation/reserve"><input type="hidden" name="_csrf" value=${_csrf}></input><input type="hidden" name="quoteID" value=${sData.quoteID} step="any"></input><button type='submit' name='Submit' style="width: 100%" class="btn btn-secondary btn-block">Reserve Trailer</button></form>`
            else html = `<div style="width: 100%" class='btn btn-danger btn-block'>Error (Contact Support)</div>`
            $(nTd).html(html)
          }
        },
        { data: 'hauilerFakeName', title: 'Provided By:', render: (x) => isProvided(x) },
        { data: 'quotedRate', title: 'Quote Price:', render: (x) => convertNumToGBP(x) },
        { data: 'createdAt', title: 'Recieved:', type: 'datetime-moment', render: (x, t) => displayDate(x, t) },
        { data: 'enquiryID', title: 'Quoted For Enquiry:', render: (x) => isProvided(x) },
        { data: 'extraInfo', title: 'Additional Info:', render: (x) => isProvided(x) },
        { data: 'quoteID', title: 'Quote Ref:', render: (x) => isProvided(x) },
        { data: null, defaultContent: '' }// View Details + Button
      ],
      order: [[1, 'desc']]
    })
  })
}

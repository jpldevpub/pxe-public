/* eslint-disable no-undef */
$(document).ready(() => {
  $('#admin-enquiries-dt').DataTable({
    ajax: { url: '/enquiries/admin-enquiries/', type: 'POST', dataType: 'json', data: (d) => { d._csrf = _csrf } },
    dom: "<'row'<'col-md-6'l><'#features2.col-md-6'Bf>><'row'<'col-md-6'><'col-md-6'>><'row'<'col-md-12't>><'row'<'col-md-12'ip>>",
    language: { loadingRecords: 'Loading Enquiries...', emptyTable: 'No Enquiries to display' },
    deferRender: true,
    columns: [
      { data: null,
        title: 'Status:',
        orderable: false,
        defaultContent: '<i>N/A</i>',
        fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
          let html
          switch (sData.state) {
            case 0:
              html = `<form method="POST" action="/quotation/admin-create-quote"><input type="hidden" name="_csrf" value=${_csrf}></input><input type="hidden" name="enqID" value=${sData.enquiryID}></input><button type='submit' name='Submit' class="badge badge-info">Create Quote</button></form>`
              break
            case 1:
              html = `<form method="POST" action="/quotation/admin-create-quote"><input type="hidden" name="_csrf" value=${_csrf}></input><input type="hidden" name="enqID" value=${sData.enquiryID}></input><button type='submit' name='Submit' class="badge badge-info">Quote Again</button></form>`
              break
            case 2:
              html = `<form method="POST" action="/quotation/admin-create-quote"><input type="hidden" name="_csrf" value=${_csrf}></input><input type="hidden" name="enqID" value=${sData.enquiryID}></input><button type='submit' name='Submit' class="badge badge-info">Quote Again</button></form>`
              break
            case 3:
              html = `<form method="POST" action="/quotation/admin-create-quote"><input type="hidden" name="_csrf" value=${_csrf}></input><input type="hidden" name="enqID" value=${sData.enquiryID}></input><button type='submit' name='Submit' class="badge badge-info">Quote Again</button></form>`
              break
            default:
              html = `<div style="width: 100%" class='btn btn-danger btn-block'>Error (Contact Support)</div>`
              break
          }
          $(nTd).html(html)
        }
      },
      { data: 'enquiryID', title: 'Enquiry Ref:' },
      { data: 'collectionLocation', title: 'From:' },
      { data: 'deliveryLocation', title: 'To:' },
      { data: 'createdAt', 'title': 'Created:  ', type: 'datetime-moment', render: (x, t) => adminDateAndTime(x, t) },
      { data: 'updatedAt', title: 'Last Update:', type: 'datetime-moment', render: (x, t) => adminDateAndTime(x, t) },
      { data: 'tailLiftCollection', title: 'TLft Col:', render: (x) => isRequired(x) },
      { data: 'tailLiftDelivery', title: 'TLft Del:', render: (x) => isRequired(x) },
      { data: 'sheeting', title: 'Sheeting:', render: (x) => isRequired(x) },
      { data: 'goalPosts', title: 'Post/Pin:', render: (x) => isRequired(x) },
      { data: 'cusID', title: 'Cus Ref:' },
      { data: 'trailerType', title: 'Trl Type:' },
      { data: 'numOfTrailers', title: 'Trl No. Req:' },
      { data: 'collectionDate', title: 'Col Date:  ', type: 'datetime-moment', render: (x, t) => adminDate(x, t) },
      { data: 'deliveryDate', 'title': 'Del Date:  ', type: 'datetime-moment', render: (x, t) => adminDate(x, t) },
      { data: 'grossWeightKg', title: 'G-Weight:', render: (x) => { return (x + 'Kg') } },
      { data: 'loadDetails', title: 'Load Desc:', render: (x) => isProvided(x) }
    ],
    order: [[1, 'desc']]
  })
})

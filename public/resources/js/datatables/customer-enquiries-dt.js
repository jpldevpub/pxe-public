/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function openEnquiries () {
  $(document).ready(() => {
    $('#customer-enquiries-dt').DataTable({
      ajax: { url: '/enquiries/customer-history/', type: 'POST', dataType: 'json', data: (d) => { d._csrf = _csrf } },
      responsive: { details: { type: 'column', target: -1 } },
      deferRender: true,
      language: { loadingRecords: 'Enquiries will appear here...' },
      dom: "<'row'<'col-md-6'l><'#features1.buttonMoon.col-md-6'Bf>><'row'<'col-md-6'><'col-md-6'>><'row'<'col-md-12't>><'row'<'col-md-12'ip>>",
      columnDefs: [ { className: 'control', orderable: false, targets: -1 } ],
      columns: [
        { data: 'createdAt', type: 'datetime-moment', title: 'Created:', render: (x, t) => displayDateAndTime(x, t) },
        { data: 'collectionLocation', title: 'From:', render: (x) => isProvided(x) },
        { data: 'collectionDate', type: 'datetime-moment', title: 'Collection Date:', render: (x, t) => displayDate(x, t) },
        { data: 'deliveryLocation', title: 'To:', render: (x) => isProvided(x) },
        { data: 'deliveryDate', title: 'Delivery Date:', type: 'datetime-moment', render: (x, t) => displayDate(x, t) },
        { data: 'numOfTrailers', title: 'Number of Trailer\'s:', render: (x) => isProvided(x) },
        { data: 'trailerType', title: 'Trailer Type:', render: (x) => isProvided(x) },
        { data: 'goalPosts', title: 'Goal-Posts:', render: (x) => isRequired(x) },
        { data: 'sheeting', title: 'Sheeting:', render: (x) => isRequired(x) },
        { data: 'tailLiftCollection', title: 'Tail-Lift on \nCollection:', render: (x) => isRequired(x) },
        { data: 'tailLiftDelivery', title: 'Tail-Lift on \nDelivery:', render: (x) => isRequired(x) },
        { data: 'grossWeightKg', title: 'Gross Weight:', render: (x) => isProvided(x) },
        { data: 'loadDetails', title: 'Load Details:', render: (x) => isProvided(x) },
        { data: 'enquiryID', title: 'Enquiry Ref:', render: (x) => isProvided(x) },
        { data: null, defaultContent: '' } // View Details + Button
      ],
      order: [[1, 'desc']]
    })
  })
}

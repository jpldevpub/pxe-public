/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function openBookings () {
  $(document).ready(() => {
    $('#customer-live-bookings-dt').DataTable({
      ajax: { url: '/bookings/customer-bookings', type: 'POST', dataType: 'json', data: (d) => { d._csrf = _csrf } },
      responsive: { details: { type: 'column', target: -1 } },
      deferRender: true,
      language: { loadingRecords: 'Bookings will appear here...' },
      dom: "<'row'<'col-md-6'l><'#features2.buttonMoon.col-md-6'Bf>><'row'<'col-md-6'><'col-md-6'>><'row'<'col-md-12't>><'row'<'col-md-12'ip>>",
      columnDefs: [ { className: 'control', orderable: false, targets: -1 } ],
      columns: [
        { data: 'createdAt', title: 'Created:', type: 'datetime-moment', render: (x, t) => displayDateAndTime(x, t) },
        { data: 'bookingStatus', title: 'Status:', render: (x) => isProvided(x) },
        { data: 'trailerType', title: 'Trailer Type:', render: (x) => isProvided(x) },
        { data: 'collectionLocation', title: 'From:', render: (x) => isProvided(x) },
        { data: 'colFullAdd', title: 'Full Collection Address:', render: (x) => isProvided(x) },
        { data: 'deliveryLocation', title: 'To:', render: (x) => isProvided(x) },
        { data: 'delFullAdd', title: 'Full Delivery Address:', render: (x) => isProvided(x) },
        { data: 'totalGross', title: 'Total Cost:', render: (x) => convertNumToGBP(x) },
        { data: 'paidFor', title: 'Paid:', render: (x) => isRequired(x) },
        { data: 'customersHandlerName', title: 'Handler:', render: (x) => isProvided(x) },
        { data: 'numOfTrailers', title: 'Number of Trailer\'s:', render: (x) => isProvided(x) },
        { data: 'grossWeightKg', title: 'Gross Weight:', render: (x) => { return (x + 'Kg') } },
        { data: 'tailLiftCollection', title: 'Tail-Lift on \nCollection:', render: (x) => isRequired(x) },
        { data: 'tailLiftDelivery', title: 'Tail-Lift on \nDelivery:', render: (x) => isRequired(x) },
        { data: 'sheeting', title: 'Sheeting:', render: (x) => isRequired(x) },
        { data: 'goalPosts', title: 'Goal-Posts:', render: (x) => isRequired(x) },
        { data: 'loadDetails', title: 'Load Details:', render: (x) => isProvided(x) },
        { data: 'extraQuoteInfo', title: 'Quote Note\'s:', render: (x) => isProvided(x) },
        { data: 'collectionDate', title: 'Collection Date:', type: 'datetime-moment', render: (x, t) => displayDate(x, t) },
        { data: 'collectionRef', title: 'Collection Ref:', render: (x) => isProvided(x) },
        { data: 'collectionContact', title: 'Collection Contact:', render: (x) => isProvided(x) },
        { data: 'collectionInstructions', title: 'Collection Notes:', render: (x) => isProvided(x) },
        { data: 'deliveryDate', title: 'Delivery Date:', type: 'datetime-moment', render: (x, t) => displayDate(x, t) },
        { data: 'deliveryRef', title: 'Delivery Ref:', render: (x) => isProvided(x) },
        { data: 'deliveryContact', title: 'Delivery Contact:', render: (x) => isProvided(x) },
        { data: 'deliveryInstructions', title: 'Delivery Note\'s', render: (x) => isProvided(x) },
        { data: 'bookingID', title: 'Booking Ref:' },
        { data: null, defaultContent: '' } // View Details + Button
      ],
      'order': [[1, 'desc']]
    })
  })
}

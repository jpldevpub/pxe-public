/* eslint-disable no-undef */
$(document).ready(() => {
  $('#admin-customers-dt').DataTable({
    ajax: { url: '/user/admin-customer-dt', type: 'POST', dataType: 'json', data: (d) => { d._csrf = _csrf } },
    language: { loadingRecords: 'Customers will appear here...' },
    deferRender: true,
    columns: [
      { data: null,
        title: 'Action',
        orderable: false,
        defaultContent: '<i>N/A</i>',
        fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
          var data = JSON.stringify(sData)
          var html = `<button onclick='editCustomerModal(${data})', style="margin: 2px auto;" class="badge badge-light">Edit/View/Delete</button>`
          $(nTd).html(html)
        }
      },
      { data: 'profilePicUri', orderable: false, title: 'Pic', render: (x) => profilePic(x) },
      { data: 'cusID', title: 'ID:', render: (x) => isProvided(x) },
      { data: 'title', title: 'Title:', render: (x) => isProvided(x) },
      { data: 'firstName', title: 'Name:', render: (x) => isProvided(x) },
      { data: 'surname', title: 'Surname:', render: (x) => isProvided(x) },
      { data: 'email', title: 'Email:', render: (x) => isProvided(x) },
      { data: 'vip', orderable: false, title: 'VIP?', render: (x) => isRequired(x) },
      { data: 'creditLimit', title: 'Cred-Limit:', render: (x) => isProvided(x) },
      { data: 'admin', orderable: false, title: 'Admin?', render: (x) => isRequired(x) },
      { data: 'addr1', title: 'Addr 1:', render: (x) => isProvided(x) },
      { data: 'addr2', title: 'Addr 2:', render: (x) => isProvided(x) },
      { data: 'addr3', title: 'Addr 3:', render: (x) => isProvided(x) },
      { data: 'townCity', title: 'Town/City', render: (x) => isProvided(x) },
      { data: 'postcode', title: 'Postcode:', render: (x) => isProvided(x) },
      { data: 'country', title: 'Country', render: (x) => isProvided(x) },
      { data: 'companyName', title: 'Company Name:', render: (x) => isProvided(x) },
      { data: 'createdAt', title: 'Created On:', render: (x, t) => adminDate(x, t) },
      { data: 'updatedAt', title: 'Updated On:', render: (x, t) => adminDate(x, t) },
      { data: 'mobileContact', title: 'Mobile:', render: (x) => isProvided(x) },
      { data: 'landlineContact', title: 'Landline:', render: (x) => isProvided(x) },
      { data: 'fbID', title: 'FBook:', render: (x) => isProvided(x) },
      { data: 'googleID', title: 'Google:', render: (x) => isProvided(x) },
      { data: 'mobileNotifications', orderable: false, title: 'Mob Updates:', render: (x) => isRequired(x) }
    ],
    'order': [[1, 'desc']]
  })
})
// eslint-disable-next-line no-unused-vars
function editCustomerModal (cus) {
  if (cus.vip === true) { $('#vip').prop('checked', true) } else { $('#vip').prop('checked', false) }
  if (cus.admin === true) { $('#admin').prop('checked', true) } else { $('#admin').prop('checked', false) }
  if (cus.mobileNotifications) { $('#mobileNotifications').prop('checked', true) } else { $('#mobileNotifications').prop('checked', false) }
  $('#cusID').val(cus.cusID)
  $('#cusID2').val(cus.cusID)
  $('#cusIDText').val(cus.cusID)
  $('#fbID').val(cus.fbID)
  $('#googleID').val(cus.googleID)
  $('#title').val(cus.title)
  $('#firstName').val(cus.firstName)
  $('#surname').val(cus.surname)
  $('#creditLimit').val(cus.creditLimit)
  $('#createdAt').val(cus.createdAt)
  $('#updatedAt').val(cus.updatedAt)
  $('#companyName').val(cus.companyName)
  $('#addr1').val(cus.addr1)
  $('#addr2').val(cus.addr2)
  $('#addr3').val(cus.addr3)
  $('#postcode').val(cus.postcode)
  $('#country').val(cus.country)
  $('#email').val(cus.email)
  $('#mobileContact').val(cus.mobileContact)
  $('#profilePicUri').val(cus.profilePicUri)
  $('#landlineContact').val(cus.landlineContact)
  $('#townCity').val(cus.townCity)
  $('#edit-customer').modal('show')
}

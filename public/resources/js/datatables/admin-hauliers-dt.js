/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
$(document).ready(() => {
  $('#admin-hauliers').DataTable({
    ajax: { url: '/hauliers/admin-hauliers', type: 'POST', dataType: 'json', data: function (d) { d._csrf = _csrf } },
    deferRender: true,
    language: { loadingRecords: 'Loading Hauliers...', emptyTable: 'No Hauliers to display' },
    dom: "<'row'<'col-md-6'l><'#features2.col-md-6'Bf>><'row'<'col-md-6'><'col-md-6'>><'row'<'col-md-12't>><'row'<'col-md-12'ip>>",
    columns: [
      { data: null,
        title: 'Action:',
        orderable: false,
        defaultContent: '<i>N/A</i>',
        fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
          var data = JSON.stringify(sData)
          var html = `<button onclick='editHaulierModal(${data})', class="badge badge-light">Edit/View</button>`
          $(nTd).html(html)
        }
      },
      {
        data: null,
        title: 'Map View:',
        orderable: false,
        defaultContent: '<i>N/A</i>',
        fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
          let html
          if (sData.lat) {
            html = `<a href='https://maps.google.com/?q=${sData.lat},${sData.long}' class='fas fa-map-marked-alt' style='text-center' target='_blank'></a>`
            $(nTd).html(html)
          } else {
            html = `<a href='#' class='fas fa-times' style='text-center'></a>`
            $(nTd).html(html)
          }
        }
      },
      { data: 'haulierID', title: 'ID:', render: (x) => isProvided(x) },
      { data: 'email', title: 'Email:', render: (x) => isProvided(x) },
      { data: 'tel', title: 'Tel:', render: (x) => isProvided(x) },
      { data: 'contactName', title: 'Cont Name:', render: (x) => isProvided(x) },
      { data: 'companyName', title: 'Company Name:', render: (x) => isProvided(x) },
      { data: 'addr1', title: 'Addr 1:', render: (x) => isProvided(x) },
      { data: 'addr2', title: 'Addr 2:', render: (x) => isProvided(x) },
      { data: 'addr3', title: 'Addr 3:', render: (x) => isProvided(x) },
      { data: 'townCity', title: 'Town/City:', render: (x) => isProvided(x) },
      { data: 'county', title: 'County:', render: (x) => isProvided(x) },
      { data: 'postcode', title: 'Postcode:', render: (x) => isProvided(x) },
      { data: 'createdAt', title: 'Created:', type: 'datetime-moment', render: (x, t) => adminDateAndTime(x, t) },
      { data: 'updatedAt', title: 'Updated:', type: 'datetime-moment', render: (x, t) => adminDateAndTime(x, t) },
      { data: 'srvRating', title: 'Rating:', render: (x) => isProvided(x) },
      { data: 'svcExpress', title: 'S-Express:', render: (x) => isRequired(x) },
      { data: 'svcPalletline', title: 'S-Palletline:', render: (x) => isRequired(x) },
      { data: 'svcGroupage', title: 'S-Groupage:', render: (x) => isRequired(x) },
      { data: 'svcFullload', title: 'S-Full-Load:', render: (x) => isRequired(x) },
      { data: 'svcAbnormal', title: 'S-Abnormal:', render: (x) => isRequired(x) },
      { data: 'svcContainer', title: 'S-Container:', render: (x) => isRequired(x) },
      { data: 'svcHiab', title: 'S-Hiab:', render: (x) => isRequired(x) },
      { data: 'vehExpress', title: 'V-Express:', render: (x) => isRequired(x) },
      { data: 'vehCurtainside', title: 'V-Curtainside:', render: (x) => isRequired(x) },
      { data: 'vehFlatbed', title: 'V-Flatbed:', render: (x) => isRequired(x) },
      { data: 'vehAbnormal', title: 'V-Abnormal:', render: (x) => isRequired(x) },
      { data: 'vehContainer', title: 'V-Container:', render: (x) => isRequired(x) },
      { data: 'vehCraneage', title: 'V-Craneage:', render: (x) => isRequired(x) },
      { data: 'comments', title: 'Comments:', render: (x) => isProvided(x) },
      { data: 'operatingArea', title: 'Op Area:', render: (x) => isProvided(x) },
      { data: 'addedBy', title: 'Added By:', render: (x) => isProvided(x) },
      { data: 'verified', title: 'Verified:', render: (x) => isRequired(x) }
    ],
    'order': [[1, 'desc']]
  })
})

function editHaulierModal (haulierData) {
  if (haulierData.svcExpress === true) { $('#svcExpress').prop('checked', true) } else { $('#svcExpress').prop('checked', false) }
  if (haulierData.svcPalletline === true) { $('#svcPalletline').prop('checked', true) } else { $('#svcPalletline').prop('checked', false) }
  if (haulierData.svcGroupage === true) { $('#svcGroupage').prop('checked', true) } else { $('#svcGroupage').prop('checked', false) }
  if (haulierData.svcFullload === true) { $('#svcFullload').prop('checked', true) } else { $('#svcFullload').prop('checked', false) }
  if (haulierData.svcAbnormal === true) { $('#svcAbnormal').prop('checked', true) } else { $('#svcAbnormal').prop('checked', false) }
  if (haulierData.svcContainer === true) { $('#svcContainer').prop('checked', true) } else { $('#svcContainer').prop('checked', false) }
  if (haulierData.svcHiab === true) { $('#svcHiab').prop('checked', true) } else { $('#svcHiab').prop('checked', false) }
  if (haulierData.vehExpress === true) { $('#vehExpress').prop('checked', true) } else { $('#vehExpress').prop('checked', false) }
  if (haulierData.vehCurtainside) { $('#vehCurtainside').prop('checked', true) } else { $('#vehCurtainside').prop('checked', false) }
  if (haulierData.vehFlatbed === true) { $('#vehFlatbed').prop('checked', true) } else { $('#vehFlatbed').prop('checked', false) }
  if (haulierData.vehAbnormal === true) { $('#vehAbnormal').prop('checked', true) } else { $('#vehAbnormal').prop('checked', false) }
  if (haulierData.vehContainer === true) { $('#vehContainer').prop('checked', true) } else { $('#vehContainer').prop('checked', false) }
  if (haulierData.vehCraneage === true) { $('#vehCraneage').prop('checked', true) } else { $('#vehCraneage').prop('checked', false) }
  if (haulierData.verified === true) { $('#verified').prop('checked', true) } else { $('#verified').prop('checked', false) }
  $('#haulierID').val(haulierData.haulierID)
  $('#companyName').val(haulierData.companyName)
  $('#addr1').val(haulierData.addr1)
  $('#addr2').val(haulierData.addr2)
  $('#addr3').val(haulierData.addr3)
  $('#area').val(haulierData.area)
  $('#postcode').val(haulierData.postcode)
  $('#country').val(haulierData.country)
  $('#email').val(haulierData.email)
  $('#tel').val(haulierData.tel)
  $('#contactName').val(haulierData.contactName)
  $('#townID').val(haulierData.townID)
  $('#countyID').val(haulierData.countyID)
  $('#lat').val(haulierData.lat)
  $('#long').val(haulierData.long)
  $('#areaID').val(haulierData.areaID)
  $('#srvRating').val(haulierData.srvRating)
  $('#comments').val(haulierData.comments)
  $('#operatingArea').val(haulierData.operatingArea)
  $('#edit-haulier').modal('show')
  $('#county').html(haulierData.county)
  $('#townCity').html(haulierData.townCity)
}

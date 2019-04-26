$(document).ready(function () {
  var counter = 0
  $('#addrow').on('click', function () {
    var newRow = $('<tr>')
    var cols = '';

    cols += '<td><select class="form-control" id="TrailerType" onchange="switchCase(value)" required="true"<option hidden="" value="">What type of vehicle do you require?</option><option value="13.6m Flatbed">13.6m Flatbed trailer</option><option value="13.6m Curtain Sider">13.6m Curtain Sided trailer</option><option value="13.6m Megatrailer">13.6m Megatrailer</option>name="trailerType' + counter + '"/></select> </td>'
    cols += '<td><input class="form-control" style="width: 100%;" type="number" value="1" required="true"name="numOfTrailers' + counter + '"/></td>'
    cols += '<td><input class="form-control" style="width: 100%;" type="number" placeholder="e.g - for 3.2 Tonnes Enter 3200" required="true" name="grossWeightKg' + counter + '"/></td>'

    cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>'
    newRow.append(cols)
    $('table.order-list').append(newRow)
    counter++
  })
  $('table.order-list').on('click', '.ibtnDel', function (event) {
    $(this).closest('tr').remove()       
    counter -= 1
  })

})

function calculateRow (row) {
  var price = +row.find('input[name^="price"]').val()

}

function calculateGrandTotal () {
  var grandTotal = 0
  $('table.order-list').find('input[name^="price"]').each(function () {
    grandTotal += +$(this).val()
  })
  $('#grandtotal').text(grandTotal.toFixed(2))
}
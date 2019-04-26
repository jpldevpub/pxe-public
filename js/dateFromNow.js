'use strict'
// eslint-disable-next-line no-undef
jQuery(document).ready(function ($) {
  var dateToday = new Date()
  var collectDate = $('#collectDate').datepicker({
    changeYear: true,
    changeMonth: true,
    minDate: dateToday,
    dateFormat: 'dd/mm/yy ',
    onSelect: function (selectedDate) {
      var option = this.id === 'from' ? 'minDate' : 'maxDate'
      var instance = $(this).data('datepicker')
      var date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings)
      collectDate.not(this).datepicker('option', option, date)
    }
  })

  var deliverDate = $('#deliverDate').datepicker({
    changeYear: true,
    changeMonth: true,
    minDate: dateToday,
    dateFormat: 'dd/mm/yy ',
    onSelect: function (selectedDate) {
      var option = this.id === 'from' ? 'minDate' : 'maxDate'
      var instance = $(this).data('datepicker')
      var date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings)
      deliverDate.not(this).datepicker('option', option, date)
    }
  })
})

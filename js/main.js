/* eslint-disable no-undef */
'use strict'
jQuery(document).ready(function ($) {
  $(window).on('load', () => {
    $('.loaded').fadeOut()
    $('.preloader').delay(200).fadeOut('slow')
  })
  /* ---------------------------------------------*
       * Mobile menu
       --------------------------------------------- */
  $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 40)
        }, 1000)
        if ($('.navbar-toggle').css('display') !== 'none') {
          $(this).parents('.container').find('.navbar-toggle').trigger('click')
        }
        return false
      }
    }
  })
  $('body').scrollspy({
    target: '.navbar',
    offset: 160
  })
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('.scrollup').fadeIn('slow')
    } else {
      $('.scrollup').fadeOut('slow')
    }
  })
  $('.scrollup').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000)
    return false
  })
})

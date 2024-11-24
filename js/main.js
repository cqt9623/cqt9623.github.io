jQuery(document).ready(function ($) {

  'use strict';
  
 

  $(function () {
    $(".item").slice(0, 6).show(); // select the first ten
    $("#load").click(function (e) { // click event for load more
      e.preventDefault();
      $(".item:hidden").slice(0, 3).show(); // select next 10 hidden divs and show them
      if ($(".item:hidden").length == 0) { // check if any hidden divs still exist
        alert("No more 😘😘 SoRrY 😢😢. wait till next time!!"); // alert if there are none left
      }
    });
  });



  // on click event on all anchors with a class of scrollTo
  $('a.scrollTo').on('click', function () {

    // data-scrollTo = section scrolling to name
    var scrollTo = $(this).attr('data-scrollTo');


    // toggle active class on and off. added 1/24/17
    $("a.scrollTo").each(function () {
      if (scrollTo == $(this).attr('data-scrollTo')) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });


    // animate and scroll to the sectin 
    $('body, html').animate({

      // the magic - scroll to section
      "scrollTop": $('#' + scrollTo).offset().top
    }, 1000);
    return false;

  })


  $(".menu-icon").click(function () {
    $(this).toggleClass("active");
    $(".overlay-menu").toggleClass("open");
  });

});


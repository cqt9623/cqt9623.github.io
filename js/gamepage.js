jQuery(document).ready(function ($) {
  'use strict';

  // Show initial items and manage "Load More" functionality
  $(function () {
    $(".item").slice(0, 6).show(); // Show the first 6 items
    $("#load").click(function (e) { // Click event for "Load More"
      e.preventDefault();
      $(".item:hidden").slice(0, 3).show(); // Show the next 3 hidden items
      if ($(".item:hidden").length == 0) { // Check if no hidden items are left
        $("#load").hide(); // Hide the "Load More" button
      }
    });
  });

  // Smooth scrolling functionality for anchors with a class of scrollTo
  $('a.scrollTo').on('click', function () {
    var scrollTo = $(this).attr('data-scrollTo'); // Get the target section ID

    // Toggle the active class
    $("a.scrollTo").each(function () {
      if (scrollTo === $(this).attr('data-scrollTo')) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    // Animate scroll to the target section
    $('body, html').animate({
      "scrollTop": $('#' + scrollTo).offset().top
    }, 1000);
    return false;
  });

  // Toggle menu visibility on clicking the menu icon
  $(".menu-icon").click(function () {
    $(this).toggleClass("active");
    $(".overlay-menu").toggleClass("open");
  });
});

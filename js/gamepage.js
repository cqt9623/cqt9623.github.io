jQuery(document).ready(function ($) {
  'use strict';

  // Show initial items and manage "Load More" functionality
  $(function () {
    const initialItems = 6; // Number of items to show initially
    const loadMoreCount = 3; // Number of items to show on each "Load More"

    // Initially hide all items and then show the first `initialItems`
    $(".item").hide().slice(0, initialItems).show();

    $("#load").click(function (e) {
      e.preventDefault(); // Prevent default action for the button/link
      const hiddenItems = $(".item:hidden"); // Select all hidden items

      // Show the next `loadMoreCount` hidden items
      hiddenItems.slice(0, loadMoreCount).slideDown().css('display', 'block');

      // If no more hidden items, hide the "Load More" button
      if (hiddenItems.length <= loadMoreCount) {
        $("#load").fadeOut();
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
    const target = $('#' + scrollTo);
    if (target.length) {
      $('body, html').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
    return false;
  });

  // Toggle menu visibility on clicking the menu icon
  $(".menu-icon").click(function () {
    $(this).toggleClass("active");
    $(".overlay-menu").toggleClass("open");
  });
});

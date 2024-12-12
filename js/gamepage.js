jQuery(document).ready(function ($) {
  'use strict';

  // Show initial items and manage "Load More" functionality
  $(function () {
    const initialItems = 6; // Number of items to show initially
    const loadMoreCount = 3; // Number of items to show on each "Load More"

    // Initially hide all items and then show the first `initialItems`
    $(".item").hide().slice(0, initialItems).show();

    $("#load").click(function (e) { // Click event for "Load More"
      e.preventDefault();
      const hiddenItems = $(".item:hidden"); // Select hidden items

      if (hiddenItems.length > 0) {
        hiddenItems.slice(0, loadMoreCount).each(function () {
          $(this).css('display', 'block').hide().slideDown(); // Ensure display:block
        });
        if (hiddenItems.slice(loadMoreCount).length === 0) {
          $("#load").fadeOut(); // Hide "Load More" if no items are left
        }
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

jQuery(document).ready(function ($) {

  'use strict';

  // Select the "Continue Reading" link and the extra content span
const continueReadingBtn = document.querySelector('.continue-reading');
const extraContent = document.querySelector('.extra-content');

// Add an event listener to the "Continue Reading" link
continueReadingBtn.addEventListener('click', function() {
    // Toggle the visibility of the extra content
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block'; // Show content
        continueReadingBtn.textContent = 'Show Less'; // Change the button text
    } else {
        extraContent.style.display = 'none'; // Hide content
        continueReadingBtn.textContent = 'Continue Reading'; // Reset the button text
    }
});


  $(function () {
    $(".item").slice(0, 6).show(); // select the first ten
    $("#load").click(function (e) { // click event for load more
      e.preventDefault();
      $(".item:hidden").slice(0, 6).show(); // select next 10 hidden divs and show them
      if ($(".item:hidden").length == 0) { // check if any hidden divs still exist
        alert("No more 😘😘 SoRrY 😢😢. wait till next time!!"); // alert if there are none left
      }
    });
  });

  $(function () {

    // Vars
    var modBtn = $('#modBtn'),
      modal = $('#modal'),
      close = modal.find('.close-btn img'),
      modContent = modal.find('.modal-content');

    // open modal when click on open modal button 
    modBtn.on('click', function () {
      modal.css('display', 'block');
      modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });

    // close modal when click on close button or somewhere out the modal content 
    $(document).on('click', function (e) {
      var target = $(e.target);
      if (target.is(modal) || target.is(close)) {
        modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function (next) {
          modal.css('display', 'none');
          next();
        });
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
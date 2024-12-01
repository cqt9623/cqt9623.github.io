jQuery(document).ready(function ($) {

  'use strict';
  
 

  $(function () {
    $(".item").slice(0, 25).show(); // select the first ten
    $("#load").click(function (e) { // click event for load more
      e.preventDefault();
      $(".item:hidden").slice(0, 6).show(); // select next 10 hidden divs and show them
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

// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .portfolio-item");
const loadMoreButton = document.querySelector("#load");

let itemsPerPage = 25; // Number of items to show initially
let itemsToLoad = 6; // Number of items to show on each "Load More" click
let currentFilter = "all"; // Track the current filter

// Function to show items based on the filter and pagination
const showItems = () => {
    let visibleCount = 0;

    filterableCards.forEach(card => {
        const matchesFilter =
            currentFilter === "all" || card.dataset.name.toLowerCase() === currentFilter.toLowerCase();

        if (matchesFilter && visibleCount < itemsPerPage) {
            card.classList.remove("hide");
            card.classList.add("show");
            visibleCount++;
        } else {
            card.classList.remove("show");
            card.classList.add("hide");
        }
    });

    // Hide the "Load More" button if no more items can be shown
    const remainingItems = Array.from(filterableCards).filter(
        card =>
            (currentFilter === "all" || card.dataset.name.toLowerCase() === currentFilter.toLowerCase()) &&
            card.classList.contains("hide")
    );

    loadMoreButton.style.display = remainingItems.length > 0 ? "block" : "none";
};

// Function to filter cards when a filter button is clicked
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    currentFilter = e.target.dataset.filter; // Update current filter
    itemsPerPage = 6; // Reset to initial number of items
    showItems(); // Show items based on the new filter
};

// Function to load more items
const loadMoreItems = () => {
    itemsPerPage += itemsToLoad; // Increase the number of items to show
    showItems(); // Show items based on the updated number
};

// Attach event listeners
filterButtons.forEach(button => button.addEventListener("click", filterCards));
loadMoreButton.addEventListener("click", loadMoreItems);

// Initial setup
showItems();


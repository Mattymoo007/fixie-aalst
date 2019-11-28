$(document).ready(function() {

  // Toggles register form
  $(".description a").on("click", function() {
    $("#login .register").toggleClass("show");
    event.preventDefault();
  });

  // Next and previous button listeners
  $(".form .buttons .next").on("click", () => {
    movePage("next");
  });
  $(".form .buttons .previous").on("click", () => {
    movePage("previous");
  });
  $(".form .buttons .previous").hide();

  // Switches page divs in repair form
  function movePage(direction) {
    event.preventDefault();

    var currentPage = $(".page.show").index();
    var pages = $(".page");
    var nextBtn = $(".form .buttons .next");
    var previousBtn = $(".form .buttons .previous");
    pages.each(function() {
      $(this).removeClass("show");
    });

    if (direction === "next") {
      pages.eq(currentPage + 1).addClass("show");
      buttonToggle();
      activeIcon();
    } else if (direction === "previous") {
      pages.eq(currentPage - 1).addClass("show");
      buttonToggle();
      activeIcon();
    }

    // Hides and shows next and previous buttons
    function buttonToggle() {
      var newPage = $(".page.show").index();
      if (newPage >= 2 && newPage < 3) {
        nextBtn.show();
        previousBtn.show();
      } else {
        if (newPage <= 1) {
          nextBtn.show();
          previousBtn.hide();
        } else if (newPage >= 3) {
          nextBtn.hide();
          previousBtn.show();
        }
      }
      console.log(newPage);
      
    }

    // Toggles active icon
    function activeIcon() {
      var newPage = $(".page.show").index();
      var icons = $(".social-line a");
      icons.each(function() {
        $(this).removeClass("active");
      });
      icons.eq(newPage).addClass("active");
    }
  }
});

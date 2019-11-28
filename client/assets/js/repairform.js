$(document).ready(function() {
  // console.log("the dom is ready");

  $(".description a").on("click", function() {
    $("#login .register").toggleClass("show");
    event.preventDefault();
  });

  // Next and previous script
  $(".form .buttons .next").on("click", () => {
    movePage("next");
  });
  $(".form .buttons .previous").on("click", () => {
    movePage("previous");
  });
  $(".form .buttons .previous").hide();

  function movePage(direction) {
    event.preventDefault();

    var currentPage = $(".page.show").index();
    var pages = $(".page");
    pages.each(function() {
      $(this).removeClass("show");
    });

    if (direction === "next") {
      pages.eq(currentPage + 1).addClass("show");
      buttonToggle();
    } else if (direction === "previous") {
      pages.eq(currentPage - 1).addClass("show");
      buttonToggle();
    }

    function buttonToggle() {
      var newPage = $(".page.show").index();
      if (newPage >= 1 && newPage < 3) {
        $(".form .buttons .next").show();
        $(".form .buttons .previous").show();
      } else {
        if (newPage <= 0) {
          $(".form .buttons .next").show();
          $(".form .buttons .previous").hide();
        } else if (newPage >= 3) {
          $(".form .buttons .next").hide();
          $(".form .buttons .previous").show();
        }
      }
    }
  }
});

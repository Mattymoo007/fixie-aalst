$(document).ready(function() {
  // console.log("the dom is ready");

  // this is the array that needs to be at the top of the repairform.js
  // This array needs to be filled during the registration process
  // all the information needs to be send to the database when the user confirms
  let planTheFix = {
    username: "",
    typeOfBike: "",
    message: "",
    theIssues: [""],
    startTime: "",
    totalTime: 0
  };

  var currentPage = 0;

  $(".description a").on("click", function() {
    $("#login .register").toggleClass("show");
    event.preventDefault();
  });

  // Next and previous script
  $(".form .buttons .next").on("click", () => {
    movePage("next");
    if(currentPage == 1){
      window.repairCalendar.render();
    };
  });
  $(".form .buttons .previous").on("click", () => {
    movePage("previous");
  });
  $(".form .buttons .previous").hide();

  function movePage(direction) {
    event.preventDefault();

    currentPage = $(".page.show").index();
    var pages = $(".page");
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
  // setTimeout(function(){
  //   window.repairCalendar.render();
  // }, 2000);
});

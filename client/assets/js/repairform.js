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

  checkPage();

  // Expand for register form on register click in the description
  $(".description a.register-x").on("click", function() {
    $(".form .buttons .message").empty();
    $("#login .register").addClass("show");
    event.preventDefault();
  });

  // Collapse for login form on login click in the description
  $(".description a.login").on("click", function() {
    $(".form .buttons .message").empty();
    $("#login .register").removeClass("show");
    event.preventDefault();
  });

  // Next button
  $(".form .buttons .next").on("click", () => {
    movePage("next");
    if (currentPage == 1) {
      window.repairCalendar.render();
    }
  });

  // Previous button
  $(".form .buttons .previous").on("click", () => {
    movePage("previous");
  });

  // Login for
  $(".form .buttons .login").on("click", event => {
    event.preventDefault();
    login();
  });
});

// Initialising the repairform => Everything that happens when you first come onto the first page
function checkPage() {
  currentPage = $(".page.show").index();
  if (currentPage === 0) {
    $(".form .buttons .previous").hide();
    $(".form .buttons .next").hide();
  }
}

// Showing & hiding page divs in repairform => The steps
function movePage(direction) {
  event.preventDefault();
  $(".form .buttons .message").empty();

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
}

// Button next & previous hide & show => Hides next button at end of repairform process
function buttonToggle() {
  var newPage = $(".page.show").index();
  if (newPage >= 2 && newPage < 3) {
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

// Active icon in progress tracker
function activeIcon() {
  var newPage = $(".page.show").index();
  var icons = $(".social-line a");
  icons.each(function() {
    $(this).removeClass("active");
  });
  icons.eq(newPage).addClass("active");
}

// Login to go to next step in repairform
function login() {
  let message = $(".form .buttons .message");

  message.empty();

  // testvalues: p.ginneberge@gmail.com en 123456
  let mail = $("#email").val();
  let pswd = $("#password").val();

  checkLogin(mail, pswd).then(result => {
    if (result.user) {
      // todo: Not a safe option because buttons are only display:none => Solution remove buttons
      $(".form .buttons .login").fadeOut(() => {
        $(".form .buttons .next").fadeIn();
        message.append(result.message);
      });
    } else {
      message.append(result.message);
    }
  });
}

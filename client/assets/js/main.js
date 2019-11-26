$(document).ready(function () {

  // Code to include components in HTML files -- Experiment
  $(function () {
    var includes = $("[data-include]");
    jQuery.each(includes, function () {
      var file = "../assets/components/" + $(this).data("include") + ".html";
      $(this).load(file);
    });
  });

  // Fades in whole document on load
  $("body").css("display", "none");
  $("body").fadeIn(700);
});

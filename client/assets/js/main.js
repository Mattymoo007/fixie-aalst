// Code to include components in HTML files
$(document).ready(function() {
  $(function() {
    var includes = $("[data-include]");
    jQuery.each(includes, function() {
      var file = "../assets/components/" + $(this).data("include") + ".html";
      $(this).load(file);
    });
  });
});

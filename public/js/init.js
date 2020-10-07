$(document).ready(function() {
  $(".parallax").parallax();
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, { preventScrolling: false });
});

$(document).ready(function() {
  $(".scrollspy").scrollSpy();
});

$(document).ready(function() {
  $(".fixed-action-btn").floatingActionButton();
});

$(document).ready(function() {
  $(".collapsible").collapsible();
});

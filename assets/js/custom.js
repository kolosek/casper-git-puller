$(document).ready(function() {
  $(document).on('click', '#icon-close-menu', function() {
  	$('#menu-mobile').hide();
  });

  $("#icon-open-menu").on('click', function(e) {
  	$('#menu-mobile').show();
  })
});

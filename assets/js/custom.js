$(document).ready(function() {
  $(document).on('click', '#icon-close-menu', function() {
  	$('#menu-mobile').hide();
  });

  $(document).on('click', '#icon-open-menu', function() {
  	$('#menu-mobile').show();
  });
});

$(document).ready(function(){
		$("#banner").load("banner.html"); 
	  $("#sidebar").load("sidebar.html"); 
	  $("#footer").load("footer.html"); 
	  setTimeout(
		  function() 
		  {
			$("#myCarousel").carousel();
		  }, 3000);
	});
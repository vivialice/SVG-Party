var svgParty = {};
	
	// get length of path //
	var path = document.querySelector('path');
	var length = path.getTotalLength();


	

	$(document).ready(function() {
		$('path').css('stroke-dashoffset', length);
		// $('path').addClass('vivispizza');

	});

	$('button').on('click', function(){
		
	});

var svgParty = {};
	
	// get length of path //
	var path = document.querySelector('path');
	var length = path.getTotalLength();
	console.log(length);

	// loop through CSS to find keyframe //

	function findThings(rule) {

		// get stylesheets in variable 
		var ss = document.styleSheets;

		// loop through //
		for ( var i=0; i < ss.length ; ++i ) {
			// loop through rules //
			for ( var j=0; j<ss[i].cssRules.length; ++j ) {

				// find keyframe 
				if (ss[i].cssRules[j].type == window.cssRule.KEYFRAMES_RULE && ss[i].cssRules[j].name == rule ) return ss[i].cssRules[j];
			}
		}
		// if null
		return null;
	}

	// replace with var length //
	function replace(anim) {
		// find keyframe //
		var keyframes = findKeyframesRule(anim);

		// remove existing rule //
		keyframes.deleteRule('from');

		// create new rule - var length //
		keyframes.insertRule('from { stroke-dashoffset:' + length '; }' );
		
		// assign to thing 
		$('path').style.webkitAnimationName = anim;
	}

	$(document).ready(function() {
		// $('path').addClass('vivispizza');
	});

	$('button').on('click', function(){
		
	});

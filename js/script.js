
	
// get length of path //
var path = document.querySelector('path.hello');
var length = path.getTotalLength();
console.log(length);

$(document).ready(function() {

	// add mixin generated class to element //
	var animate = function(element, className, animation) {

		// hold element in variable //
		var hello = $(element);

		// add animation to element //
		hello.attr('class', className + ' ' + animation);

		// wait for animation to end, remove class // 
		hello.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
			hello.attr('class', className);
		});

		// regenerate animation on click //
		$('button').on('click', function() {

			// add animation to element //
			hello.attr('class',className + ' ' + animation);

			// wait for animation to end, remove class // 
			hello.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
				hello.attr('class',className);
			});
		});
	}

	// run animation function //
	animate('path.hello', 'hello', 'draw');

});

var svgParty = {};
	
	// get length of path //
	var path = document.querySelector('path.hello');
	var length = path.getTotalLength();
	console.log(length);

	$(document).ready(function() {

		var animate = function(element, className, animation) {
			var hello = $(element);
			hello.attr('class', className + ' ' + animation);

			hello.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
				hello.attr('class', className);
			});

			$('button').on('click', function() {
				hello.attr('class',className + ' ' + animation);

				hello.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
					hello.attr('class',className);
				});
			});
		}

		animate('path.hello', 'hello', 'draw');

	});

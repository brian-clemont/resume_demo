document.addEventListener('DOMContentLoaded', function() {
		var chart = window.chart = new EasyPieChart(document.querySelector('span'), {
			easing: 'easeOutElastic',
			delay: 3000,
			barColor: '#69c',
			trackColor: '#ace',
			scaleColor: false,
			lineWidth: 20,
			trackWidth: 16,
			lineCap: 'butt',
			onStep: function(from, to, percent) {
				this.el.children[0].innerHTML = Math.round(percent);
			}
		});

		

	});
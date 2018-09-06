$(function(){

			var wall = new freewall("#freewall");
			wall.reset({
				selector: '.brick',
				animate: true,
				cellW:110,
				cellH: 'auto',
				onResize: function() {
					wall.fitWidth();
				}
			});
			
			// wall.container.find('.brick img').load(function() {
			// 	wall.fitWidth();
			// });

			//call sliphover
			$('#freewall').sliphover();

			var wall = new freewall("#freewall-1");
			wall.reset({
				selector: '.brick',
				animate: true,
				cellW:110,
				cellH: 'auto',
				onResize: function() {
					wall.fitWidth();
				}
			});
			
			// wall.container.find('.brick img').load(function() {
			// 	wall.fitWidth();
			// });

			//call sliphover
			$('#freewall-1').sliphover();
	});
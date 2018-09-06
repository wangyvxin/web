$(function(){
	// 无缝联播
	$('.lun-left').click(function(event) {
		$('.wf-hidden ul').animate({
			width:"--"
		});
	});

	$('.lun-right').click(function(event) {
		
		console.log(twidth);
		$('.wf-hidden ul').animate({
			left:'+5px'
		},500);
	});
	


	
	

 


});
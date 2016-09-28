$(function()
{$(document).mousemove(function(e){
$('#cube').css({
'-moz-transform':'rotateX('+e.pageY+'deg)rotateY('+e.pageX+'deg)'
            
			});
			$('#cube').css({
'-webkit-transform':'rotateX('+e.pageY+'deg)rotateY('+e.pageX+'deg)'
            
			});
                                   });
});
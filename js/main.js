$(document).ready(function() {

	$(window).scroll(function(){  //As long as the window to scroll to trigger the code below
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //Get height after rolling
        if( scrollt >200 ){  //Height exceeds the judgment scroll 200px, on display
            $("#gotop").fadeIn(333); //Fade
			
        }else{
            $("#gotop").fadeOut(333); //If the return or does not exceed, on a fade. Must add stop () stops before the movie, there would be flashing
			
        }
    });
    $("#gotop").click(function(){ //When you click on the label when using animate within 200 milliseconds, rolled top
        $("html,body").animate({scrollTop:"0px"},200);
    });
	$(".navbar").mouseenter(function(){
		
	});
    $(".navbar").mouseleave(function(){
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
		if ( scrollt > 200) {
			
		}
	});
});

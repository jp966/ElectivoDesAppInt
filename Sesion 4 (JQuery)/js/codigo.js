
//ACTIVIDAD 1 JQUERY

$(document).ready(function(){
	$("#contenedor").hover(function() { 
		$(this).css("background-color", "red");
    }, function(){
        $(this).css("background-color", "orange");
    });
})



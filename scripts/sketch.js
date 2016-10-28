//creates a new grid with user defined dimensions
function newsquares(x){
	for (var row = 1; row <= x; row++){
		for (var col = 1; col <= x; col++){
			$("#container").append("<div class='squares'></div>");	
		};
	};
	$(".squares").width(960/x);
	$(".squares").height(960/x);
};


function clearsquares(){
	$(".squares").remove();
};	


function refreshsquares(){
	clearsquares();
	var numSquares = prompt("Please enter a number between 1 and 256");
	if (numSquares >= 1 && numSquares <= 256){
		newsquares(numSquares);	
	}
	else {
		refreshsquares();
	};
};

//starts with 16x16 grid
$(document).ready(function(){
	newsquares(16);

	$(".squares").mouseover(function(){
		var randcol = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		$(this).css("background", randcol);
	});

	$("button").on("click", function(){
		refreshsquares();
		$(".squares").mouseover(function(){
			var randcol = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
			$(this).css("background", randcol);
		});
    });
});
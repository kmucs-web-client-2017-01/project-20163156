
$(document).ready(function(){
	$(".img1").click(function(){
		 $(this).attr("src","sy.png");
	});
});


$(document).ready(function(){
	$(".img2").click(function(){
		 $(this).attr("src","sy.png");
	});
});


$(document).ready(function(){
	$(".img3").click(function(){
		 $(this).attr("src","sy.png");
	});
});


$(document).ready(function(){
	$(".img4").click(function(){
		 $(this).attr("src","sy.png");
	});
});


$(document).ready(function(){
	$(".img5").click(function(){
		 $(this).attr("src","sy.png");
	});
});


function gomain()
{
	location.replace("main.html");
};

function reply()
{
	var name = prompt("What's your name?");
	console.log("This is a restaurant recommended by",name);

	var res_name = prompt("What is the name of the restaurant?");
	console.log("Restaurant Name:",res_name);

	var location = prompt("Where is the restaurant?");
	console.log("Location: ",location);

	alert("Thank you very much for your reply :)");
}

var toggle=true;

function toggleBg()
{
	if(toggle)
	{
		var button=document.getElementById("button");
		button.style.background="red";
	}
	else
	{
		var button = document.getElementById("button");
		button.style.background="#2196F3";
	}
	toggle=!toggle;
};

var handle=setInterval(function(){
toggleBg();},500);


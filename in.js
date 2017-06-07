function show1()
{
	alert("Welcome to KMU page");
}

function show2()
{
	alert("Welcome to BUCHEON page");
}

function show3()
{
	alert("Welcome to SEOUL page");
}


function bigger(x)
{
	x.style.height = "400px";	
	x.style.width = "400px";

}
function normal(x)
{
	x.style.height = "305px";
	x.style.width="20%";
}


function bgChange(bg)
{
    document.body.style.background = bg;
}

$(document).ready(function()
{
    $(".ex .hide").click(function()
    {
        $(this).parents(".ex").hide("slow");
    });
});


function gomain()
{
	location.replace("main.html");
};








function load()
{
	alert("page is loaded");
}

function pagekmu()
{
	document.getElementById("demo1").innerHTML = "Go to IN KMU page!"
}

function pagebucheon()
{
	document.getElementById("demo2").innerHTML = "Go to IN BUCHEON page!"
}

function pageseoul()
{
	document.getElementById("demo3").innerHTML = "Go to IN SEOUL page!"
}


function pageseoul2()
{
	document.getElementById("demo4").innerHTML = "Go to IN SEOUL page!"
}




var image = document.getElementById("img");
var imageArray = ["kmu3.JPG","kmu4.JPG","kmu7.JPG","kmu1.JPG"];
var index = 0;

function slide()
{
 	image.setAttribute("src",imageArray[index]);
	index++;

	if(index >= imageArray.length)
	{
		index = 0;
	}
}

setInterval(slide,2000);


var image2 = document.getElementById("img2");
var imageArray2=["bucheon-2.JPG","bucheon-3.JPG","bucheon-5.JPG","bucheon-6.JPG","bucheon-1.JPG"];
var index2 = 0;

function slide2()
{
 	image2.setAttribute("src",imageArray2[index2]);
	index2++;

	if(index2 >= imageArray2.length)
	{
		index2 = 0;
	}
}

setInterval(slide2,2000);



var image3 = document.getElementById("img3");
var imageArray3 = ["seoul-1.JPG","seoul-2.JPG","seoul-2-2.JPG","seoul-3-2.JPG","seoul-3.JPG"];
var index3 = 0;

function slide3()
{
 	image3.setAttribute("src",imageArray3[index3]);
	index3++;

	if(index3 >= imageArray3.length)
	{
		index3 = 0;
	}
}

setInterval(slide3,2000);


var image4 = document.getElementById("img4");
var imageArray4 = ["seoul-5-2.JPG","seoul-6-2.JPG","seoul-7.JPG","seoul-5.JPG"];
var index4 = 0;

function slide4()
{
 	image4.setAttribute("src",imageArray4[index4]);
	index4++;

	if(index4 >= imageArray4.length)
	{
		index4 = 0;
	}
}

setInterval(slide4,2000);

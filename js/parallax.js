const INIT_SEP = 1000;
const DIV_SEP = 2000;

var divOffset = INIT_SEP;
var i;

window.addEventListener("scroll", showContents);

function showContents() 
{	
	var divTop = $(window).scrollTop();
	
	if(i == null)
		i = document.getElementsByClassName("content").length - 1;
	
	if(divTop > divOffset)
	{
		document.getElementsByClassName("content")[i].style.opacity = 0;
		divOffset = divOffset + DIV_SEP;
		i--;
	}
}
const INIT_SEP = 1000;
const DIV_SEP = 1900;

var divOffset = INIT_SEP;
var i;
var tmpDivTop = 0;

$(document).ready(function(){
    $(this).scrollTop(0);
});

window.addEventListener("scroll", showContents);

function showContents() 
{	
	var divTop = $(window).scrollTop();
	
	if(i == null)
		i = document.getElementsByClassName("content").length - 1;
	
	if(tmpDivTop < divTop)
	{
		if(divTop > divOffset)
		{
			document.getElementsByClassName("content")[i].style.opacity = 0;
			divOffset = divOffset + DIV_SEP;
			i--;
		}
	}
	else
	{
		if(divTop <= (divOffset - DIV_SEP))
		{
			i++;
			document.getElementsByClassName("content")[i].style.opacity = 1;
			divOffset = divOffset - DIV_SEP;
		}
	}
	
	tmpDivTop = divTop;
}
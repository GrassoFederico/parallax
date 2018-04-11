const MIN_SCROLL = 0;
const MAX_SCROLL = 949;

var	positionScroll = MIN_SCROLL;
var	sectionScroll;
var i = 1;

function checkScroll(vScroll)
{
	if(vScroll < MIN_SCROLL)
		return (MIN_SCROLL);
	else if(vScroll > MAX_SCROLL)
		return (MAX_SCROLL);
	else
		return (vScroll);
}

function getSectionScroll()
{
	var tmpPositionScroll = $(this).scrollTop();
	var tmpSectionTop = $("section#over"+i).css("top");
	var scrollValue;
	
	if(positionScroll < tmpPositionScroll)
	{
		scrollValue = parseInt(tmpSectionTop.split("px")[0]) - positionScroll;
		$("section#over"+i).css("top",checkScroll(scrollValue) + "px");
	}
	else
	{
		scrollValue = parseInt(tmpSectionTop.split("px")[0]) + positionScroll);
		$("section#over"+i).css("top",checkScroll(scrollValue) + "px");
	}
	
	positionScroll = tmpPositionScroll;
}

$(window).scroll(function(){
	
	getSectionScroll();
	
});


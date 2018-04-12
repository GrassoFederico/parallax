const FADE_SPEED = 0.4;

window.addEventListener("scroll", showContents);

function showContents() 
{
	var contents_index = document.getElementsByClassName("content").length - 1; 
	
	
	document.getElementsByClassName("content")[2].textContent = window.scrollTop;
}
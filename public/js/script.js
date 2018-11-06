let mobile_nav_in = document.getElementById("mobile-nav-open-btn").addEventListener("click", 
	()=>{let click = document.getElementById("mobile-nav").style.height = '100%' });

let mobile_nav_out = document.getElementById("mobile-nav").addEventListener("click", 
	()=>{let click = document.getElementById("mobile-nav").style.height = '0%' });

let scroll = ()=>{
	let top = document.getElementById("nav_home")
	let ypos = window.pageYOffset;
	if(ypos > 100) {
	let white_nav = document.getElementById("nav_home").classList.add("white-nav-top");
	let a=document.getElementsByClassName("smooth-scroll");
	for (let i=0; i<a.length; i++) a[i].style.color="#337ab7";
	}
	else{
	let white_nav = document.getElementById("nav_home").classList.remove("white-nav-top");
	let a=document.getElementsByClassName("smooth-scroll");
	for (let i=0; i<a.length; i++) a[i].style.color="#fff"; 
	}
}

window.addEventListener("scroll",scroll);
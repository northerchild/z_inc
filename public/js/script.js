/*Toggle Button*/
let mobile_nav_in = document.getElementById("mobile-nav-open-btn").addEventListener("click", 
	()=>{let click = document.getElementById("mobile-nav").style.height = '100%' });

let mobile_nav_out = document.getElementById("mobile-nav").addEventListener("click", 
	()=>{let click = document.getElementById("mobile-nav").style.height = '0%' });

/*End Toggle Button*/

/*Sticky*/
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
/*End Sticky*/

/*Validate form*/

let formulario = document.getElementById("form")

form.addEventListener("submit", function(event){
  event.preventDefault();
  let validate_form = true,
      elementos = this.elements,
      total = elementos.length;
  
  for (let i = 0; i < total; i++){
    if (elementos[i].value.length === 0){
      swal ( "Oops" ,  "Maybe, ¿missing a field?" ,  "error" )
      elementos[i].focus();
      validate_form = false;
      break;
    }
  }

/*Another email validation*/
  let email = document.getElementById("email");
    email.addEventListener("keyup", function (event) {
	  if (email.validity.typeMismatch) {
	    email.setCustomValidity("¡Dude i need a real email, dont forget @, thanks!");
	  } else {
	    email.setCustomValidity("");
	  }
	});
  
  if (validate_form){
    this.submit();
  }
}, false);

/*En Validate form*/ 




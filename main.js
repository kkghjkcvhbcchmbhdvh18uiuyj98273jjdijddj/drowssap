function timed() {
	window.setTimeout(function() {
		
	}, 2000);	
}


 function getE(ee) { document.querySelector(ee); }
 function getV(ee) { document.querySelector(ee).value; }


function sys(ee) {
	
}


window.addEventListener("load", function() { 
window.setTimeout(function() {
		document.querySelector('#loader').style.opacity="0";
		window.setTimeout(function() {
		document.querySelector('#loader').outerHTML="";
		}, 2000);
		}, 2000);
 });
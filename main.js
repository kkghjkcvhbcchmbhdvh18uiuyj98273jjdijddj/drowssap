function timed() {
	window.setTimeout(function() {
		
	}, 2000);	
}


 function getE(ee) { return document.querySelector(ee); }
 function getV(ee) { return document.querySelector(ee).value; }


function sys(ee) {
	
}


window.addEventListener("load", function() {
//all codes

 getE('#mcart').addEventListener("focus",function() { getE('#cart').setAttribute("style","width:100%;height:100%;"); });
 document.querySelector('#mmcart').addEventListener("focus",function() { getE('#cart').setAttribute("style","width:100%;height:100%;"); });
 document.querySelector('#tmcart').addEventListener("focus",function() { getE('#cart').setAttribute("style","width:100%;height:100%;"); });
 getE('#closecartB').addEventListener("focus",function() { getE('#cart').setAttribute("style","width:0px;height:0px;");  });
 window.addEventListener("resize",function() { getE('#mom').setAttribute("style","height:"+ screen.height + "px;");  });
 window.addEventListener("orientationchange",function() { getE('#mom').setAttribute("style","height:"+ screen.height + "px;");  });
 window.addEventListener("resize",function() { getE('#tom').setAttribute("style","height:"+ screen.height + "px;");  });
 window.addEventListener("orientationchange",function() { getE('#tom').setAttribute("style","height:"+ screen.height + "px;");  });
 window.addEventListener("pageshow",function() { getE('#tom').setAttribute("style","height:"+ screen.height + "px;");  });
 window.addEventListener("pageshow",function() { getE('#mom').setAttribute("style","height:"+ screen.height + "px;");  });





	
window.setTimeout(function() {
		document.querySelector('#loader').style.opacity="0";
		window.setTimeout(function() {
		document.querySelector('#loader').outerHTML="";
		}, 2000);
		}, 2000);
 });
 
 
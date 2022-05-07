function timed() {
	window.setTimeout(function() {
		
	}, 2000);	
}


 function getE(ee) { return document.querySelector(ee); }
 function getV(ee) { return document.querySelector(ee).value; }


function linker() {
	ah = document.querySelectorAll('button a');
	for(let i = 0; i< ah.length; i++) {
		ah[i].addEventListener("mousedown", function() { event.preventDefault(); window.location = ah[i].getAttribute('href'); })
		ah[i].addEventListener("touchstart", function() { event.preventDefault(); window.location = ah[i].getAttribute('href'); })
	}
	
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

//body height for fixed 100% height
 window.addEventListener("pageshow",function() { getE('#content').setAttribute("style","height:"+ screen.height + "px;");  });
 window.addEventListener("resize",function() { getE('#content').setAttribute("style","height:"+ screen.height + "px;");  });
 window.addEventListener("orientationchange",function() { getE('#content').setAttribute("style","height:"+ screen.height + "px;");  });

linker()

	
window.setTimeout(function() {
		document.querySelector('#loader').style.opacity="0";
		window.setTimeout(function() {
		document.querySelector('#loader').outerHTML="";
		}, 1000);
		}, 1000);
 });
 
 
 
 function expand(ee) {
	 if(ee.nextSibling.style.height=='unset') {
	ee.innerHTML = ee.innerHTML.replace("-","+");
	ee.nextSibling.setAttribute("style","height:0px;");
	 } else {
	ee.innerHTML = ee.innerHTML.replace("+","-");
	ee.nextSibling.setAttribute("style","height:unset;"); 
	 }
 }
 
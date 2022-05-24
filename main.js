//.localStorage.removeItem('cartlist');

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

 getE('#mstore').addEventListener("focus",function() { getE('#mstore').querySelector('a').click(); });
 getE('#mmstore').addEventListener("focus",function() { getE('#mstore').querySelector('a').click(); });
 getE('#tstore').addEventListener("focus",function() { getE('#mstore').querySelector('a').click(); });


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
 
 /**window.addEventListener("pageshow",function() { getE('body').setAttribute("style","width:"+ screen.width + "px;");  });
 window.addEventListener("resize",function() { getE('body').setAttribute("style","width:"+ screen.width + "px;");  });
 window.addEventListener("orientationchange",function() { getE('body').setAttribute("style","width:"+ screen.width + "px;");  });
**/
linker();

//fetch services
if(document.querySelector('#services')) {
window.xservices = document.querySelector('#services').outerHTML;
} else if(document.querySelector('#servicesx')){
	window.xservices = document.querySelector('#servicesx').outerHTML;
}

accountMan();
	
window.setTimeout(function() {
		document.querySelector('#loader').style.opacity="0";
		window.setTimeout(function() {
		document.querySelector('#loader').outerHTML="";
		}, 1000);
		}, 1000);
	
	//newly bought
if(getQ('cart')=="enable") {
localStorage.setItem('user_cart',localStorage.getItem('cartlist'));
localStorage.setItem('user_date1', getQ('date1'));
localStorage.setItem('user_date2',getQ('date2'));
localStorage.setItem('user_percent',getQ('percent'));

localStorage.removeItem('cartlist');
}
	//newly bought

window.setTimeout(function() {
		if(getQ('notify')) {
			notify(getQ('notify'));
		loc = location.href.split('?');
		lo = loc[0].split('co.za/');
		window.history.pushState({}, document.title, "/" + lo[1]);
		}
		}, 2000);


//window.history.pushState({}, document.title, "/" + "my-new-url.html");
//end of onload	
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
 
 
 function getTotal(ee,w) {
	 ye = ee.value.split("/");
	 eee = ye[0];
	 if(w=="plus") {
	 ee.parentNode.parentNode.querySelector('.total').innerHTML = (ee.parentNode.parentNode.querySelector('.total').innerHTML*1)+(eee*1); } else {
	 ee.parentNode.parentNode.querySelector('.total').innerHTML = (ee.parentNode.parentNode.querySelector('.total').innerHTML*1)*(eee*1); }
	 jj = ee.parentNode.parentNode.querySelector('.total').innerHTML.split('.');
	 ee.parentNode.parentNode.querySelector('.total').innerHTML = jj[0];
	 ee.setAttribute("disabled","true");
 }
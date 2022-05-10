function items(ee,bb,tt)
 {
	 if(bb=="add") {
	 ee.previousSibling.innerHTML = (ee.previousSibling.innerHTML*1)+1;
	 } else if(bb=="subtract" && ee.nextSibling.innerHTML>1){
		ee.nextSibling.innerHTML = (ee.nextSibling.innerHTML*1)-1; 
	 }
	 getE('#total').innerHTML = tt*getE('.countz').innerHTML;
 }
 
 
 function preview(ee) {
	 getE('.previews .selected').setAttribute("class",getE('.previews .selected').getAttribute("class").replace(" selected",""));
	 ee.setAttribute("class", ee.getAttribute("class") + " selected");
	 getE('.prod').style.opacity = "0.1";
	 window.setTimeout(function() {
	 getE('.prod').src = ee.getAttribute("href");
	 getE('.prod').style.opacity = "1";  } , 1000);
	 
 }
 
 
 function addToCart(ee,ih,id,ip,im,it) {
	 
	 
	 
	 if(!localStorage.getItem('cartlist')) {
		 i = 0;
		  window.localStorage.setItem('cartlist','<div class="item">' + "<div class='ip' style='background-image:url("+ ip +");'>" + '</div><div class="itemd"><div class="ih">' + ih + '</div><div class="im">Quantity: ' + im + '</div><div class="it">Price: ' + it + '</div></div><div style="display:none" class="id">' + id + '</div></div>');
	 } else {
		 i++;
	 window.localStorage.setItem('cartlist',localStorage.getItem('cartlist') +  '<div class="item">' + "<div class='ip' style='background-image:url("+ ip +");'>" + '</div><div class="itemd"><div class="ih">' + ih + '</div><div class="im">Quantity: ' + im + '</div><div class="it">Price: ' + it + '</div></div><div style="display:none" class="id">' + id + '</div></div>');
   }
   ee.innerHTML = "Added To Cart";
   ee.setAttribute("onclick",'');
   
   getE('#cartlist').innerHTML = localStorage.getItem('cartlist');
   
   //localStorage.banpage
   //localStorage.cartcount
   
   
 }
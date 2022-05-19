//localStorage.removeItem('cartlist');
//localStorage.removeItem('reg');
if(!localStorage.getItem('cartlist')) {
	inic = '<div id="emptycart">Cart is empty.</div>';
	init = '0.00';
} else {
	inic = localStorage.getItem('cartlist');
	init = localStorage.getItem('total');
}
document.body.innerHTML += '<div class="center" id="cart"><div class="center box"><div class="" id="cartlist">' + inic + '</div><button class="nbg brn" id="closecartB">Hide</button><button class="nbg brn" id="closecartC">' + init + '</button><button class="mbg brm" id="checkoutB">Checkout</button></div></div>';

 function addToCart(ee,ih,id,ip,im,it) {
	 
	 details = id;
   if(!localStorage.getItem('reg')) {
	   localStorage.setItem('reg',0)
   } else {
	   localStorage.setItem('reg',(localStorage.getItem('reg')*1)+1);
   }
   id = localStorage.getItem('reg');
	 
	 if(!localStorage.getItem('cartlist')) {
		 
		  window.localStorage.setItem('cartlist','<div class="item" tabindex="2" id="reg' + id + '">' + "<div class='ip' style='background-image:url("+ ip +");'>" + '</div><div class="itemd"><div class="ih">' + ih + '</div><div class="im">Quantity: ' + im + '</div><div class="it">Price: R' + it + '</div><div class="ir" tabindex="2" onfocus="removeCart(this.parentNode.parentNode)">Remove</div></div><div style="display:none" class="id" reg="' + id + '">' + id + '</div></div>');
	 } else {
		 
	 window.localStorage.setItem('cartlist',localStorage.getItem('cartlist') +  '<div class="item" tabindex="2" id="reg' + id + '">' + "<div class='ip' style='background-image:url("+ ip +");'>" + '</div><div class="itemd"><div class="ih">' + ih + '</div><div class="im">Quantity: ' + im + '</div><div class="it">Price: R' + it + '</div><div class="ir" tabindex="2" onfocus="removeCart(this.parentNode.parentNode)">Remove</div></div><div style="display:none" class="id" reg="' + id + '">' + id + '</div></div>');
   }
   ee.innerHTML = "Added!";
   window.setTimeout(function() {
   ee.innerHTML = "Add To Cart"; },2000);
  // pae = ee.getAttribute('onclick');
   //ee.setAttribute("onclick","removeCart(getE('#reg" + id + "')); this.setAttribute('onclick',`" + pae + "`); this.innerHTML = 'Add To Cart';");
   
   getE('#cartlist').innerHTML = localStorage.getItem('cartlist');
   getE('#closecartC').innerHTML = (getE('#closecartC').innerHTML*1)+(it*1);
   //localStorage.banpage
   //localStorage.cartcount
   
   localStorage.setItem('total',getE('#closecartC').innerHTML);
 }
 
 
 function removeCart(ee) {
	 getE('#closecartC').innerHTML = getE('#closecartC').innerHTML-ee.querySelector('.it').innerHTML.replace("Price: R","");
	 getE('#cartlist').removeChild(ee);
	 localStorage.setItem('cartlist',getE('#cartlist').innerHTML);
	 
	 if(localStorage.getItem('cartlist').length<1) {
		 getE('#cartlist').innerHTML = '<div id="emptycart">Cart is empty.</div>';
		 getE('#closecartC').innerHTML ="0.00";
		 localStorage.setItem('reg',0);
		 localStorage.removeItem('cartlist');
	 }
	 
	 
   localStorage.setItem('total',getE('#closecartC').innerHTML);
 }
 
 
 
 getE('#checkoutB').addEventListener('click',function() {
	 if(localStorage.getItem('total')=="0.00") {  /**do nothing**/  }
	else {
		window.location = 'Checkout?';
		//address
		//email
		//redirect to pay
	}
 });
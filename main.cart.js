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
		 
		  window.localStorage.setItem('cartlist','<div class="item" tabindex="2" id="reg' + id + '" tabindex="2"  style="overflow-y:auto;">' + "<div class='ip' style='background-image:url("+ ip +");'>" + '</div><div class="itemd"><div class="ih">' + ih + '</div><div class="im">Quantity: ' + im + '</div><div class="it">Price: R' + it + '</div><div class="ir" tabindex="2" onfocus="removeCart(this.parentNode.parentNode)">Remove</div></div><div style="display:none" class="id" reg="' + id + '">' + id + '</div></div>');
    cartX = `=(=` + ee + `=,=` + ih + `=,=` + details + `=,=` + ip + `=,=` + im + `=,=` + it + `=)=`;
   localStorage.setItem('cartX',cartX);
		  } else {
	 window.localStorage.setItem('cartlist',localStorage.getItem('cartlist') +  '<div class="item" tabindex="2" id="reg' + id + '" tabindex="2" style="overflow-y:auto;">' + "<div class='ip' style='background-image:url("+ ip +");'>" + '</div><div class="itemd"><div class="ih">' + ih + '</div><div class="im">Quantity: ' + im + '</div><div class="it">Price: R' + it + '</div><div class="ir" tabindex="2" onfocus="removeCart(this.parentNode.parentNode)">Remove</div></div><div style="display:none" class="id" reg="' + id + '">' + id + '</div></div>');
    cartX = `=(=` + ee + `=,=` + ih + `=,=` + details + `=,=` + ip + `=,=` + im + `=,=` + it + `=)=`;
   localStorage.setItem('cartX',localStorage.getItem('cartX') + cartX);
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
 
 function viewz(d) {
	 notify(d);
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
	 if(localStorage.getItem('total')=="0.00" || !localStorage.getItem('total')) {  /**do nothing**/  }
	else {
		if(!localStorage.getItem('user')) {
		window.location = 'Login?do=buying';  }
		else {
payfast = `<div id="payfast" style="display:none;"><form name="PayFastPayNowForm" action="https://www.payfast.co.za/eng/process" method="post">  <input required type="hidden" name="cmd" value="_paynow">  <input required type="hidden" name="receiver" pattern="[0-9]" value="19754082">  <input type="hidden" name="return_url" value="http://request.bleedingedgelab.co.za/man.php?ref=buy&status=success">  <input type="hidden" name="cancel_url" value="http://request.bleedingedgelab.co.za/man.php?ref=buy&status=cancel">  <input required type="hidden" name="amount" value="` + localStorage.getItem('total') + `" id="injtotal">  <input required type="hidden" name="item_name" maxlength="255" value="Bleeding Edge Lab (PTY) Ltd - Checkout">  <input type="hidden" name="item_description" maxlength="255" value="Checkout item(s) from Bleeding Edge Lab (PTY) Ltd">  <table>  <tr>  <td colspan=2 align=center>  <input type="image" src="https://www.payfast.co.za/images/buttons/PayNow/Dark-Large-Square-PayNow.png" alt="Pay Now" title="Pay Now with PayFast" id="payfastgo">  </td>  </tr>  </table>  </form></div>`;
		document.body.innerHTML = payfast;
		
		getE('#payfastgo').click();
		}
		//address
		//email
		//redirect to pay
	}
 });
 
 window.addEventListener("",function() {

	 });
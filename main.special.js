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
 
 
function accountMan() {
	if(localStorage.getItem('user')) {
		
		getE('#account_login').outerHTML = '<button class="mcol" id="account_login"><a href="Account">Account</a></button>';
		getE('#t_account_login').outerHTML = '<button class="mcol" id="t_account_login"><a href="Account">Account</a></button>';
		getE('#m_account_login').outerHTML = '<button class="mcol" id="m_account_login"><a href="Account">Account</a></button>';
		
	}
}



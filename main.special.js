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

function checkForm(ee,ii) {
	event.preventDefault();
	
	if(ii=="register") {
	action="http://request.bleedingedgelab.co.za/man.php?ref=register"
	} else if(ii=="login") {
	action="http://request.bleedingedgelab.co.za/man.php?ref=login"	
	
	} else if(ii=="update") {
	action="http://request.bleedingedgelab.co.za/man.php?ref=update"	
	
	}
	string = "";
	ins = ee.getElementsByTagName('input');
	for(let i = 0; i<ins.length; i++) {
		string += '&' + ins[i].getAttribute('name') + '=' + ins[i].value;
	}
	
	if(location.hash=='buying')
	{
		string += '&ref=buying';
	}
	location = action + string;
	
}

function getQ(variable)
{ 
  var query = window.location.search.substring(1); 
  var vars = query.split("&"); 
  for (var i=0;i<vars.length;i++)
  { 
    var pair = vars[i].split("="); 
    if (pair[0] == variable)
    { 
      return pair[1].replace(/_bel_/g, "&nbsp;").replace(/_br_/g, "<br>");
    } 
  }
  return false; //not found 
}


function getAccountInfo() {
	
	string = "";
	ins = getE('#updateaccount').getElementsByTagName('input');
	for(let i = 0; i<ins.length; i++) {
	ins[i].value = localStorage.getItem('user_' + ins[i].getAttribute('name'));
	}
	
}


function nameprint() {
	np = querySelectorAll('.nameprint');
	for(let i = 0; i<np.length; i++) {
		np[i].innerHTML = localStorage.getItem('user');
	}
	
}
if(localStorage.getItem('user')) { nameprint(); }
	
document.body.innerHTML += `<div id="notify">Notifications will appear here!</div>`;

function notify(ii) {
	getE('#notify').innerHTML = ii;
	getE('#notify').setAttribute('style','height:13em;');
	window.setTimeout(function() {	
	getE('#notify').setAttribute('style','height:0px;');
	} ,4000);
}

function getTrackingInfo() {
	
}



	
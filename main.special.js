function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replaces) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replaces);
}

function items(ee,bb,tt)
 {
	 if(bb=="add") {
	 ee.previousSibling.innerHTML = (ee.previousSibling.innerHTML*1)+1;
	 } else if(bb=="subtract" && ee.nextSibling.innerHTML>1){
		ee.nextSibling.innerHTML = (ee.nextSibling.innerHTML*1)-1; 
	 }
	 ee.parentNode.parentNode.querySelector('.total').innerHTML = tt*ee.parentNode.parentNode.querySelector('.countz').innerHTML;
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
		if(getE('#account_login').getAttribute('selected'))
		{ se=' selected="true"'; } else { se=""; }
		getE('#account_login').outerHTML = '<button class="mcol" id="account_login"' + se + '><a href="Account">Account</a></button>';
		getE('#t_account_login').outerHTML = '<button class="mitem" id="t_account_login"' + se + '><a href="Account">Account</a></button>';
		getE('#m_account_login').outerHTML = '<button class="mitem" id="m_account_login"' + se + '><a href="Account">Account</a></button>';
		getE('#account_login').addEventListener("touchstart",function() { location = 'Account';  });
		getE('#account_login').addEventListener("mousedown",function() { location = 'Account';  });
		getE('#t_account_login').addEventListener("touchstart",function() { location = 'Account';  });
		getE('#t_account_login').addEventListener("mousedown",function() { location = 'Account';  });
		getE('#m_account_login').addEventListener("touchstart",function() { location = 'Account';  });
		getE('#m_account_login').addEventListener("mousedown",function() { location = 'Account';  });
		
		
		
	}
}



function checkForm(ee,ii) {
	event.preventDefault();
	
	if(ii=="register") {
	action="http://request.bleedingedgelab.co.za/man.php?ref=register&do=" + getQ('do');
	} else if(ii=="login") {
	action="http://request.bleedingedgelab.co.za/man.php?ref=login&do=" + getQ('do');	
	
	} else if(ii=="update") {
	action="http://request.bleedingedgelab.co.za/man.php?ref=update"	
	
	} else if(ii=="support") {
	action="http://request.bleedingedgelab.co.za/man.php?ref=support"	
	
	} else if(ii=="quote") {
	action="http://request.bleedingedgelab.co.za/man.php?ref=support"	
	
	}
	string = "";
	ins = ee.getElementsByTagName('input');
       if(ee.getElementsByTagName('textarea')[0]) 
       { 
ins = ins.push(ee.getElementsByTagName('textarea')[0]);
       }
	for(let i = 0; i<ins.length; i++) {
		string += '&' + ins[i].getAttribute('name') + '=' + ins[i].value + '';
		if(ii=="update") {
			localStorage.setItem('user_' + ins[i].getAttribute('name'), ins[i].value);
		}
	}
	
	location = action + string;
	
}

function getQ(variable)
{ 
  var query = window.location.search.substring(1); 
  query = replaceAll(query,'%20',' ');
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
	np = document.querySelectorAll('.nameprint');
	for(let i = 0; i<np.length; i++) {
		np[i].innerHTML = localStorage.getItem('user');
	}
	
}
if(localStorage.getItem('user')) { nameprint(); }
	
document.body.innerHTML += `<div id="notify">Notifications will appear here!</div>`;

function notify(ii) {
	ii = replaceAll(ii, '%20', ' ')
	getE('#notify').innerHTML = ii;
	getE('#notify').setAttribute('style','height:13em;');
	window.setTimeout(function() {	
	getE('#notify').setAttribute('style','height:0px;');
	} ,4000);
}


function getTrackingInfo() {

	if(localStorage.getItem('user_cart'))
	{
		getE('#cartlage').innerHTML = localStorage.getItem('user_cart');
		getE('#rfullname').innerHTML = localStorage.getItem('user_fullname');
		getE('#rphone').innerHTML = localStorage.getItem('user_phone');
		getE('#rcity').innerHTML = localStorage.getItem('user_city');
		getE('#rprovince').innerHTML = localStorage.getItem('user_province');
		getE('#raddress').innerHTML = localStorage.getItem('user_address');
		getE('#rpostal').innerHTML = localStorage.getItem('user_postal');
		getE('#rdate1').innerHTML = localStorage.getItem('user_date1');
		getE('#rdate2').innerHTML = localStorage.getItem('user_date2');
		
		getE('#track_nothing').style.display = "none";
		getE('#track_center').style.display = "block";
	} else {
		getE('#track_center').style.display = "none";
		getE('#track_nothing').style.display = "block";
	}
}



	

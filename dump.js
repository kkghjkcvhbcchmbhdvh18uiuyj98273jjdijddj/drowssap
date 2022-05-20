
 function getValue(ee) {
    return document.getElementById(ee).value
 }
  function getE(ee) {
    return document.getElementById(ee)
 }
 
function fetchData() 
{ 
  if(window.swap=="buying") {
      window.location ="http://request.bleedingedgelab.co.za/man.php?swap=" + window.swap + "&fullname=" + getValue('fullname') + "&passmail=" + getValue('passmail') + "&passcode=" + getValue('passcode') + "&streetaddress=" + getValue('streetaddress') + "&city=" + getValue('city') + "&province=" + getValue('province') + "&idnumber=" + getValue('idnumber') + "&units=" + getValue('units') + "&phone=" + getValue('phone') + "&postal=" + getValue('postal');
  } else if(window.swap=="login") {
          window.location ="http://request.bleedingedgelab.co.za/man.php?swap=" + window.swap + "&passcode=" + getValue('passcode') + "&passmail=" + getValue('passmail');
  
  } else if(window.swap=="quote") {
      
     window.location ="http://request.bleedingedgelab.co.za/man.php?swap=" + window.swap + "&fullname=" + getValue('fullname') + "&passmail=" + getValue('passmail') + "&phone=" + getValue('phone') + "&query=" + getValue('query');
  }
}


function login() { 
fetchData();
//put date in reqbox then take is then recreate reqbox into track page

} 




function submission() { 
    fetchData();
 document.getElementById("notify").style.display = "inline-block";
 window.setTimeout(function() {
 document.getElementById("notify").style.display = "none";
     
 },3000);

} 

function buying(ee) { 
    
if(ee==1) {
 fetchData();
} else if(ee==0) {
 //agree to terms of service
  getE('reqbox').innerHTML = '<br>&nbsp;<h5>We need the following details for purchase & delivery. <br><i style="font-size:6px;color:lightgray;">Please make sure to enter the correct details, as they are on your ID or Passport book. Please note that we do not keep your information after the delivery has been made. We have a strict delivery system and we want to insure the package ends up with you.</i></h5><br><h6>Package Tracking Details:</h6><input type="email" id="passmail" placeholder="Your Email Address" class="cinput"><br><br><input type="text" id="passcode" placeholder="Choose Password" class="cinput"><br><br><h6>Personal Details:</h6><input type="name" id="fullname" placeholder="Your Full Name" class="cinput"><br><br><input type="number" id="phone" placeholder="Phone Number" class="cinput"><br><br><input type="number" id="idnumber" placeholder="ID or Passport Number" class="cinput"><br><br><h6>Delivery Details:</h6><input type="address" id="streetaddress" placeholder="Street Number & Name" class="cinput"><br><br><input type="city" id="city" placeholder="City" class="cinput"><br><br><input type="province" id="province" placeholder="Province" class="cinput"><br><br><input type="postal" id="postal" placeholder="Zip Code" class="cinput"><br><br> <input type="hidden" id="units" placeholder="Number of Units" class="cinput" value="1111"><br><font size="1">By selecting the confirm button, you agree to having read our <a href="/agreement.html" target="new" style="color:blue;">terms of service</a>. Thank you for your support and we are excited to learn about your experience with our product. </font><br><div class="btn-row row no-margin"> <button id ="newbutton" class="btn btn-success buynow">Confirm</button> &nbsp; <button id ="sndbutton" class="btn btn-success buynow">Cancel</button> </div><br>';
  getE('reqbox').setAttribute("style","position:fixed;width:100%;top:50%;left:50%;text-align:left;overflow-x:hidden;overflow-y:auto;padding:16px;display:block;z-index:9999999999999999999999999999999999;height:100%;transform:translate(-50%,-50%);");
  getE('reqbox').style.display = "block";
  getE('newbutton').addEventListener('click', function() { 
      window.incom = 0;
    ins =  document.getElementsByTagName('input');
      
      for (let i = 0; i < ins.length; i++) {
      if(ins[i].value.length<=3)
      {
          window.incom = 1;
      }
}
      if(window.incom == 1)
      {
          window.incom = 0;
          alert('Please fill in the form accordingly!');
      } else {
     buying(1);
      }
  });
  getE('sndbutton').setAttribute('style','border:1px solid #1f2837;background-color:white;color:#1f2837;');
   getE('sndbutton').addEventListener('click', function() { location = "/";});
 }
}


function quote() {
    window.location.hash = "";
    window.location.hash = "contact_us";
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
  return 'N/A'; //not found 
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    if(getQ('response')=="thanks") {
    document.getElementById("notify").style.display = "inline-block";
 window.setTimeout(function() {
  document.getElementById("notify").style.display = "none";
     
 },7000);
    
    } else if(getQ('response')=="none") {
        
          document.getElementById("notify").innerHTML = "The user details you have entered do not exist. Please enter the email and password used when making the purchase.";
          document.getElementById("notify").style.display = "inline-block";
 window.setTimeout(function() {
  document.getElementById("notify").style.display = "none";
     
 },7000); 
    }  else if(getQ('response')=="success") {
         sp = getQ('fullname').split('&nbsp;');
         fstname = sp[0];
          document.getElementById("loginbox").innerHTML = ' <br/>&nbsp;<br><h6 color="#1f2837">Hang in there ' + fstname + '. Your package will arrive soon.</h6><img src="/belair.png" style="width:100%;"><br><div style="width:100%;height:32px;background-color:rgba(0,0,255,0.1);border:1px solid #1f2837;border-radius:3px;overflow:hidden;"><button style="overflow:visible;border:1px solid #1f2937;border-radius:3px;font-size:12px;font-weight:bold;color:white;text-align:center;background-color:#1f2837;height:100%;width:' + (getQ('percent')-10) + '%;transition: width 5s;" id="buffer">&nbsp;Delivery&nbsp;Progress&nbsp;'+ (Math.round(getQ('percent')* 10) / 10) +'%</button></div><div class="traq"><div>Assembly</div><div>Warehouse</div><div>Delivery</div><div>Delivered</div></div><br><div class="trow"><div class="tcol colx">Date of Purchase</div><div class="tcol coly">' + getQ('date1') + '</div></div><div class="trow"><div class="tcol colx">Items</div><div class="tcol coly">BEL Power Tank, BEL 12V Charger</div></div><div class="trow"><div class="tcol colx">Date of Arrival to Destination</div><div class="tcol coly">' + getQ('date2') + '</div></div><div class="trow"><div class="tcol colx">Package Destination (Your Address)</div><div class="tcol coly">' + getQ('address') + '<br>' + getQ('city') + ', ' + getQ('province') + '<br>' + getQ('postal') + '</div></div><br><br><font style="font-weight:bold;display:block;" size="2">We will call your number ' + getQ('phone') + ' when we are in close proximity to the address listed.</font>';
          window.setTimeout(function() {
             var ans = getQ('percent');
          getE('buffer').style.width = ans + "%";
          },2000);
    }
  }
}


function paylog()
{
    var result = confirm("Do you confirm that you have made a payment? We will call your bank to confirm. Make sure you've sent the proof of payment to payments@bleedingedgelab.co.za"); 

            if (result == true) { 
    window.location = 'http://request.bleedingedgelab.co.za/man.php?swap=bought';
            }

}
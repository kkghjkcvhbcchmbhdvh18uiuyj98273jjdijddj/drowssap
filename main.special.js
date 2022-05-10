function items(ee,bb)
 {
	 if(bb=="add") {
	 ee.previousSibling.innerHTML = (ee.previousSibling.innerHTML*1)+1;
	 } else if(bb=="subtract" && ee.nextSibling.innerHTML>1){
		ee.nextSibling.innerHTML = (ee.nextSibling.innerHTML*1)-1; 
	 }
 }
function Calculate(){
	var amount = Number(document.getElementsByTagName('input')[0].value);
	var people = document.getElementsByTagName('input')[1].value;

	if (amount == '') {
		alert('Enter the bill amount');
	}else{
		if (people == '') {
			var people = 1;
		}
		var tip = document.getElementsByTagName('select')[0].value;
		var totalTip = (amount*tip)/people;
		document.getElementsByClassName('amount')[0].style.display='block';
		document.getElementsByClassName('p')[0].innerHTML=totalTip+"<sup>$</sup>";
	}
	
	return false;
}

function clean(){
	document.getElementsByClassName('amount')[0].style.display='none';
	document.getElementsByClassName('p')[0].innerHTML="";

}
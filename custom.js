const convert = ()=> {
	var select = document.getElementById('type');
	var value = select.options[select.selectedIndex].value;
	if(value=="celcuis")
	{
		var celcuis = parseFloat(document.querySelector("#degree").value);
		var FarenheitRes = (1.8*celcuis)+32;
		var a = FarenheitRes.toFixed(2);
		var c = a +" F"
		document.querySelector("#degree").value = celcuis;
		document.querySelector("#result").value = c;
	}
	else if(value=="Farenheit")
	{
		var Farenheit = parseFloat(document.querySelector("#degree").value);
		var celcuisRes = (Farenheit-32)/1.8;
		var b = celcuisRes.toFixed(2);
		var d= b+" C"
		document.querySelector("#degree").value = Farenheit;
		document.querySelector("#result").value = d;
	}
	else{
		var kelvin = parseFloat(document.querySelector("#degree").value);
		var celcuisRes= kelvin- 273.15;
		var b = celcuisRes.toFixed(2);
		var d= b+" C"
		document.querySelector("#degree").value = Farenheit;
		document.querySelector("#result").value = d;
	}
}

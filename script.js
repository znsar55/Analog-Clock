var second =0;
var minute = 0;
var hour = 0;
var d =new Date();
setInterval(
	function(){
		d=new Date();
		second = d.getSeconds() *6;
		minute = d.getMinutes()*6;
		hour = d.getHours() *30; 
		document.getElementById("hsecond").style.transform="rotate("+second+"deg)";
		document.getElementById("hminute").style.transform="rotate("+minute+"deg)";
		document.getElementById("hhour").style.transform="rotate("+hour+"deg)";
	}
);



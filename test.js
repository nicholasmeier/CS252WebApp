var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '30px Arial';
ctx.fillStyle = 'green';

var x = 100;
var y = 100;

ctx.fillText('A',y,x);

document.addEventListener("keydown", keyPush);
/*
window.onload=function() {
	canv=document.getElementById("test");
	ctx=canv.getContext("2d");
	document.addEventListener("keydown", keyPush);
}*/

function keyPush(evt){
	switch(evt.keyCode){
		case 37:
			//ctx.clearRect(0,0,canvas.width,canvas.height);
			x-=25;
			ctx.fillText('A',x,y);
			break;
		case 38:
			y-=25;
			ctx.fillText('A',x,y);
			break;
		case 39:
			x+=25;
			ctx.fillText('A',x,y);
			break;
		case 40:
			y+=25;
			ctx.fillText('A',x,y);
			break;
	}
}

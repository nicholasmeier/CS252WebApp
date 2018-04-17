var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '30px Arial';
ctx.fillStyle = 'green';

var x = 50;
var y = 50;
var player = new Image;
ctx.drawImage(player, x, y);

//ctx.fillText('A',y,x);

document.addEventListener("keydown", keyPush);

setInterval(update, 5);


function update(){
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,500,500);
	ctx.drawImage(player, x, y);
	/*ctx.fillStyle = 'green';
	ctx.fillText('A',x,y);*/
}

function keyPush(evt){
	switch(evt.keyCode){
		case 37:
			//ctx.clearRect(0,0,canvas.width,canvas.height);
			if (x > 0){
				x-=25;
				ctx.fillText('A',x,y);	
			}
			break;
		case 38:
			if (y > 25){
				y-=25;
				ctx.fillText('A',x,y);	
			}
			break;
		case 39:
			if (x < 475){
				x+=25;
				ctx.fillText('A',x,y);	
			}
			break;
		case 40:
			if (y < 500){
				y+=25;
				ctx.fillText('A',x,y);	
			}
			break;
	}
}
player.src = 'assets/player.png';
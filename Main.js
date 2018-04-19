var ctx = document.getElementById('ctx').getContext('2d');

ctx.fillStyle = 'white';
ctx.font = '15px Arial Black';

//player object, etc
var playerMouse = { pos_x : 250, 
					pos_y : 250, 
					d_x : 25,
					d_y : 25,
					health : 100,
					sprite : new Image}

var catIndex = 0;
var cheeseIndex = 0;

var catList = [new ];
var cheeseList = {};

function addCat(){
	var a = Math.random()*100;
	var b = Math.random()*100;
	var c = Math.random()*5;
	var d = Math.random()*5;
	return new cat(catIndex,a,b,c,d);
	catIndex++;
}

//used for repainting the canvas
setInterval(update, 10);

//main function for drawing the canvas state
function update(){
	//wipe old gamestate
	ctx.fillRect(0,0,500,500);

	//draw new gamestate
	ctx.drawImage(playerMouse.sprite, playerMouse.pos_x, playerMouse.pos_y);
	ctx.strokeText("Health: "+playerMouse.health)
}


//Handle keyboard input, using WASD to prevent scrolling page issues
document.addEventListener("keydown", keyPush);
function keyPush(evt){
	switch(evt.keyCode){
		case 65: //left
			if (playerMouse.pos_x > 0){
				playerMouse.pos_x-=playerMouse.d_x;
			}
			break;
		case 87: //up
			if (playerMouse.pos_y > 0){
				playerMouse.pos_y-=playerMouse.d_y;
			}
			break;
		case 68: //right
			if (playerMouse.pos_x < 475){
				playerMouse.pos_x+=playerMouse.d_x;
			}
			break;
		case 83: //down
			if (playerMouse.pos_y < 475){
				playerMouse.pos_y+=playerMouse.d_y;
			}
			break;
	}
}

//image sources
playerMouse.sprite.src='assets/farecik.png';
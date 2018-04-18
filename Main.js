var ctx = document.getElementById('ctx').getContext('2d');

ctx.fillStyle = 'white';
ctx.font = '15px Arial Black';

//player object, etc
var playerMouse = { pos_x : 250, 
					pos_y : 250, 
					d_x : 10,
					d_y : 10,
					health : 100,
					sprite : new Image}



//main function for drawing the canvas state
function update(){
	//wipe old gamestate
	ctx.fillRect(0,0,500,500);

	ctx.drawImage(playerMouse.sprite, playerMouse.pos_x, playerMouse.pos_y);
	ctx.strokeText("Health: "+playerMouse.health)	
}

//Keyboard movement, prevent awkward controlling
var keys = { Left: 37, Up: 38, Right: 39, Down: 40 };
var pressedKeys = {}; 

document.addEventListener("keydown", keyPush, false);
function keyPush(evt){
	if 	(keys.Left in pressedKeys){
		playerMouse.pos_x -= d_x;
	}
	if 	(keys.Right in pressedKeys){
		playerMouse.pos_x += d_x;	
	}
	if 	(keys.Up in pressedKeys){
		playerMouse.pos_y -= d_y;
	}
	if 	(keys.Down in pressedKeys){
		playerMouse.pos_y += d_y;
	}
	for (var k in keys){
		if (keys[k] == evt.keyCode){
			keysDown[evt.keyCode] = true;
			if (evt.preventDefault) {
				evt.preventDefault();
			}
			return true;
		}
	}
}
document.addEventListener("keyup", keyRel, false);
function keyRel(evt){
	for (var k in keys){
		if (keys[k] == evt.keyCode){
			delete pressedKeys[e.keyCode];
			if (evt.preventDefault) { evt.preventDefault(); }
			return true;
		}
	}
}

playerMouse.sprite.src='assets/farecik.png';
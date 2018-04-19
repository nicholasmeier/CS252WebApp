var ctx = document.getElementById('ctx').getContext('2d');

ctx.fillStyle = 'white';
ctx.font = '15px Arial Black';


var x = 50;
var y = 50;

var hp = 100;

var timeNow = Date.now();

var player = new Image;
var cat = new Image;
var cheese = new Image;

document.addEventListener("keydown", keyPush);

setInterval(update, 10);
setInterval(randomCats,10000);
setInterval(randomCheese,30000);

var catList = {};
var cheeseList = {};

function randomCats(){
	var a = Math.random()*100;
	var b = Math.random()*100;
	var c = Math.random()*5;
	var d = Math.random()*5;
	var e = Math.random();
	Cat(e,a,b,c,d);
}
function randomCheese(){
	var a = Math.random()*100;
	var b = Math.random()*100;
	var c = Math.random()*5;
	var d = Math.random()*5;
	var e = Math.random();
	Cheese(e,a,b,c,d);
}

function Cat(id,x,y,sx,sy){
	var kedi  = {
		xx:x,
		sx:sx,
		yy:y,
		sy:sy,
		id:id,
				}
	catList[id] = kedi;
}

function updateCat(s) {
	catPosition(s);
	drawCat(s);
}
function updateCheese(s){
	catPosition(s);
	drawCheese(s);
}

function catPosition(s) {
	
	s.xx += s.sx;
	s.yy += s.sy;

	if(s.xx < 0 || s.xx > 500) s.sx = -s.sx;
	if(s.yy < 0 || s.yy > 500) s.sy = -s.sy;

}

function drawCat(s){
	ctx.drawImage(cat, s.xx, s.yy);
}
function drawCheese(s){
	ctx.drawImage(cheese, s.xx, s.yy);
}


function Cheese(id,x,y,sx,sy){
	var cheese  = {
		xx:x,
		sx:sx,
		yy:y,
		sy:sy,
		id:id,
				}
	cheeseList[id] = cheese;
}

function getDistance(e2) {
	var vx = x - e2.xx;
	var vy = y - e2.yy;
	return Math.sqrt(vx*vx+vy*vy);
}

function collision(e2){
	var distance = getDistance(e2);
	return distance < 15;
}




randomCats();
randomCheese();

function update(){
	
	ctx.fillRect(0,0,500,500);


	for(var che_item in cheeseList){
		updateCheese(cheeseList[che_item]);
				var isColliding = collision(cheeseList[che_item]);

		if(isColliding) {
			hp = hp + 10;
			delete cheeseList[key];
			//add sounds and stuff
		}

	}

	for(var cat_item in catList){
		updateCat(catList[cat_item]);

		var isColliding = collision(catList[cat_item]);

		if(isColliding) {
			hp = hp - 1;
			//add sounds and stuff
		}
	}

		if(hp <=0) {
			var timeSurived = Date.now()-timeNow;
			alert("You Survived "+timeSurived+ " ms.!");
		
			hp =100;
			timeNow = Date.now();
			catList={};
			randomCats();
		}

		ctx.drawImage(player, x, y);
		ctx.strokeText("Life: "+hp,0,20);
		
}

function keyPush(evt){
	switch(evt.keyCode){
		case 37:
			if (x > 0){
				x-=20;
			}
			break;
		case 38:
			if (y > 0){
				y-=20;
			}
			break;
		case 39:
			if (x < 475){
				x+=20;	
			}
			break;
		case 40:
			if (y < 475){
				y+=20;
			}
			break;
	}
}
cheese.src='assets/cheese.png';
cat.src='assets/kedi.png';
player.src = 'assets/farecik.png';
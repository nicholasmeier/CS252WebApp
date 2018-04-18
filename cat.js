//trying to restructure things
function Cat(id, x, y, d_x, d_y){
	//x, y = coords in canvas
	//d_x, d_y = movement rate / change in position
	var kedi = {x:x, y:y, d_x:d_x, d_y:d_y, id:id }
	var sprite = new Image;

	this.catPosition = function(c){
		c.x += c.d_x;
		c.y += c.d_y;

		if(c.x < 0 || c.x > 500) c.d_x = -c.d_x;
		if(c.y < 0 || c.y > 500) c.d_y = -c.d_y;
	}

	this.drawCat = function (context, c){
		context.drawImage(c.sprite, c.x, c.y);
	}

	sprite.src='assets/kedi.png';
}
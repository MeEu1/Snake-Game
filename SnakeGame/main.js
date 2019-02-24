var scl = 20;
var snake;
var food;

function setup()
{
	createCanvas(600, 400);	

	frameRate(5);

	snake = new Snake();

	food = pickLocation();
}

function draw()
{
	background(125);

	stroke(125);
	snake.death();
	snake.update();
	snake.show();

	if(snake.eat(food))
	{
		food = pickLocation();
	}

	fill(255, 0, 0);
	rect(food.x, food.y, 20, 20);
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		snake.dir(0, -1);
	}
	else if(keyCode == DOWN_ARROW)
	{
		snake.dir(0, 1);
	}
	else if(keyCode == RIGHT_ARROW)
	{
		snake.dir(1, 0);
	}
	else if(keyCode == LEFT_ARROW)
	{
		snake.dir(-1, 0);
	}
}

function pickLocation()
{
	var cols = floor(random(width / scl));
	var rows = floor(random(height / scl));

	var f = createVector(floor(random(cols)), floor(random(rows)));
	f.mult(scl);	

	return f;
}
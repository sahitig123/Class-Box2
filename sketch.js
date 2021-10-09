
var box1, box2
function setup() 
{
  createCanvas(400, 400);

  box1 = new Box (10, 100, 40, 80, 3)
  box2 = new Box (10, 200, 50, 50, 2, 2)
  
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();

  box2.show();
  box2.moveUp();

}


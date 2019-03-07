var img;
var y;
function preload(){
 img = loadImage('Yoshi_-_Mario_Party_10.png');
}
function setup() {
  y = new Yoshi();
  createCanvas(400, 400);
}

function draw() {
  background(220);
  y.mostrar();
  if (keyIsPressed && keyCode == RIGHT_ARROW){
  y.derecha();
  } 
  if (keyIsPressed && keyCode == LEFT_ARROW){
  y.izquierda();
  } 
  if (keyIsPressed && keyCode == UP_ARROW){
  y.arriba();
  } 
  if (keyIsPressed && keyCode == DOWN_ARROW){
  y.abajo();
  } 
}


yoshi.js

class Yoshi {
  constructor() {
    this.x = width*2 ;
    this.y = height*2 ;
    this.l = 5;
  }
  mostrar(){
  imageMode(CENTER);
  image(img, this.x,this.y,200,200);
  }

  derecha() {
    this.x = this.x + this.l;
  }
  izquierda() {
    this.x = this.x - this.l;
  }
 arriba() {
    this.y = this.y - this.l ;
  }
  abajo() {
    this.y = this.y + this.l;
  }
} 






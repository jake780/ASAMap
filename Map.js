class Car {
  constructor(height, width) {
    this.x = 50;
    this.y = 50;
    this.height = height;
    this.width = width;
  }
  
  mouseCollide(mousex, mousey) {
    if (((mousex > this.x) && (mousex < (this.x + this.width))) && 
      ((mousey > this.y) && (mousey < (this.y + this.height)))) {
      return true;
    }
    else {
      return false;
    }
      
  }
  
  move(click, mousex, mousey) {
    if (click && this.mouseCollide(mousex, mousey)) {
      this.x = mousex - (this.width/2);
      this.y = mousey - (this.height/2);
    }
  }
  
  draw() {
    rect(this.x, this.y, this.width, this.height);
  }

}

const c = new Car(50, 100);
const v = new Car(200, 50);


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(155);
  c.move(mouseIsPressed, mouseX, mouseY);
  v.move(mouseIsPressed, mouseX, mouseY);
  c.draw();
  v.draw();
}
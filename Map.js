class Map {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.cars = [];

  }
  addCar() {
    let colors = [Math.floor(Math.random() * (255 - 0 + 1) + 0), Math.floor(Math.random() * (255 - 0 + 1) + 0), Math.floor(Math.random() * (255 - 0 + 1) + 0)]
    this.cars.push(new Car(this, 40, 100, colors));
  }
}

class Base {
    constructor(map, height, width, color) {
      this.map = map;
      this.x = 400;
      this.y = 400;
      this.color = color;
      this.height = height;
      this.width = width;
      this.dragging = false;
  }
  mouseCollide(mousex, mousey) {
    // Mouse collision with objects
    if (((mousex > this.x) && (mousex < (this.x + this.width))) &&
      ((mousey > this.y) && (mousey < (this.y + this.height)))) {
      return true;
    }
    else {
      return false;
    }
  }
  bounds() {
    if (this.x > (m.width - this.width)) {
      this.x = (m.width - this.width);
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y > (m.height - this.height)) {
      this.y = (m.height - this.height);
    }
    if (this.y < 0) {
      this.y = 0;
    }

  }
  move(click, mousex, mousey) {
    // Drag and Drop
    if (this.dragging) {
      this.x = mousex - this.width / 2;
      this.y = mousey - this.height / 2;
    }
    if (click && this.mouseCollide(mousex, mousey)) {
      if (!this.dragging) {
        this.map.addCar(click);
      }
      this.dragging = true;
    }
    if (!click && this.dragging) {
      this.dragging = false;
    }

    // Rotate
    // if (click && )
      
    //Boundary
    this.bounds();
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
    fill(this.color);
  }
}

class Car extends Base {
  constructor(map, height, width, color) {
    super(map);
    this.color = color;
    this.height = height;
    this.width = width;
    this.x = 400-this.width/2;
    this.y = 800-this.height;
  }
}

const m = new Map(800, 800, (255, 175, 80));
m.addCar();

function setup() {
  createCanvas(m.width,m.height)
}

// MAINLOOP
function draw() {
  // Draw Background
  background(m.color);

  // For every car
  m.cars.map(car => {
    car.move(mouseIsPressed, mouseX, mouseY);
    car.draw();
  });
}
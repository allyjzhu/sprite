const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const BG_COLOR = [255, 250, 250];
let kid;
let kidAnim;

function preload() {
  const kidSpritesheet = loadSpriteSheet("assets/sprite1.png", 141, 124, 2);
  kidAnim = loadAnimation(kidSpritesheet);
  kid = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 141, 124);
  kid.moveSpeed = 2;
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  kid.addAnimation("move", kidAnim);
  kid.addImage("still", loadImage("assets/still.png"));
  kid.setDefaultCollider();
}

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  kid.limitSpeed(kid.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(BG_COLOR);
  update(kid);
}
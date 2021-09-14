const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;
var base, base2;
var jointPoint;
var jointLink;
var bg;
var stones = [];

function preload() {
bg = loadImage("Capture.JPG")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(10, 580, 20000, 40);
  base = new Base(100, height / 2 + 50, 600, 100);
  base2 = new Base(width - 50, height / 2 + 50, 600, 100);

  bridge = new Bridge(15, { x: 340, y:260 });
  jointPoint = new Base(940,275,20,90);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  image(bg, 0, 0, width, height);
  ground.show();
  bridge.show();
  base.show();
  base2.show();
  for (var stone of stones) {
    stone.show();
  }

}
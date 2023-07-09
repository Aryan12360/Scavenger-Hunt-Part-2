var scene, word, system, security;
var score = 0;
var greeting, play, unlock, scene2, text1;

function preload() {
  scene = loadImage("assets/scene.png");
  scene2 = loadImage("assets/scene2.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  system = new System();
  security = new Security();

  unlock = createButton("Unlock");
  unlock.position(width / 2 - 100, height / 2 - 150);
  unlock.class("unlock");
  unlock.hide();


  greeting = createElement("h1", "Welcome to the second part and last bit of your scavenger hunt!! You have to answer these 3 questions to get last two numbers.")
  greeting.position(width / 20, height / 2 - 450);
  greeting.class("greeting");

  text1 = createElement("h1", "TREASURE UNLOCKED");
  text1.class("text");
  text1.position(width / 2 - 200, height / 2);
  text1.hide();

}

function draw() {
  background(scene);

  clues();
  security.display();

  if (score == 3) {
    clear();

    background("black");

    greeting.hide();

    fill("yellow")
    textSize(40);
    text(`Well Done !! The last two numbers of the encryption are 2 and 5. The code is: 1 3 2 5`, width / 10, height / 2 - 200);


    unlock.show();

  }


  unlock.mousePressed(() => {
    text1.show();
  })


}
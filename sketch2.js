const urlString = window.location.href;
const url = new URL(urlString);
let nameP = url.searchParams.get('nome');

function preload() {
	myBackground = loadImage("assets/myBackground.jpg");
	mySong = loadSound("assets/mySong.mp3");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
	imageMode(CENTER);
    image(myBackground, width / 2, height / 2, 1920, 1080);
	mySong.play();

	text_01 = createDiv("Congratulations, " + nameP + "!");
	text_02 = createDiv("My favorite color is");
	text_03 = createDiv("LIGHT BLUE");
	text_01.class("mainpar");
  	text_01.position(0, windowHeight/2-300);
	text_02.class("mainpar");
  	text_02.position(0, windowHeight/2-225);
	text_03.class("mainpar");
  	text_03.position(0, windowHeight/2-150);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	image(myBackground, width / 2, height / 2, 1920, 1080);
  	text_01.position(0, windowHeight/2-300);
  	text_02.position(0, windowHeight/2-225);
  	text_03.position(0, windowHeight/2-150);
}

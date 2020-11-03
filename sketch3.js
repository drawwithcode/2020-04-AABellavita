let wSubmit = 'Try again!';
let rect_00;
const urlString = window.location.href;
const url = new URL(urlString);
let nameP = url.searchParams.get('nome');


function setup() {
    createCanvas(windowWidth,windowHeight);
	background('black');

	text_01 = createDiv("I'm sorry " + nameP + "...");
	text_02 = createDiv("You didn't guess my favourite color");
	text_01.class("mainpar");
  	text_01.position(0, windowHeight/2-150);
	text_02.class("mainpar");
  	text_02.position(0, windowHeight/2-75);

	rect_00 = new MyRect(windowWidth/2, windowHeight/2+50, 200, 75, 75, '#1976d2');
}

function draw() {
	background('black');
    rect_00.display();

	fill('white');
    textSize(30);
    textFont('Quicksand');
    textAlign(CENTER);
	text(wSubmit, windowWidth/2, windowHeight/2+58);

	if (mouseX > windowWidth/2-100 && mouseX < windowWidth/2+100 &&
        mouseY > windowHeight/2+10 && mouseY < windowHeight/2+90) {
        rect_00 = new MyRect(windowWidth/2, windowHeight/2+50, 200, 75, 75, '#0d47a1');
        if (mouseIsPressed) {
            rect_00 = new MyRect(windowWidth/2, windowHeight/2+50, 200, 75, 75, '#90caf9');
            fill('#0d47a1');
            text(wSubmit, windowWidth/2, windowHeight/2+58);
        }
    } else {
        rect_00 = new MyRect(windowWidth/2, windowHeight/2+50, 200, 75, 75, '#1976d2');
    }
}

class MyRect {
    constructor(temp_x, temp_y, temp_w, temp_h, temp_r, temp_f) {
        this.x = temp_x;
        this.y = temp_y;
        this.w = temp_w;
        this.h = temp_h;
        this.r = temp_r;
        this.f = temp_f;
    }
    display() {
        push();
		noStroke();
        fill(this.f);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h, this.r);
        pop();
    }
}

function mouseClicked() {
	if (mouseX > windowWidth/2-100 && mouseX < windowWidth/2+100 &&
        mouseY > windowHeight/2+10 && mouseY < windowHeight/2+90) {
		window.open('index1.html?nome=' + nameP, '_self');
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  	text_01.position(0, windowHeight/2-150);
  	text_02.position(0, windowHeight/2-75);

	rect_00 = new MyRect(windowWidth/2, windowHeight/2+50, 200, 75, 75, '#1976d2');
}

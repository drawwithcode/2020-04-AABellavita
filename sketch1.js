var gui;
const urlString = window.location.href;
const url = new URL(urlString);
let nameP = url.searchParams.get('nome');
let params = {
	r: 175,
	g: 175,
	b: 175
};
let attempts = 5;
let wSubmit = 'Submit';
let redRight = false;
let greenRight = false;
let blueRight = false;
let clue1 = false;
let clue2 = false;
let clue3 = false;
let clue4 = false;
let clue5 = false;
let clue6 = false;
let clue7 = false;
let clue8 = false;


function preload() {}

function setup() {
    createCanvas(windowWidth,windowHeight);

	rect_00 = new MyRect(windowWidth/2, windowHeight/2, 675, 675, 50, 'white');
	rect_01 = new MyRect(windowWidth/2, windowHeight/2-200, 300, 50, 50, 'rgb(135,135,135)');
	rect_02 = new MyRect(windowWidth/2, windowHeight/2-35, 400, 180, 50, 'rgb(135,135,135)');
	rect_03 = new MyRect(windowWidth/2, windowHeight/2, 175, 50, 50, 'rgb(175,175,175)');
	rect_04 = new MyRect(windowWidth/2+175, windowHeight/2+155, 220, 44, 50, 'white');
	rect_05 = new MyRect(windowWidth/2+175, windowHeight/2+207, 220, 44, 50, 'white');
	rect_06 = new MyRect(windowWidth/2+175, windowHeight/2+259, 220, 44, 50, 'white');

	gui = createGui('Values of my favorite color RGB');
	sliderRange(0, 255, 1);
	gui.addObject(params);
	gui.setPosition(windowWidth/2-275, windowHeight/2+100);
	text_01 = createDiv("Hi, " + nameP);
	text_02 = createDiv("Try to guess my favorite color");
	text_03 = createDiv("You have " + attempts + " attempts left");
	text_04 = createDiv("");
	text_05 = createDiv("");
	text_06 = createDiv("");

}

function draw() {
	background(params.r, params.g, params.b);
	noStroke();
    rect_00.display();
	rect_01.display();
	rect_02.display();
	rect_03.display();
	rect_04.display();
	rect_05.display();
	rect_06.display();

	push();
	fill(params.r,0,0);
	ellipse(windowWidth/2,windowHeight/2+155,35);
	fill(0,params.g,0);
	ellipse(windowWidth/2,windowHeight/2+207,35);
	fill(0,0,params.b);
	ellipse(windowWidth/2,windowHeight/2+260,35);

  	text_01.class("mainpar");
  	text_01.position(0, windowHeight/2-220);
	text_02.class("secondpar");
  	text_02.position(0, windowHeight/2-100);
	text_03.class("secondpar");
  	text_03.position(0, windowHeight/2-70);
	fill('white');
    textSize(30);
    textFont('Quicksand');
    textAlign(CENTER);
	text(wSubmit, windowWidth/2, windowHeight/2+10);

	if (mouseX > windowWidth/2-100 && mouseX < windowWidth/2+100 &&
        mouseY > windowHeight/2-25 && mouseY < windowHeight/2+25) {
        rect_03 = new MyRect(windowWidth/2, windowHeight/2, 175, 50, 50, 'rgb(100,100,100)');
        if (mouseIsPressed) {
            rect_03 = new MyRect(windowWidth/2, windowHeight/2, 175, 50, 50, 'rgb(200,200,200)');
            fill('rgb(100,100,100)');
            text(wSubmit, windowWidth/2, windowHeight/2+10);
        }
    } else {
        rect_03 = new MyRect(windowWidth/2, windowHeight/2, 175, 50, 50, 'rgb(175,175,175)');
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
        mouseY > windowHeight/2-25 && mouseY < windowHeight/2+25) {
		attempts--;
		text_03.hide();
		if (attempts >= 1) {
			if (attempts == 1) {
				text_03 = createDiv("You have " + attempts + " attempt left");
			} else {
				text_03 = createDiv("You have " + attempts + " attempts left");
			}
			if (params.r > 20) {
				text_04.hide();
				rect_04 = new MyRect(windowWidth/2+175, windowHeight/2+155, 220, 44, 50, 'rgb(175,0,0)');
				text_04 = createDiv("I don't really like red");
				text_04.class("thirdpar");
			  	text_04.position(175, windowHeight/2+142);
				clue1 = true;
			} else {
				text_04.hide();
				rect_04 = new MyRect(windowWidth/2+175, windowHeight/2+155, 220, 44, 50, 'rgb(0,175,0)');
				text_04 = createDiv("That's right!");
				text_04.class("thirdpar");
			  	text_04.position(175, windowHeight/2+142);
				redRight = true;
				clue2 = true;
			}
			if (params.g > 160) {
				text_05.hide();
				rect_05 = new MyRect(windowWidth/2+175, windowHeight/2+207, 220, 44, 50, 'rgb(175,0,0)');
				text_05 = createDiv("Too much green!");
				text_05.class("thirdpar");
			  	text_05.position(175, windowHeight/2+195);
				clue3 = true;
				clue4 = false;
			} else if (params.g < 140) {
				text_05.hide();
				rect_05 = new MyRect(windowWidth/2+175, windowHeight/2+207, 220, 44, 50, 'rgb(175,0,0)');
				text_05 = createDiv("Too little green...");
				text_05.class("thirdpar");
			  	text_05.position(175, windowHeight/2+195);
				clue4 = true;
				clue3 = false;
			} else {
				text_05.hide();
				rect_05 = new MyRect(windowWidth/2+175, windowHeight/2+207, 220, 44, 50, 'rgb(0,175,0)');
				text_05 = createDiv("You got it!");
				text_05.class("thirdpar");
			  	text_05.position(175, windowHeight/2+195);
				greenRight = true;
				clue5 = true;
				clue3 = false;
				clue4 = false;
			}
			if (params.b > 210) {
				text_06.hide();
				rect_06 = new MyRect(windowWidth/2+175, windowHeight/2+259, 220, 44, 50, 'rgb(175,0,0)');
				text_06 = createDiv("Maybe that's too much");
				text_06.class("thirdpar");
			  	text_06.position(175, windowHeight/2+246);
				clue6 = true;
				clue7 = false;
			} else if (params.b < 190) {
				text_06.hide();
				rect_06 = new MyRect(windowWidth/2+175, windowHeight/2+259, 220, 44, 50, 'rgb(175,0,0)');
				text_06 = createDiv("I really like blue!");
				text_06.class("thirdpar");
			  	text_06.position(175, windowHeight/2+246);
				clue7 = true;
				clue6 = false;
			} else {
				text_06.hide();
				rect_06 = new MyRect(windowWidth/2+175, windowHeight/2+259, 220, 44, 50, 'rgb(0,175,0)');
				text_06 = createDiv("Amazing!");
				text_06.class("thirdpar");
			  	text_06.position(175, windowHeight/2+246);
				blueRight = true;
				clue8 = true;
				clue7 = false;
				clue6 = false;
			}
			if (redRight == true && greenRight == true && blueRight == true) {
				window.open('index2.html?nome=' + nameP, '_self');
			}
		} else if (attempts == 0) {
			window.open('index3.html?nome=' + nameP, '_self');
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight);

	rect_00 = new MyRect(windowWidth/2, windowHeight/2, 675, 675, 50, 'white');
	rect_01 = new MyRect(windowWidth/2, windowHeight/2-200, 300, 50, 50, 'rgb(135,135,135)');
	rect_02 = new MyRect(windowWidth/2, windowHeight/2-35, 400, 180, 50, 'rgb(135,135,135)');
	rect_03 = new MyRect(windowWidth/2, windowHeight/2, 175, 50, 50, 'rgb(175,175,175)');
	rect_04 = new MyRect(windowWidth/2+175, windowHeight/2+155, 220, 44, 50, 'white');
	rect_05 = new MyRect(windowWidth/2+175, windowHeight/2+207, 220, 44, 50, 'white');
	rect_06 = new MyRect(windowWidth/2+175, windowHeight/2+259, 220, 44, 50, 'white');

	gui.setPosition(windowWidth/2-275, windowHeight/2+100);
	text_01.position(0, windowHeight/2-220);
	text_02.class("secondpar");
  	text_02.position(0, windowHeight/2-100);
	text_03.class("secondpar");
  	text_03.position(0, windowHeight/2-70);

	if (clue1 == true && clue2 == false) {
		rect_04 = new MyRect(windowWidth/2+175, windowHeight/2+155, 220, 44, 50, 'rgb(175,0,0)');
		text_04.position(175, windowHeight/2+142);
	} else if (clue2 == true){
		rect_04 = new MyRect(windowWidth/2+175, windowHeight/2+155, 220, 44, 50, 'rgb(0,175,0)');
		text_04.position(175, windowHeight/2+142);
	}
	if (clue3 == true) {
		rect_05 = new MyRect(windowWidth/2+175, windowHeight/2+207, 220, 44, 50, 'rgb(175,0,0)');
		text_05.position(175, windowHeight/2+195);
	} else if (clue4 == true) {
		rect_05 = new MyRect(windowWidth/2+175, windowHeight/2+207, 220, 44, 50, 'rgb(175,0,0)');
		text_05.position(175, windowHeight/2+195);
	} else if (clue5 == true) {
		rect_05 = new MyRect(windowWidth/2+175, windowHeight/2+207, 220, 44, 50, 'rgb(0,175,0)');
		text_05.position(175, windowHeight/2+195);
	}
	if (clue6 == true) {
		rect_06 = new MyRect(windowWidth/2+175, windowHeight/2+259, 220, 44, 50, 'rgb(175,0,0)');
		text_06.position(175, windowHeight/2+246);
	} else if (clue7 == true) {
		rect_06 = new MyRect(windowWidth/2+175, windowHeight/2+259, 220, 44, 50, 'rgb(175,0,0)');
		text_06.position(175, windowHeight/2+246);
	} else if (clue8 == true) {
		rect_06 = new MyRect(windowWidth/2+175, windowHeight/2+259, 220, 44, 50, 'rgb(0,175,0)');
		text_06.position(175, windowHeight/2+246);
	}

}

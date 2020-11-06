let wSubmit = 'Submit';
let wNull = "C'mon type something";
let lighterB = '#90caf9';
let lightB = '#2196f3';
let midB = '#1976d2';
let darkB = '#0d47a1';
let lighterO = '#ffcc80';
let lightO = '#ff9800';
let midO = '#fb8c00';
let darkO = '#ef6c00';
let rect_00;
let rect_01;
let rect_02;
let rect_03;
let nameP;
let inpName;
let inp = false;

function preload() {}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(color(175,175,175));

    rect_00 = new MyRect(windowWidth/2, windowHeight/2, 675, 675, 50, 'white');
    rect_01 = new MyRect(windowWidth/2, windowHeight/2-200, 250, 100, 50, darkO);
    rect_02 = new MyRect(windowWidth/2, windowHeight/2, 450, 175, 50, midO);
    rect_03 = new MyRect(windowWidth/2, windowHeight/2+175, 175, 50, 50, lightO);
    rect_04 = new MyRect(windowWidth/2, windowHeight/2+265, 250, 50, 50, darkO);

    text_01 = createDiv("Welcome");
	text_01.class("mainpar");
	text_02 = createDiv("Please enter your name");
	text_02.class("secondpar");

    //myInput();
    let inpName = createInput('');
    inpName.input(myInputEvent);
    inpName.position(windowWidth/2-inpName.width/2,windowHeight/2+10);
}

function draw() {
    noStroke();
    rect_00.display();
    rect_01.display();
    rect_02.display();
    rect_03.display();

    text_01.position(0, windowHeight/2-220);
    text_02.position(0, windowHeight/2-50);

    fill('white');
    textFont('Quicksand');
    textAlign(CENTER);
    textSize(20);
    text(wSubmit, windowWidth/2, windowHeight/2+183);

    if (mouseX > windowWidth/2-100 && mouseX < windowWidth/2+100 &&
        mouseY > windowHeight/2+150 && mouseY < windowHeight/2+200) {
        rect_03 = new MyRect(windowWidth/2, windowHeight/2+175, 175, 50, 50, darkO);
        if (mouseIsPressed) {
            rect_03 = new MyRect(windowWidth/2, windowHeight/2+175, 175, 50, 50, lighterO);
            fill(darkO);
            text(wSubmit, windowWidth/2, windowHeight/2+183);
            if (nameP == undefined) {
                rect_04.display();
                fill('white')
                text(wNull, windowWidth/2, windowHeight/2+270);
            } else {
                window.open('index1.html?nome=' + nameP, '_self');
            }
        }
    } else {
        rect_03 = new MyRect(windowWidth/2, windowHeight/2+175, 175, 50, 50, lightO);
    }
}

class MyRect {
    constructor(temp_x, temp_y, temp_w, temp_h, temp_c, temp_f) {
        this.x = temp_x;
        this.y = temp_y;
        this.w = temp_w;
        this.h = temp_h;
        this.c = temp_c;
        this.f = temp_f;
    }
    display() {
        push();
        noStroke();
        fill(this.f);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h, this.c);
        pop();
    }
}

function myInputEvent() {
    nameP = this.value();
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
    background(color(175,175,175));

    //myInput();
    let inpName = createInput('');
    inpName.input(myInputEvent);
    inpName.position(windowWidth/2-inpName.width/2,windowHeight/2+10);  

    rect_00 = new MyRect(windowWidth/2, windowHeight/2, 675, 675, 50, 'white');
    rect_01 = new MyRect(windowWidth/2, windowHeight/2-200, 250, 100, 50, darkO);
    rect_02 = new MyRect(windowWidth/2, windowHeight/2, 450, 175, 50, midO);
    rect_03 = new MyRect(windowWidth/2, windowHeight/2+175, 175, 50, 50, lightO);
    rect_04 = new MyRect(windowWidth/2, windowHeight/2+265, 250, 50, 50, darkO);
}

// function myInput() {
//     if (inp == false) {
//         let inpName = createInput('');
//         inpName.input(myInputEvent);
//         inpName.position(windowWidth/2-inpName.width/2,windowHeight/2+10);
//         inp = true;
//     } else if (inp == true) {
//         console.log('hi');
//         inpName.hide();
//         let inpName = createInput('');
//         inpName.input(myInputEvent);
//         inpName.position(windowWidth/2-inpName.width/2,windowHeight/2+10);
//     }
// }

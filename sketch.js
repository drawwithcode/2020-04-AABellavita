let wText = 'Welcome';
let wBox = 'Please enter your name';
let wSubmit = 'Submit';
let wNull = "C'mon type something";
let lighterB = '#90caf9';
let lightB = '#2196f3';
let midB = '#1976d2';
let darkB = '#0d47a1';
// let lighterG = '#c8e6c9';
// let lightG = '#66bb6a';
// let midG = '#43a047';
// let darkG = '#2e7d32';
let lighterG = '#ffcc80';
let lightG = '#ff9800';
let midG = '#fb8c00';
let darkG = '#ef6c00';
let rect_00;
let rect_01;
let rect_02;
let rect_03;
let nameP;

function preload() {}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(darkG);

    rect_00 = new MyRect(windowWidth/2, windowHeight/2, 675, 675, 50, 'white');
    rect_01 = new MyRect(windowWidth/2, windowHeight/2-200, 250, 100, 50, darkG);
    rect_02 = new MyRect(windowWidth/2, windowHeight/2, 450, 175, 50, midG);
    rect_03 = new MyRect(windowWidth/2, windowHeight/2+175, 175, 50, 50, lightG);
    rect_04 = new MyRect(windowWidth/2, windowHeight/2+265, 250, 50, 50, darkG);

    let inpName = createInput('');
    inpName.input(myInputEvent);
    inpName.position(windowWidth/2-inpName.width/2,windowHeight/2+10)
}

function draw() {
    noStroke();
    rect_00.display();
    rect_01.display();
    rect_02.display();
    rect_03.display();

    fill('white');
    textSize(30);
    textFont('Quicksand');
    textAlign(CENTER);
    text(wText, windowWidth/2, windowHeight/2-190);
    textSize(20);
    text(wBox, windowWidth/2, windowHeight/2-30);
    text(wSubmit, windowWidth/2, windowHeight/2+183);

    if (mouseX > windowWidth/2-100 && mouseX < windowWidth/2+100 &&
        mouseY > windowHeight/2+150 && mouseY < windowHeight/2+200) {
        rect_03 = new MyRect(windowWidth/2, windowHeight/2+175, 175, 50, 50, darkG);
        if (mouseIsPressed) {
            rect_03 = new MyRect(windowWidth/2, windowHeight/2+175, 175, 50, 50, lighterG);
            fill(darkG);
            text(wSubmit, windowWidth/2, windowHeight/2+183);
            if (name == undefined) {
                rect_04.display();
                fill('white')
                text(wNull, windowWidth/2, windowHeight/2+270);
            } else {
                window.open('index1.html?nome=' + nameP, '_self');
            }
        }
    } else {
        rect_03 = new MyRect(windowWidth/2, windowHeight/2+175, 175, 50, 50, lightG);
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
    background(darkG);

    let inpName = createInput('');
    inpName.input(myInputEvent);
    inpName.position(windowWidth/2-inpName.width/2,windowHeight/2+10)
    rect_00 = new MyRect(windowWidth/2, windowHeight/2, 675, 675, 50, 'white');
    rect_01 = new MyRect(windowWidth/2, windowHeight/2-200, 250, 100, 50, darkG);
    rect_02 = new MyRect(windowWidth/2, windowHeight/2, 450, 175, 50, midG);
    rect_03 = new MyRect(windowWidth/2, windowHeight/2+175, 175, 50, 50, lightG);
    rect_04 = new MyRect(windowWidth/2, windowHeight/2+265, 250, 50, 50, darkG);
}

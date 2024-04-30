function setup() {
    canvas=createCanvas(600,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    }
    
    function draw() {
    image(video,41,41,500,330);
    fill("green");
    rect(38,25,500,18);
    fill("green");
    rect(25,38,18,300)
    fill("green");
    rect(38,360,500,18);
    fill("green");
    rect(530,38,18,300);
    fill("red");
    circle(50,40,62);
    fill("red");
    circle(540,40,62);
    fill("red");
    circle(50,360,62);
    fill("red");
    circle(540,360,62);
    }
    
    function take_snapshot() {
    save("birthday_pictures.png");
    }


class ew {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.angle = 0;
        var option = {
            isStatic: true
        }
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, option);
        this.leftBody = Bodies.rectangle(this.x - this.width / 2, this.y - this.height / 2, this.thickness, this.height, option);
        Matter.Body.setAngle(this.leftBody, this.angle);
        this.rightBody = Bodies.rectangle(this.x + this.width / 2, this.y - this.height / 2, this.thickness, this.height, option);
        Matter.Body.setAngle(this.rightBody, this.angle * -1);
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);

        this.image = loadImage("uistrash.png");
    }
    display() {
        var qwerty = this.bottomBody.position;
        var bodyLeft = this.leftBody.position;
        var rightBody = this.rightBody.position;
        //yeet
        push();
        //quack
        translate(bodyLeft.x, bodyLeft.y);
        //rip
        rectMode(CENTER);
        //OOF
        angleMode(RADIANS);
        //potato
        rotate(this.angle);
        //tomato
        fill("red");
        //qwertyuiopasdfghjklzxcvbnm
        //image(this.image, 0, 0, this.thickness, this.height);
        //spoopy
        pop();
        //yeet

        //SPLITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT

        push();
        //:D
        translate(rightBody.x, rightBody.y);
        //
        rectMode(CENTER);
        //;w;
        angleMode(RADIANS);
        //QUACK
        rotate(this.angle * -1);
        //chez
        fill("red");
        //burger
        image(this.image, -200, -this.height / 2, this.width, this.height);
        //E
        pop();

        //SPLITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT

        push();
        //nub
        translate(qwerty.x, qwerty.y);
        //RE
        rectMode(CENTER);
        //;w;
        angleMode(RADIANS);
        //qwewqewqeqwewqeqweqwe
        rotate(this.angle);
        //dasdasasdsadasdasa
        fill("red");
        //.,.
        //image(this.image, 0, 0, this.width, this.thickness);
        //:)
        pop();




    }

























}
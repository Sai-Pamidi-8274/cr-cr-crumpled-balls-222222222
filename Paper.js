class wasteoftrees {

    constructor(x, y, radius) {

        var option = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius / 2, option);
        this.image = loadImage("pupper.png");


        World.add(world, this.body);


    }
    display() {
        var quock = this.body.position;
        push();
        translate(quock.x, quock.y);
        imageMode(CENTER)
        fill("magenta");
        image(this.image, 0, 0, this.radius, this.radius);
        pop();




    }


}
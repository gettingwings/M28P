class Mango{
    constructor(x, y){
        var options = {
            'isStatic': 'true',
            'restitution': 0,
            friction: 0.8,
            frictionStatic: 13,
            frictionAir: 0.03,
            'density':1.2

        }
        this.r = 15;
        this.body = Matter.Bodies.rectangle(x, y, this.r, this.r, options);
        Matter.World.add(world, this.body);
        this.image = loadImage("sprites/mango.png");
        

    }

    display(){
        var pos = this.body.position;
		push()
		translate(pos.x, pos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		//ellipseMode(CENTER);
		image(this.image, 0, 0, this.r*2, this.r*2);
		pop()
    }

}
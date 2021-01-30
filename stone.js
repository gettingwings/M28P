class Stone{
    constructor(x,y){
        var options = {
            'isStatic': false,
            'restitution':0,
            'friction':1,
            'density':1.2,
            frictionAir: 0.001
        }
        this.r = 10
        this.body = Matter.Bodies.circle(x, y, this.r, options);
        Matter.World.add(world, this.body);
        this.image = loadImage("sprites/stone.png");

    }

    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0, this.r*2, this.r*2 );
        pop();
    }

}